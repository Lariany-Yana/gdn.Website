// =========================================================================
// Глобальные утилиты для управления попапами
// =========================================================================
function closeAllPopups() {
  document.querySelectorAll(".popup-overlay").forEach((el) => {
    const iframe = el.querySelector("iframe");
    if (iframe) iframe.src = "";

    el.remove();
  });
}

function initPopup(typeId) {
  closeAllPopups();
  const baseTemp = document.getElementById("popup-base-template");
  const contentTemp = document.getElementById(`content-${typeId}`);
  if (!baseTemp || !contentTemp) return null;

  const clone = baseTemp.content.cloneNode(true);
  const popup = clone.querySelector(".popup");
  popup.id = "popup-" + typeId;
  popup.appendChild(contentTemp.content.cloneNode(true));

  document.body.appendChild(clone);
  return popup;
}

// =========================================================================
// Вспомогательные функции поискового движка
// =========================================================================
function calculateMatchScore(text, q) {
  if (!text) return 0;
  const idx = text.indexOf(q);
  if (idx === -1) return 0;

  if (idx === 0) return 3.0;

  const charBefore = text.charAt(idx - 1);
  if ([" ", "-", "/", "(", "[", '"', "'"].includes(charBefore)) {
    return 2.0;
  }

  return 1.0;
}

function renderSearchResults(filteredArray, createCardFn, placeholderText = "Введите текст") {
  let popup = document.getElementById("popup-search") || initPopup("search");
  const container = popup.querySelector(".results-container");

  if (filteredArray === null) {
    container.innerHTML = `<p class="search-hint">${placeholderText}</p>`;
    return;
  }

  filteredArray.sort((a, b) => b.score - a.score);

  container.innerHTML = filteredArray.length ? "" : "<p>Ничего не найдено</p>";

  if (filteredArray.length) {
    const wrap = document.createElement("div");
    wrap.className = "card-container";

    const LIMIT = 15;
    const itemsToRender = filteredArray.slice(0, LIMIT);

    itemsToRender.forEach((item) => {
      const cardNode = createCardFn(item);

      const card = cardNode.classList?.contains("title-card") || cardNode.classList?.contains("order-card") ? cardNode : cardNode.querySelector(".title-card, .order-card") || cardNode.firstElementChild;

      wrap.appendChild(cardNode);
      animateCardAppearance(card);
    });
    container.appendChild(wrap);

    if (filteredArray.length > LIMIT) {
      const leftOver = filteredArray.length - LIMIT;
      const remainingItems = filteredArray.slice(LIMIT);
      renderSearchMoreButton(container, wrap, remainingItems, createCardFn, leftOver);
    }
  }
}

// =========================================================================
// Основной архитектурный класс движка (SiteEngine)
// =========================================================================
class SiteEngine {
  constructor(config) {
    this.config = config;
    this.indexedData = [];
    this.alphabetObserver = null;

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.init());
    } else {
      this.init();
    }
  }

  init() {
    const selector = this.config.containerId;
    this.main = document.querySelector(selector);
    this.searchInput = document.getElementById("searchInput");
    this.favKey = this.config.favKey;

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

    this.activeTabKey = `${this.config.containerId}_session_tab`;
    let savedTab = null;
    try {
      const rawTab = sessionStorage.getItem(this.activeTabKey);
      savedTab = rawTab ? JSON.parse(rawTab) : null;
    } catch (e) {
      savedTab = null;
    }

    if (savedTab && typeof savedTab === "object" && savedTab.id) {
      this.render(savedTab.id, savedTab.isStatic);
      const targetBtn = document.querySelector(savedTab.isStatic ? `.change-section[data-id="${savedTab.id}"]` : `.change-section[data-type="${savedTab.id}"]`);
      if (targetBtn) {
        document.querySelectorAll(".change-section").forEach((b) => b.classList.remove("active"));
        targetBtn.classList.add("active");
      }
    } else if (this.config.defaultType) {
      this.render(this.config.defaultType, !!this.config.isStaticDefault);
    }
  }

  cleanupFavorites() {
    if (!this.config.database || this.favorites.length === 0) return;

    const itemsSource = this.indexedData && this.indexedData.length > 0 ? this.indexedData : this.config.database;
    const validIds = new Set(itemsSource.map((item) => String(item.id)));
    const filteredFavs = this.favorites.filter((favId) => validIds.has(favId));

    if (filteredFavs.length !== this.favorites.length) {
      this.favorites = filteredFavs;
      localStorage.setItem(this.favKey, JSON.stringify(this.favorites));
    }
  }

  render(type, isStatic = false) {
    if (!this.main) return;
    const retainedElements = Array.from(this.main.querySelectorAll(".retain"));
    this.main.innerHTML = "";
    retainedElements.forEach((el) => this.main.appendChild(el));

    this.main.scrollTop = 0;

    if (isStatic) {
      const template = document.getElementById(type);
      if (template) {
        this.main.appendChild(template.content.cloneNode(true));
      }
      setTimeout(() => this.updateAlphabetNavigation(), 50);
      return;
    }

    if (!this.config.database) return;

    const filtered = this.config.database.filter((item) => item.cardType === type);
    if (filtered.length === 0) {
      this.main.innerHTML = `<div class="empty-state">Список пуст</div>`;
      setTimeout(() => this.updateAlphabetNavigation(), 50);
      return;
    }

    filtered.sort((a, b) => this.config.sortFn(a, b));
    let currentGroup = "";
    let currentContainer = null;
    const fragment = document.createDocumentFragment();

    filtered.forEach((item) => {
      const key = this.config.getGroupKeyFn(item);
      if (key !== currentGroup) {
        currentGroup = key;
        const section = document.createElement("section");
        section.className = "card-section";

        const h2 = document.createElement("h2");
        h2.className = "card-section-name";
        h2.textContent = key;

        section.appendChild(h2);
        currentContainer = document.createElement("div");
        currentContainer.className = "card-container";
        section.appendChild(currentContainer);
        fragment.appendChild(section);
      }
      currentContainer.appendChild(this.config.createCardFn(item));
    });

    this.main.appendChild(fragment);
    setTimeout(() => this.updateAlphabetNavigation(), 50);
  }

  renderFavorites(container) {
    container.innerHTML = "";

    const itemsSource = this.indexedData && this.indexedData.length > 0 ? this.indexedData : this.config.database;
    const favItems = itemsSource.filter((item) => this.favorites.includes(String(item.id)));

    if (favItems.length === 0) {
      container.innerHTML = `<p>Список избранного пуст</p>`;
      return;
    }

    const wrap = document.createElement("div");
    wrap.className = "card-container";

    favItems.forEach((item) => {
      wrap.appendChild(this.config.createCardFn(item));
    });

    container.appendChild(wrap);
  }

  prepareSearchIndex() {
    if (typeof this.config.getFlatDatabase === "function") {
      this.indexedData = this.config.getFlatDatabase(this.config.database);
    }
  }

  toggleFavorite(id) {
    if (!this.favorites) return;
    if (!id || String(id).trim() === "" || id === "undefined") return;

    const strId = String(id);
    const index = this.favorites.indexOf(strId);
    let isNowFav = false;

    const textAdded = this.config.favTextAdded || "В избранном";
    const textDefault = this.config.favTextDefault || "В избранное";

    if (index === -1) {
      if (this.favorites.length >= 50) {
        const removedId = this.favorites.shift();
        const removedButtons = document.querySelectorAll(
          `.title-card[id="${removedId}"] .add-favorite, 
           .order-card[id="${removedId}"] .add-favorite,
           [data-id="${removedId}"] .add-favorite`,
        );
        removedButtons.forEach((btn) => {
          btn.textContent = textDefault;
          btn.classList.remove("tracked");
        });
      }

      this.favorites.push(strId);
      isNowFav = true;
    } else {
      this.favorites.splice(index, 1);
      isNowFav = false;
    }

    localStorage.setItem(this.config.favKey, JSON.stringify(this.favorites));

    const allRelatedButtons = document.querySelectorAll(
      `.title-card[id="${strId}"] .add-favorite, 
       .order-card[id="${strId}"] .add-favorite,
       [data-id="${strId}"] .add-favorite`,
    );

    allRelatedButtons.forEach((btn) => {
      if (isNowFav) {
        btn.textContent = textAdded;
        btn.classList.add("tracked");
      } else {
        btn.textContent = textDefault;
        btn.classList.remove("tracked");
      }
    });

    const activeFavPopup = document.querySelector("#popup-Favorites");
    if (activeFavPopup) {
      const container = activeFavPopup.querySelector(".results-container");
      if (container) {
        if (!isNowFav) {
          const cardInPopup = activeFavPopup.querySelector(`.title-card[id="${strId}"], .order-card[id="${strId}"], [data-id="${strId}"]`);

          if (cardInPopup) {
            cardInPopup.style.transition = "opacity 0.15s ease-in-out, transform 0.15s ease-in-out";
            cardInPopup.style.opacity = "0";
            cardInPopup.style.transform = "scale(0.9)";

            setTimeout(() => {
              this.renderFavorites(container);
            }, 150);
          } else {
            this.renderFavorites(container);
          }
        } else {
          this.renderFavorites(container);
        }
      }
    }
  }

  openStaticPopup(templateId) {
    closeAllPopups();

    const contentTemp = document.getElementById(templateId);
    if (!contentTemp) return;

    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup-" + templateId;

    popup.appendChild(contentTemp.content.cloneNode(true));
    overlay.appendChild(popup);

    if (templateId === "Favorites") {
      const container = popup.querySelector(".results-container");
      if (container) {
        this.renderFavorites(container);
      }
    }

    document.body.appendChild(overlay);
  }

  bindEvents() {
    if (this.searchInput) {
      const searchHeader = document.querySelector(".search-header");

      this.searchInput.addEventListener("focus", () => {
        searchHeader?.classList.add("ready");

        const query = this.searchInput.value.trim();
        if (typeof this.config.openSearchFn === "function") {
          this.config.openSearchFn(query, this.indexedData);
        }
      });

      this.searchInput.addEventListener("blur", () => {
        if (this.searchInput.value.trim() === "") searchHeader?.classList.remove("ready");
      });

      let searchTimeout;
      this.searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim();

        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          if (typeof this.config.openSearchFn === "function") {
            this.config.openSearchFn(query, this.indexedData);
          }
        }, 300);
      });
    }

    const tabsContainer = document.querySelector(".tabs");
    if (tabsContainer) {
      tabsContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".change-section");
        if (!btn) return;

        tabsContainer.querySelectorAll(".change-section").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const staticId = btn.getAttribute("data-id");
        const cardType = btn.getAttribute("data-type");

        if (staticId) {
          this.render(staticId, true);
          sessionStorage.setItem(this.activeTabKey, JSON.stringify({ id: staticId, isStatic: true }));
        } else if (cardType) {
          this.render(cardType, false);
          sessionStorage.setItem(this.activeTabKey, JSON.stringify({ id: cardType, isStatic: false }));
        }
      });
    }

    document.addEventListener("click", (e) => {
      const isInsideValidContainer = e.target.closest(this.config.containerId) || e.target.closest(".popup");
      if (!isInsideValidContainer) return;

      const favBtn = e.target.closest(".add-favorite");
      if (!favBtn) return;

      const card = e.target.closest(".title-card") || e.target.closest(".order-card");
      if (!card) return;

      const id = card.id || card.getAttribute("data-id");
      this.toggleFavorite(id);
    });

    document.addEventListener("click", (e) => {
      const nameRuBtn = e.target.closest(".order-card .name-ru");
      if (nameRuBtn && nameRuBtn.dataset.isCopying !== "true") {
        const textToCopy = nameRuBtn.textContent.trim();
        if (!textToCopy) return;

        nameRuBtn.dataset.isCopying = "true";
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            const originalText = textToCopy;
            nameRuBtn.textContent = "Скопировано в буфер обмена";
            nameRuBtn.classList.add("copied");

            setTimeout(() => {
              nameRuBtn.textContent = originalText;
              nameRuBtn.classList.remove("copied");
              nameRuBtn.dataset.isCopying = "false";
            }, 1500);
          })
          .catch((err) => {
            nameRuBtn.dataset.isCopying = "false";
          });
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const playerOverlay = document.querySelector(".popup-overlay.player-overlay");
        if (playerOverlay) {
          const iframe = playerOverlay.querySelector("iframe");
          if (iframe) iframe.src = "";
          playerOverlay.remove();
        } else {
          closeAllPopups();
        }
      }
    });
  }

  // =======================================================================
  // Интегрированный метод: Алфавитная навигация
  // =======================================================================
  updateAlphabetNavigation() {
    const alphabetContainer = document.querySelector(".alphabet");
    if (!alphabetContainer) return;

    alphabetContainer.innerHTML = "";
    if (this.alphabetObserver) {
      this.alphabetObserver.disconnect();
    }

    const scrollContainer = document.querySelector(".window");
    const mainContainer = this.main;

    if (!scrollContainer || !mainContainer) return;

    const sections = mainContainer.querySelectorAll(".card-section");
    if (sections.length === 0) return;

    const fragment = document.createDocumentFragment();
    const sectionMap = new Map();

    sections.forEach((section) => {
      const header = section.querySelector(".card-section-name");
      if (!header) return;

      const letter = header.textContent.trim().toUpperCase();
      if (!letter) return;

      if (!section.id) {
        section.id = `anchor-${letter}-${Math.random().toString(36).substr(2, 5)}`;
      }

      const btn = document.createElement("button");
      btn.className = "letter";
      btn.textContent = letter;
      btn.dataset.anchor = section.id;

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      fragment.appendChild(btn);
      sectionMap.set(section.id, btn);
    });

    alphabetContainer.appendChild(fragment);

    const activeSectionsInViewport = new Set();
    const visibleHeadersInViewport = new Set();

    const renderActiveStates = () => {
      let baseActiveId = null;

      if (activeSectionsInViewport.size > 0) {
        baseActiveId = Array.from(activeSectionsInViewport)[0];
      }

      alphabetContainer.querySelectorAll(".letter").forEach((b) => b.classList.remove("active"));

      if (baseActiveId) {
        const baseBtn = sectionMap.get(baseActiveId);
        if (baseBtn) baseBtn.classList.add("active");
      }

      visibleHeadersInViewport.forEach((headerId) => {
        const extraBtn = sectionMap.get(headerId);
        if (extraBtn) {
          extraBtn.classList.add("active");
        }
      });

      const activeButtons = alphabetContainer.querySelectorAll(".letter.active");

      if (activeButtons.length > 0) {
        const lastActiveBtn = activeButtons[activeButtons.length - 1];
        lastActiveBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    };

    const observerOptions = {
      root: scrollContainer,
      rootMargin: "0px 0px -40% 0px",
      threshold: 0,
    };

    this.alphabetObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;

        if (target.classList.contains("card-section")) {
          if (entry.isIntersecting) {
            activeSectionsInViewport.add(target.id);
          } else {
            activeSectionsInViewport.delete(target.id);
          }
        } else if (target.classList.contains("card-section-name")) {
          const parentSectionId = target.closest(".card-section").id;
          if (entry.isIntersecting) {
            visibleHeadersInViewport.add(parentSectionId);
          } else {
            visibleHeadersInViewport.delete(parentSectionId);
          }
        }
      });

      renderActiveStates();
    }, observerOptions);

    sections.forEach((section) => {
      this.alphabetObserver.observe(section);

      const header = section.querySelector(".card-section-name");
      if (header) {
        this.alphabetObserver.observe(header);
      }
    });
  }
}

// =========================================================================
// Глобальные утилиты общего назначения
// =========================================================================
function hideIfEmpty(element, text) {
  if (!element) return;

  if (text && text.trim() !== "") {
    element.textContent = text;
  } else {
    element.classList.add("hidden");
  }
}

function parseCustomDate(dateStr) {
  if (!dateStr) return new Date(0);
  const parts = dateStr.split(".");
  if (parts.length !== 3) return new Date(0);
  const [d, m, y] = parts.map(Number);
  const fullYear = y < 100 ? 2000 + y : y;
  return new Date(fullYear, m - 1, d);
}

function renderSearchMoreButton(container, wrap, remainingItems, createCardFn, leftOverCount) {
  const moreLink = document.createElement("a");
  moreLink.href = "#";
  moreLink.className = "search-more-button";

  const h1 = document.createElement("h1");
  h1.textContent = `Совпадений: + ${leftOverCount}`;
  moreLink.appendChild(h1);

  moreLink.onclick = (e) => {
    e.preventDefault();
    const fragment = document.createDocumentFragment();

    const cardsToAnimate = [];

    remainingItems.forEach((item) => {
      const node = createCardFn(item);
      if (!node) return;

      if (node instanceof DocumentFragment) {
        const card = node.querySelector(".title-card, .order-card") || node.firstElementChild;
        if (card) cardsToAnimate.push(card);
        fragment.appendChild(node);
      } else {
        cardsToAnimate.push(node);
        fragment.appendChild(node);
      }
    });

    wrap.appendChild(fragment);
    cardsToAnimate.forEach((card) => animateCardAppearance(card));
    moreLink.remove();
  };

  container.appendChild(moreLink);
}

function animateCardAppearance(card) {
  if (!card) return;
  card.classList.add("appear");

  setTimeout(() => {
    card.classList.add("visible");
  }, 10);

  setTimeout(() => {
    card.classList.remove("appear", "visible");
  }, 300);
}

// =========================================================================
// Управление шириной карточек через CSS-переменную --CARD-title-width
// =========================================================================
(function () {
  const STORAGE_KEY = "custom-card-width";
  const VARIABLE_NAME = "--CARD-title-width";
  const DEFAULT_VALUE = "400";
  const htmlElement = document.documentElement;

  const savedWidth = localStorage.getItem(STORAGE_KEY);
  if (savedWidth) {
    htmlElement.style.setProperty(VARIABLE_NAME, `${savedWidth}px`);
  }

  function syncSliderState(slider, value) {
    slider.value = value;
    const valueLabel = slider.closest(".slider")?.querySelector("#title-card-size-value");
    if (valueLabel) {
      valueLabel.textContent = `${value}px`;
    }
  }

  document.addEventListener("input", (e) => {
    if (e.target && e.target.id === "title-card-size-slider") {
      const newWidth = e.target.value;

      htmlElement.style.setProperty(VARIABLE_NAME, `${newWidth}px`);
      localStorage.setItem(STORAGE_KEY, newWidth);

      const valueLabel = e.target.closest(".slider")?.querySelector("#title-card-size-value");
      if (valueLabel) {
        valueLabel.textContent = `${newWidth}px`;
      }
    }
  });

  document.addEventListener("click", (e) => {
    const resetBtn = e.target.closest("#title-card-size-reset");
    if (resetBtn) {
      localStorage.removeItem(STORAGE_KEY);

      htmlElement.style.removeProperty(VARIABLE_NAME);

      const slider = resetBtn.closest(".slider")?.querySelector("#title-card-size-slider");
      if (slider) {
        syncSliderState(slider, DEFAULT_VALUE);
      }
    }

    if (e.target.closest('[onclick*="About-Prefs"]') || e.target.closest(".open-settings-btn")) {
      setTimeout(() => {
        const slider = document.getElementById("title-card-size-slider");
        if (slider) {
          const currentWidth = localStorage.getItem(STORAGE_KEY) || DEFAULT_VALUE;
          syncSliderState(slider, currentWidth);
        }
      }, 10);
    }
    const isExitBtn = e.target.closest(".popup-exit");
    const isOverlay = e.target.matches(".popup-overlay");

    if (isExitBtn || isOverlay) {
      closeAllPopups();
    }
  });
})();
