// =========================================================================
// Главный движок и общие утилиты приложения (main.js)
// =========================================================================
class SiteEngine {
  static activeInstance = null;
  static activeSearchHandler = null;

  static registerSearch(handlerFn) {
    this.activeSearchHandler = handlerFn;
  }

  // --- ОБЩИЕ ВСПОМОГАТЕЛЬНЫЕ УТИЛИТЫ ---

  static getTrigrams(str) {
    const s = "  " + (str || "").toLowerCase() + "  ";
    const trigrams = [];
    for (let i = 0; i < s.length - 2; i++) trigrams.push(s.substring(i, i + 3));
    return trigrams;
  }

  static calculateMatchScore(text, q) {
    if (!text || !q) return 0;
    const idx = text.indexOf(q);
    if (idx === -1) return 0;

    if (idx === 0) return 3.0;

    const charBefore = text.charAt(idx - 1);
    if ([" ", "-", "/", "(", "[", '"', "'", "@"].includes(charBefore)) {
      return 2.0;
    }

    return 1.0;
  }

  static animateCardAppearance(card) {
    if (!card) return;
    card.classList.add("appear");

    setTimeout(() => {
      card.classList.add("visible");
    }, 10);

    setTimeout(() => {
      card.classList.remove("appear", "visible");
    }, 300);
  }

  static processNameForSorting(name) {
    if (!name) return { cleanName: "", sortName: "", compareName: "", phantomText: "" };

    let baseName = name;
    let phantomText = "";

    if (name.includes("||")) {
      const parts = name.split("||");
      baseName = parts[0].trim();
      phantomText = parts.slice(1).join(" ").trim();
    }

    const makeCompareName = (str) => str.replace(/\s+/g, "").toLowerCase();

    const regex = /&#(\d+);?/;
    const match = baseName.match(regex);

    if (match) {
      const clean = baseName.replace(regex, "").trim();
      const sort = baseName.replace(regex, ` ${match[1]}`).trim();
      return {
        cleanName: clean,
        sortName: sort,
        compareName: makeCompareName(sort),
        phantomText: phantomText.toLowerCase(),
      };
    }

    return {
      cleanName: baseName,
      sortName: baseName,
      compareName: makeCompareName(baseName),
      phantomText: phantomText.toLowerCase(),
    };
  }

  static getGroupKey(name) {
    if (!name || !name.trim()) return "#";
    const firstChar = name.trim()[0].toUpperCase();
    return /\d/.test(firstChar) ? "#" : firstChar;
  }

  // --- ЕДИНЫЙ АЛГОРИТМ ПОИСКА И РЕНДЕРИНГ РЕЗУЛЬТАТОВ ---

  static runSearch({ query, cardsContainer, noteEl, indexedData, createCardFn, cardTypeClass, enableNickSearch = false }) {
    if (!cardsContainer) return;

    const resultsEl = cardsContainer.closest(".content") || cardsContainer;
    const targetNoteEl = noteEl || (resultsEl.previousElementSibling?.classList.contains("note") ? resultsEl.previousElementSibling : resultsEl.parentElement?.querySelector(".note"));

    let moreBtn = resultsEl.querySelector(".more") || resultsEl.parentElement?.querySelector(".more");
    const hideMoreBtn = () => {
      if (moreBtn) moreBtn.style.display = "none";
    };

    const rawQuery = (query || "").trim();
    const isNickSearch = enableNickSearch && rawQuery.startsWith("@");
    const searchQuery = isNickSearch ? rawQuery.slice(1).trim().toLowerCase() : rawQuery.toLowerCase();
    const minLength = isNickSearch ? 1 : 2;

    if (searchQuery.length < minLength) {
      cardsContainer.innerHTML = "";
      if (targetNoteEl) targetNoteEl.style.display = "";
      hideMoreBtn();
      return;
    }

    const queryTris = SiteEngine.getTrigrams(searchQuery);
    const filtered = [];

    for (let i = 0; i < indexedData.length; i++) {
      const item = indexedData[i];
      let directScore = 0;
      let targetTrigramsStr = "";

      if (enableNickSearch) {
        const targetText = isNickSearch ? item.nickLower : item.titleLower;
        targetTrigramsStr = isNickSearch ? item.nickTrigramsStr : item.titleTrigramsStr;
        if (targetText) {
          directScore = SiteEngine.calculateMatchScore(targetText, searchQuery);
        }
      } else {
        const scoreRu = SiteEngine.calculateMatchScore(item.nameRuLower, searchQuery);
        const scoreEn = SiteEngine.calculateMatchScore(item.nameEnLower, searchQuery);
        directScore = Math.max(scoreRu, scoreEn);
        targetTrigramsStr = item.trigramsString;
      }

      if (directScore > 0) {
        const baseNameLen = (item.nameRuLower || item.titleLower || "").length;
        filtered.push({ ...item, score: directScore - baseNameLen * 0.001 });
        continue;
      }

      if (queryTris.length > 0 && targetTrigramsStr) {
        let matches = 0;
        for (let j = 0; j < queryTris.length; j++) {
          if (targetTrigramsStr.includes(queryTris[j])) matches++;
        }
        const score = matches / queryTris.length;
        if (score > 0.35) {
          filtered.push({ ...item, score: score * 0.5 });
        }
      }
    }

    filtered.sort((a, b) => b.score - a.score);
    cardsContainer.innerHTML = "";

    if (filtered.length === 0) {
      if (targetNoteEl) targetNoteEl.style.display = "";
      hideMoreBtn();
      return;
    }

    if (targetNoteEl) targetNoteEl.style.display = "none";

    const BATCH_SIZE = 8;
    let currentIndex = 0;

    const renderNextBatch = () => {
      const batch = filtered.slice(currentIndex, currentIndex + BATCH_SIZE);
      currentIndex += BATCH_SIZE;

      const fragment = document.createDocumentFragment();
      const cardsToAnimate = [];

      batch.forEach((item) => {
        const cardFragment = createCardFn(item, cardTypeClass);
        if (!cardFragment) return;
        const card = cardFragment.querySelector(".card, .project, .order") || cardFragment.firstElementChild;
        if (card) cardsToAnimate.push(card);
        fragment.appendChild(cardFragment);
      });

      cardsContainer.appendChild(fragment);
      cardsToAnimate.forEach((card) => SiteEngine.animateCardAppearance(card));

      if (currentIndex < filtered.length) {
        if (!moreBtn) {
          moreBtn = document.createElement("button");
          moreBtn.className = "more";
          moreBtn.textContent = "Показать ещё";
          resultsEl.appendChild(moreBtn);
        }
        moreBtn.style.display = "";
        moreBtn.onclick = (e) => {
          e.preventDefault();
          renderNextBatch();
        };
      } else {
        hideMoreBtn();
      }
    };

    renderNextBatch();
  }

  // --- ИНИЦИАЛИЗАЦИЯ ДВИЖКА И DOM ---

  scrollToCurrent(container) {
    if (!container) return;
    const currentItem = container.querySelector(".current");
    if (currentItem) {
      currentItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  constructor(config) {
    SiteEngine.activeInstance = this;
    this.config = config || {};
    this.indexedData = [];

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.init());
    } else {
      this.init();
    }
  }

  init() {
    this.windowEl = document.querySelector(this.config.containerId || ".window") || document.body;
    if (!this.windowEl) {
      console.error(`Контейнер ${this.config.containerId} не найден в DOM.`);
      return;
    }

    this.favKey = this.config.favKey || "gdn_favorites";

    try {
      const rawFavs = localStorage.getItem(this.favKey);
      const parsed = rawFavs ? JSON.parse(rawFavs) : [];
      this.favorites = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      this.favorites = [];
    }

    if (this.config.database) {
      this.prepareSearchIndex();
    }

    this.cleanupFavorites();
    this.bindEvents();
    this.initTabs();
    this.initSearch();

    this.activeTabKey = `${this.config.favKey || this.config.containerId}_session_tab`;
    let savedTab = null;
    try {
      savedTab = sessionStorage.getItem(this.activeTabKey);
    } catch (e) {
      savedTab = null;
    }

    const initialType = savedTab || this.config.defaultType;

    if (initialType) {
      this.setActiveTabButton(initialType);
      this.render(initialType);
    } else {
      this.renderAll();
    }
  }

  findItemById(id) {
    if (!id) return null;
    const strId = String(id).trim();

    if (typeof this.config.findItemFn === "function") {
      const found = this.config.findItemFn(strId);
      if (found) return found;
    }

    const source = this.indexedData && this.indexedData.length > 0 ? this.indexedData : this.config.database || [];
    return source.find((item) => String(item.id || item.ID) === strId) || null;
  }

  renderFavoritesContent(cardsContainer) {
    if (!cardsContainer) return;
    cardsContainer.innerHTML = "";

    if (!this.favorites || this.favorites.length === 0) {
      return;
    }

    const fragment = document.createDocumentFragment();

    this.favorites.forEach((id) => {
      const item = this.findItemById(id);
      if (item && typeof this.config.createCardFn === "function") {
        const cardNode = this.config.createCardFn(item, this.config.cardTypeClass);
        if (cardNode) {
          fragment.appendChild(cardNode);
        }
      }
    });

    if (fragment.children.length === 0) {
      return;
    } else {
      cardsContainer.appendChild(fragment);
    }
  }

  openFavoritesPopup() {
    const trackedTpl = document.getElementById("tracked-template");
    if (!trackedTpl) return;

    const existingFavPopup = document.getElementById("favorite-popup");
    if (existingFavPopup) {
      this.closePopup(existingFavPopup);
    }

    const trackedClone = trackedTpl.content.cloneNode(true);
    const cardsContainer = trackedClone.querySelector(".cards");

    if (cardsContainer) {
      cardsContainer.classList.add("favorites-list");
      this.renderFavoritesContent(cardsContainer);
    }

    const popupEl = this.openPopup(trackedClone);
    if (popupEl) {
      popupEl.id = "favorite-popup";
    }
  }

  toggleFavorite(id) {
    if (!id || String(id).trim() === "") return;

    const strId = String(id);
    const index = this.favorites.indexOf(strId);
    let isNowFav = false;

    if (index === -1) {
      const MAX_FAVORITES = 50;
      if (this.favorites.length >= MAX_FAVORITES) {
        const removedId = this.favorites.shift();

        if (removedId) {
          const safeRemoved = CSS.escape(removedId);
          const removedButtons = document.querySelectorAll(`.card[id="${safeRemoved}"] .favorite, [data-id="${safeRemoved}"] .favorite`);
          removedButtons.forEach((btn) => btn.classList.remove("tracked"));
        }
      }

      this.favorites.push(strId);
      isNowFav = true;
    } else {
      this.favorites.splice(index, 1);
      isNowFav = false;
    }

    try {
      localStorage.setItem(this.favKey, JSON.stringify(this.favorites));
    } catch (e) {
      console.error(`Ошибка при сохранении ${this.favKey}:`, e);
    }

    const safeStrId = CSS.escape(strId);
    const allRelatedButtons = document.querySelectorAll(`.card[id="${safeStrId}"] .favorite, [data-id="${safeStrId}"] .favorite`);
    allRelatedButtons.forEach((btn) => {
      btn.classList.toggle("tracked", isNowFav);
    });

    const activeFavoritesCards = document.querySelector("#favorite-popup .cards");
    if (activeFavoritesCards) {
      this.renderFavoritesContent(activeFavoritesCards);
    }
  }

  bindEvents() {
    document.addEventListener("click", (e) => {
      const favBtn = e.target.closest(".favorite");
      if (!favBtn) return;

      e.preventDefault();
      const card = favBtn.closest(".card, .project, [data-id]");
      const id = card ? card.id || card.getAttribute("data-id") : favBtn.getAttribute("data-id");

      if (id) {
        this.toggleFavorite(id);
      }
    });
  }

  initSearch() {
    const searchInput = this.windowEl.querySelector(".searching input#searchInput, #searchInput, .inputSearch");
    if (!searchInput) return;

    let searchDebounceTimer = null;

    const getOrCreatePopup = () => {
      let searchPopup = this.windowEl.querySelector("#search-popup");
      if (searchPopup) {
        return searchPopup;
      }

      const popupTpl = document.getElementById("popup-template");
      const searchTpl = document.getElementById("search-template");
      if (!popupTpl || !searchTpl) return null;

      const popupClone = popupTpl.content.cloneNode(true);
      searchPopup = popupClone.querySelector(".popup");
      searchPopup.id = "search-popup";
      searchPopup.classList.add("search-popup");

      const searchContent = searchTpl.content.cloneNode(true);
      searchPopup.appendChild(searchContent);

      const closeBtn = searchPopup.querySelector(".close");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => this.closePopup(searchPopup));
      }

      searchPopup.addEventListener("click", (e) => {
        if (e.target === searchPopup) {
          this.closePopup(searchPopup);
        }
      });

      this.windowEl.appendChild(searchPopup);
      return searchPopup;
    };

    const openSearchPopup = () => {
      document.querySelectorAll(".popup.open:not(#search-popup)").forEach((popup) => {
        this.closePopup(popup);
      });

      const popup = getOrCreatePopup();
      if (popup && !popup.classList.contains("open")) {
        requestAnimationFrame(() => popup.classList.add("open"));
      }
    };

    const performSearch = () => {
      const searchPopup = this.windowEl.querySelector("#search-popup");
      if (!searchPopup) return;

      const query = searchInput.value.trim();
      const noteEl = searchPopup.querySelector(".note");
      const cardsContainer = searchPopup.querySelector(".content > .cards");

      if (cardsContainer && typeof SiteEngine.activeSearchHandler === "function") {
        SiteEngine.activeSearchHandler(query, cardsContainer, noteEl);
      }
    };

    ["focus", "click"].forEach((evt) => {
      searchInput.addEventListener(evt, () => {
        openSearchPopup();
        performSearch();
      });
    });

    searchInput.addEventListener("input", () => {
      openSearchPopup();

      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        performSearch();
      }, 300);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const searchPopup = this.windowEl.querySelector("#search-popup.open");
        if (searchPopup) {
          this.closePopup(searchPopup);
        }
      }
    });
  }

  renderAll() {
    if (!this.config.database) return;
    this.renderByItems(this.config.database);
  }

  render(type) {
    if (!this.config.database) return;

    const filtered = this.config.database.filter((item) => {
      const itemType = item.Type;
      return itemType === type;
    });

    this.renderByItems(filtered);
  }

  renderByItems(items) {
    const contentEl = this.windowEl.querySelector(".content");
    if (!contentEl) return;

    contentEl.scrollTop = 0;
    contentEl.innerHTML = "";

    if (!items || items.length === 0) {
      contentEl.innerHTML = `<div class="empty-state">Список пуст</div>`;
      const navContainer = this.windowEl.querySelector(".management.navigate");
      if (navContainer) navContainer.innerHTML = "";
      return;
    }

    const sortedData = typeof this.config.sortFn === "function" ? [...items].sort(this.config.sortFn) : items;

    let currentGroup = "";
    let currentSection = null;
    const fragment = document.createDocumentFragment();

    sortedData.forEach((item) => {
      const key = typeof this.config.getGroupKeyFn === "function" ? this.config.getGroupKeyFn(item) : "#";

      if (key !== currentGroup) {
        currentGroup = key;

        currentSection = document.createElement("section");
        currentSection.className = "cards";
        currentSection.dataset.groupKey = key;

        const titleSpan = document.createElement("span");
        titleSpan.className = "title";
        titleSpan.textContent = key;
        currentSection.appendChild(titleSpan);

        fragment.appendChild(currentSection);
      }

      const cardNode = this.config.createCardFn(item, this.config.cardTypeClass);
      if (cardNode && currentSection) {
        currentSection.appendChild(cardNode);
      }
    });

    contentEl.appendChild(fragment);

    if (typeof this.config.initAlphabetNavFn === "function") {
      this.config.initAlphabetNavFn.call(this, sortedData);
    } else {
      this.initAlphabetNavigation(sortedData);
    }
  }

  prepareSearchIndex() {
    if (typeof this.config.getFlatDatabase === "function") {
      this.indexedData = this.config.getFlatDatabase(this.config.database);
    } else {
      this.indexedData = this.config.database;
    }
  }

  attachAlphabetObserver(navContainer, groupElementsMap) {
    if (this._alphabetObserver) {
      this._alphabetObserver.disconnect();
    }

    const visibleGroups = new Set();

    this._alphabetObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const groupKey = entry.target.dataset.groupKey;
          if (entry.isIntersecting) {
            visibleGroups.add(groupKey);
          } else {
            visibleGroups.delete(groupKey);
          }
        });

        groupElementsMap.forEach((btn, key) => {
          btn.classList.toggle("current", visibleGroups.has(key));
        });

        this.scrollToCurrent(navContainer);
      },
      {
        root: this.windowEl,
        rootMargin: "0px 0px -40% 0px",
        threshold: 0,
      },
    );

    setTimeout(() => {
      const sections = (this.windowEl || document).querySelectorAll(".content section.cards");
      sections.forEach((sec) => this._alphabetObserver.observe(sec));
    }, 50);
  }

  initAlphabetNavigation(items) {
    const navContainer = this.windowEl.querySelector(".management.navigate");
    if (!navContainer) return;

    navContainer.innerHTML = "";

    const availableGroups = new Set();
    items.forEach((item) => {
      const key = typeof this.config.getGroupKeyFn === "function" ? this.config.getGroupKeyFn(item) : "#";
      availableGroups.add(key);
    });

    const sortedGroups = Array.from(availableGroups).sort((a, b) => {
      if (a === "#") return -1;
      if (b === "#") return 1;
      return a.localeCompare(b, "ru");
    });

    if (sortedGroups.length === 0) return;

    const fragment = document.createDocumentFragment();
    const groupElementsMap = new Map();

    let hasFirstRu = false;
    let hasFirstEn = false;

    sortedGroups.forEach((groupKey) => {
      const btn = document.createElement("button");
      btn.textContent = groupKey;
      btn.dataset.group = groupKey;

      if (groupKey && groupKey.length === 1) {
        if (/^[А-ЯЁ]$/i.test(groupKey)) {
          if (!hasFirstRu) {
            btn.classList.add("ru");
            hasFirstRu = true;
          }
        } else if (/^[A-Z]$/i.test(groupKey)) {
          if (!hasFirstEn) {
            btn.classList.add("en");
            hasFirstEn = true;
          }
        }
      }

      btn.addEventListener("click", () => {
        const sections = this.windowEl.querySelectorAll(".content section.cards");
        for (const sec of sections) {
          if (sec.dataset.groupKey === groupKey) {
            sec.scrollIntoView({ behavior: "smooth", block: "start" });
            break;
          }
        }
      });

      fragment.appendChild(btn);
      groupElementsMap.set(groupKey, btn);
    });

    navContainer.appendChild(fragment);

    this.attachAlphabetObserver(navContainer, groupElementsMap);
  }

  initTabs() {
    const tabsContainer = this.windowEl.querySelector(".management.tabs");
    if (!tabsContainer) return;

    tabsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest("button.switch");
      if (!btn) return;

      const type = btn.dataset.type;
      if (!type) return;

      const allSwitches = tabsContainer.querySelectorAll(".section button.switch");
      allSwitches.forEach((b) => b.classList.remove("current"));
      btn.classList.add("current");

      this.switchTab(type);
    });
  }

  switchTab(type) {
    this.currentType = type;
    try {
      sessionStorage.setItem(this.activeTabKey, type);
    } catch (e) {}
    this.render(type);
  }

  setActiveTabButton(type) {
    const tabsContainer = this.windowEl.querySelector(".management.tabs");
    if (!tabsContainer) return;

    const allSwitches = tabsContainer.querySelectorAll(".section button.switch");
    allSwitches.forEach((btn) => {
      if (btn.dataset.type === type) {
        btn.classList.add("current");
      } else {
        btn.classList.remove("current");
      }
    });
    this.scrollToCurrent(tabsContainer);
  }

  openPopup(content) {
    const transientPopups = (this.windowEl || document).querySelectorAll("#search-popup.open, #player-popup.open");
    transientPopups.forEach((popup) => this.closePopup(popup));

    const template = document.getElementById("popup-template");
    if (!template) return null;

    const clone = template.content.cloneNode(true);
    const popupEl = clone.querySelector(".popup");
    const closeBtn = popupEl.querySelector(".close");

    if (content instanceof HTMLElement && content.id) {
      popupEl.id = content.id.startsWith("popup-") ? content.id : `popup-${content.id}`;
    }

    if (content instanceof Node) {
      if (closeBtn) {
        popupEl.insertBefore(content, closeBtn);
      } else {
        popupEl.appendChild(content);
      }
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closePopup(popupEl));
    }

    popupEl.addEventListener("click", (e) => {
      if (e.target === popupEl) {
        this.closePopup(popupEl);
      }
    });

    const escListener = (e) => {
      if (e.key === "Escape") {
        const allPopups = document.querySelectorAll("section.popup.open");
        const activePopup = allPopups[allPopups.length - 1];
        if (activePopup) {
          this.closePopup(activePopup);
        }
      }
    };

    popupEl._escListener = escListener;
    document.addEventListener("keydown", escListener);

    const container = this.windowEl || document.querySelector(".window") || document.body;
    container.appendChild(popupEl);

    requestAnimationFrame(() => {
      popupEl.classList.add("open");
      popupEl.querySelectorAll(".content").forEach((contentEl) => {
        contentEl.scrollTop = 0;
      });
    });

    return popupEl;
  }

  closePopup(popupEl) {
    if (!popupEl) return;

    // Глобальная очистка инпута при закрытии модального окна поиска
    if (popupEl.id === "search-popup" || popupEl.classList.contains("search-popup")) {
      const searchInput = (this.windowEl || document).querySelector(".searching input#searchInput, #searchInput, .inputSearch");
      if (searchInput && searchInput.value !== "") {
        searchInput.value = "";
        searchInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }

    if (popupEl._escListener) {
      document.removeEventListener("keydown", popupEl._escListener);
      delete popupEl._escListener;
    }

    const iframe = popupEl.querySelector("iframe");
    if (iframe) {
      iframe.src = "";
    }

    popupEl.classList.remove("open");

    setTimeout(() => {
      if (popupEl.parentNode) {
        popupEl.remove();
      }
    }, 300);
  }

  closeSearchPopup(popup) {
    this.closePopup(popup);
  }

  cleanupFavorites() {
    if (!Array.isArray(this.favorites) || this.favorites.length === 0) return;

    const cleanedFavorites = this.favorites.filter((id) => this.findItemById(id) !== null);

    if (cleanedFavorites.length !== this.favorites.length) {
      this.favorites = cleanedFavorites;
      try {
        localStorage.setItem(this.favKey, JSON.stringify(this.favorites));
      } catch (e) {
        console.error(`Ошибка при очистке избранного для ${this.favKey}:`, e);
      }
    }
  }
}

// Глобальная обработка кликов по кнопкам сброса/крестикам в строке поиска
document.addEventListener(
  "click",
  (e) => {
    const closeBtn = e.target.closest(".close");
    if (!closeBtn) return;

    const isInsideSearchPopup = Boolean(closeBtn.closest("#search-popup"));
    const isInsideSearchField = Boolean(closeBtn.closest(".searching, .element.searching"));

    if (isInsideSearchPopup || isInsideSearchField) {
      const input = document.querySelector(".inputSearch, #searchInput");
      if (!input) return;

      input.value = "";
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }
  },
  true,
);

function setupSearchInput() {
  const searchInput = document.querySelector(".inputSearch, #searchInput");
  if (searchInput) {
    searchInput.setAttribute("autocomplete", "off");
    searchInput.setAttribute("autocorrect", "off");
    searchInput.setAttribute("autocapitalize", "off");
    searchInput.setAttribute("spellcheck", "false");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupSearchInput);
} else {
  setupSearchInput();
}

window.openFavoritesPopup = function () {
  const engine = SiteEngine.activeInstance || window.ordersEngine || window.projectsEngine;
  if (engine) {
    engine.openFavoritesPopup();
  } else {
    console.error("Ни один экземпляр SiteEngine не инициализирован.");
  }
};
window.openFavorites = window.openFavoritesPopup;
