// =========================================================================
// Модуль страницы Проектов / Просмотров (projectpage.js)
// =========================================================================

//prettier-ignore
const projectsDatabase = [
	...(typeof seriesAnime !== "undefined" ? seriesAnime : []),
	...(typeof seriesSerials !== "undefined" ? seriesSerials : []),
	...(typeof seriesCartoons !== "undefined" ? seriesCartoons : []),
	...(typeof fullmeterAnime !== "undefined" ? fullmeterAnime : []),
	...(typeof fullmeterMovie !== "undefined" ? fullmeterMovie : []),
	...(typeof fullmeterCartoon !== "undefined" ? fullmeterCartoon : []),
	...(typeof amusementGames !== "undefined" ? amusementGames : []),
	...(typeof amusementYouTube !== "undefined" ? amusementYouTube : []),
	...(typeof amusementEvents !== "undefined" ? amusementEvents : []),
	...(typeof amusementTVShows !== "undefined" ? amusementTVShows : []),
	...(typeof literatureManga !== "undefined" ? literatureManga : []),
	...(typeof literatureManhwa !== "undefined" ? literatureManhwa : []),
	...(typeof literatureComics !== "undefined" ? literatureComics : []),
	...(typeof literatureRanobe !== "undefined" ? literatureRanobe : []),
	...(typeof literatureBooks !== "undefined" ? literatureBooks : [])
];

const popupsDatabase = {
  ...(typeof seriesAnimePopups !== "undefined" ? seriesAnimePopups : {}),
  ...(typeof seriesSerialsPopups !== "undefined" ? seriesSerialsPopups : {}),
  ...(typeof seriesCartoonsPopups !== "undefined" ? seriesCartoonsPopups : {}),
  ...(typeof fullmeterAnimePopups !== "undefined" ? fullmeterAnimePopups : {}),
  ...(typeof fullmeterMoviePopups !== "undefined" ? fullmeterMoviePopups : {}),
  ...(typeof fullmeterCartoonPopups !== "undefined" ? fullmeterCartoonPopups : {}),
  ...(typeof amusementGamesPopups !== "undefined" ? amusementGamesPopups : {}),
  ...(typeof amusementYouTubePopups !== "undefined" ? amusementYouTubePopups : {}),
  ...(typeof amusementPokerPopups !== "undefined" ? amusementPokerPopups : {}),
  ...(typeof amusementTVShowsPopups !== "undefined" ? amusementTVShowsPopups : {}),
  ...(typeof literatureMangaPopups !== "undefined" ? literatureMangaPopups : {}),
  ...(typeof literatureManhwaPopups !== "undefined" ? literatureManhwaPopups : {}),
  ...(typeof literatureComicsPopups !== "undefined" ? literatureComicsPopups : {}),
  ...(typeof literatureRanobePopups !== "undefined" ? literatureRanobePopups : {}),
  ...(typeof literatureBooksPopups !== "undefined" ? literatureBooksPopups : {}),
};

function findProjectById(id) {
  if (!id) return null;
  const targetId = String(id).trim();

  const foundInDb = projectsDatabase.find((item) => String(item.ID || item.id) === targetId);
  if (foundInDb) return foundInDb;

  for (const seasons of Object.values(popupsDatabase)) {
    if (!Array.isArray(seasons)) continue;
    for (const season of seasons) {
      if (String(season.ID || season.id) === targetId) return season;
      if (season.Cards && Array.isArray(season.Cards)) {
        const foundCard = season.Cards.find((c) => String(c.ID || c.id) === targetId);
        if (foundCard) return foundCard;
      }
    }
  }
  return null;
}

function createProjectCard(item, cardTypeClass = "project") {
  const template = document.getElementById("project-card-template");
  if (!template || !item) return null;

  const clone = template.content.cloneNode(true);
  const card = clone.querySelector(".card");

  const itemId = item.ID || item.id;
  if (itemId) card.id = itemId;
  if (cardTypeClass) card.classList.add(cardTypeClass);

  if (item.Lost === true || item.lost === true) {
    card.classList.add("lost");
  }

  const img = clone.querySelector("img");
  if (img) img.src = item.Image || item.posterImage || "";

  const nameRuInfo = SiteEngine.processNameForSorting(item.NameRU || item.nameRu || "");
  const rawNameEN = item.NameEN || item.nameEn || "";
  const nameEnInfo = rawNameEN ? SiteEngine.processNameForSorting(rawNameEN) : null;

  const nameRuEl = clone.querySelector(".name-ru");
  if (nameRuEl) nameRuEl.textContent = nameRuInfo.cleanName;

  const nameEnEl = clone.querySelector(".name-en");
  if (nameEnEl) nameEnEl.textContent = nameEnInfo?.cleanName || "";

  const statusEl = clone.querySelector(".status");
  if (statusEl) statusEl.textContent = item.Status || item.titleStatus || "";

  const donutEl = clone.querySelector(".donut");
  if (donutEl && (item.Donut || item.donutTerms)) {
    const donutVal = item.Donut || item.donutTerms;
    donutEl.classList.add(Array.isArray(donutVal) ? donutVal[0] : donutVal);
  }

  const favBtn = clone.querySelector(".favorite");
  if (favBtn && itemId) {
    const favs = SiteEngine.activeInstance?.favorites;
    if (Array.isArray(favs) && favs.includes(String(itemId))) {
      favBtn.classList.add("tracked");
    }
  }

  updateControlButtons(card, item);

  return clone;
}

function pasteCard(cardData, container, cardTypeClass = "project") {
  if (!container || !cardData) return null;

  let targetData = cardData;
  const lookupId = typeof cardData === "string" ? cardData : cardData.pasteCard;

  if (lookupId) {
    const found = findProjectById(lookupId);
    if (found) {
      targetData = typeof cardData === "object" ? { ...found, ...cardData } : found;
    } else {
      return null;
    }
  }

  const cardFragment = createProjectCard(targetData, cardTypeClass);
  if (cardFragment) {
    container.appendChild(cardFragment);
  }
  return cardFragment;
}

const ProjectsConfig = {
  containerId: ".window",
  cardTypeClass: "project",
  database: typeof projectsDatabase !== "undefined" ? projectsDatabase : [],
  defaultType: "series-Anime",
  favKey: "fav_projects",
  createCardFn: createProjectCard,
  findItemFn: findProjectById,
  getFlatDatabase: (db) => getFlatDatabase(db, popupsDatabase),

  sortFn: (a, b) => {
    const infoA = SiteEngine.processNameForSorting(a.NameRU || a.nameRu);
    const infoB = SiteEngine.processNameForSorting(b.NameRU || b.nameRu);

    const keyA = SiteEngine.getGroupKey(infoA.cleanName);
    const keyB = SiteEngine.getGroupKey(infoB.cleanName);

    if (keyA === "#" && keyB !== "#") return -1;
    if (keyB === "#" && keyA !== "#") return 1;

    return infoA.compareName.localeCompare(infoB.compareName, "ru", {
      numeric: true,
      sensitivity: "variant",
    });
  },

  getGroupKeyFn: (item) => SiteEngine.getGroupKey(SiteEngine.processNameForSorting(item.NameRU || item.nameRu).cleanName),
};

const LINK_PREFIXES = {
  vk: "https://vkvideo.ru/video-208448461_",
  boosty: "https://boosty.to/",
};

function formatServiceUrl(platform, path) {
  if (!path) return "#";
  if (path.startsWith("http")) return path;
  return `${LINK_PREFIXES[platform] || ""}${path}`;
}

function formatPlayerUrl(platform, id, hash, time) {
  if (platform === "vk") {
    return `https://vkvideo.ru/video_ext.php?oid=-208448461&id=${id}&hash=${hash}&t=${time}`;
  }
  return "#";
}

// Строим стабильный идентификатор для .continue на основе ссылки (Link).
// Ссылка — самый надёжный признак: у утерянных (Lost) серий её нет, поэтому
// такие серии просто не получают continueId и не участвуют в отслеживании.
function buildContinueId(item) {
  const linkData = item.Link || item.titleLink;
  if (!Array.isArray(linkData) || linkData.length < 2) return null;

  const [platform, path] = linkData;
  if (!platform || !path) return null;

  return `${platform}:${path}`;
}

function createProjectPopupContent(projectId, projectsDb, popupsDb) {
  const projectMeta = findProjectById(projectId) || {};
  const finalId = projectMeta.ID || projectMeta.id || projectId;
  const seasonsData = popupsDb[finalId] || popupsDb[projectId] || [];

  const projectTpl = document.getElementById("project-template");
  if (!projectTpl) return null;

  const projectClone = projectTpl.content.cloneNode(true);
  const projectEl = projectClone.querySelector(".project");

  if (finalId) projectEl.id = finalId;

  const imgUrl = projectMeta.Image || projectMeta.posterImage;
  if (imgUrl) {
    projectEl.style.backgroundImage = `url("${imgUrl}")`;
  }

  const aboutEl = projectEl.querySelector(".about");
  if (aboutEl) {
    const nameRuInfo = SiteEngine.processNameForSorting(projectMeta.NameRU || projectMeta.nameRu || "");
    const nameRuEl = aboutEl.querySelector(".name-ru");
    if (nameRuEl) nameRuEl.textContent = nameRuInfo.cleanName;

    const rawNameEN = projectMeta.NameEN || projectMeta.nameEn || "";
    const nameEnInfo = rawNameEN ? SiteEngine.processNameForSorting(rawNameEN) : null;
    const nameEnEl = aboutEl.querySelector(".name-en");
    if (nameEnEl) nameEnEl.textContent = nameEnInfo?.cleanName || "";

    const statusEl = aboutEl.querySelector(".status");
    const statusText = projectMeta.Status || projectMeta.titleStatus || "";
    if (statusEl) statusEl.textContent = statusText;

    const aboutDonut = aboutEl.querySelector(".donut");
    const donutVal = projectMeta.Donut || projectMeta.donutTerms;
    if (aboutDonut && donutVal) {
      aboutDonut.classList.add(Array.isArray(donutVal) ? donutVal[0] : donutVal);
    }
  }

  const contentEl = projectEl.querySelector(".content");
  const seasonTplV1 = document.getElementById("season-template-v1");
  const seasonTplV2 = document.getElementById("season-template-v2");
  const episodeTpl = document.getElementById("episode-template");

  seasonsData.forEach((seasonData) => {
    const hasTitle = seasonData.Title && seasonData.Title.trim() !== "";
    const seasonTpl = hasTitle ? seasonTplV2 : seasonTplV1;
    if (!seasonTpl) return;

    const seasonClone = seasonTpl.content.cloneNode(true);
    const seasonEl = seasonClone.querySelector(".season");

    if (hasTitle) {
      const titleEl = seasonEl.querySelector(".title");
      if (titleEl) titleEl.textContent = seasonData.Title;
    }

    const episodesContainer = seasonEl.querySelector(".episodes");
    const cardsContainer = seasonEl.querySelector(".cards");

    if (seasonData.Episodes && seasonData.Episodes.length > 0) {
      if (cardsContainer) cardsContainer.remove();

      seasonData.Episodes.forEach((ep) => {
        if (!episodeTpl) return;

        const epClone = episodeTpl.content.cloneNode(true);
        const epEl = epClone.querySelector(".episode");

        if (ep.Lost === true || ep.lost === true) {
          epEl.classList.add("lost");
        }

        const groups = epEl.querySelectorAll(".group");
        const infoGroup = groups[0] || epEl;
        const actionsGroup = groups[1] || epEl;

        const epName = infoGroup.querySelector(".name");
        if (epName) epName.textContent = ep.Name || ep.title || "";

        const epDate = infoGroup.querySelector(".date");
        if (epDate) epDate.textContent = ep.Date || "";

        const epDonut = actionsGroup.querySelector(".donut");
        const epDonutVal = ep.Donut || ep.donutTerms;
        if (epDonut && epDonutVal) {
          epDonut.classList.add(Array.isArray(epDonutVal) ? epDonutVal[0] : epDonutVal);
        }

        const epContinueEl = epEl.querySelector(".continue");
        if (epContinueEl) {
          const continueId = buildContinueId(ep);
          if (continueId) epContinueEl.dataset.continueId = continueId;
        }

        updateControlButtons(actionsGroup, ep);
        episodesContainer.appendChild(epEl);
      });
    } else if (seasonData.Cards && seasonData.Cards.length > 0) {
      if (episodesContainer) episodesContainer.remove();

      seasonData.Cards.forEach((cardData) => {
        pasteCard(cardData, cardsContainer, "project");
      });
    } else {
      if (episodesContainer) episodesContainer.remove();
      if (cardsContainer) cardsContainer.remove();
    }

    contentEl.appendChild(seasonEl);
  });

  restoreContinueState(projectEl);

  return projectEl;
}

window.openTitlePopup = function (projectId) {
  if (!projectId) return;

  const input = document.querySelector(".inputSearch, #searchInput");
  if (input && input.value) {
    input.value = "";
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }

  const projectContent = createProjectPopupContent(projectId, projectsDatabase, popupsDatabase);
  if (projectContent && window.projectsEngine) {
    window.projectsEngine.openPopup(projectContent);
  }
};

window.openPopup = window.openTitlePopup;

document.addEventListener("click", (e) => {
  const watchBtn = e.target.closest(".watch");
  if (!watchBtn) return;

  if (watchBtn.disabled || watchBtn.classList.contains("disabled")) return;

  e.preventDefault();

  const parentCard = watchBtn.closest(".card, .project");
  const id = parentCard?.id || parentCard?.dataset?.id;

  if (id) {
    openTitlePopup(id);
  }
});

function updateControlButtons(container, item) {
  if (!container || !item) return;

  const watchBtn = container.querySelector(".watch");
  const linkBtn = container.querySelector(".link");
  const playerBtn = container.querySelector(".player");

  const linkData = item.Link || item.titleLink;
  const playerData = item.Player || item.player;

  const hasLink = Array.isArray(linkData) && linkData.length >= 2;
  const hasPlayer = Array.isArray(playerData) && playerData.length >= 4;

  if (linkBtn) {
    if (hasLink) {
      const [platform, path] = linkData;
      linkBtn.className = `link ${platform}`;
      linkBtn.href = formatServiceUrl(platform, path);
      linkBtn.classList.remove("disabled");
      linkBtn.removeAttribute("disabled");
    } else {
      linkBtn.className = "link";
      linkBtn.removeAttribute("href");
      linkBtn.classList.add("disabled");
      linkBtn.setAttribute("disabled", "true");
    }
  }

  if (playerBtn) {
    if (hasPlayer) {
      const [platform, id, hash, time] = playerData;
      playerBtn.className = `player ${platform}`;
      playerBtn.setAttribute("player-href", formatPlayerUrl(platform, id, hash, time));
      playerBtn.removeAttribute("href");
      playerBtn.classList.remove("disabled");
      playerBtn.removeAttribute("disabled");
    } else {
      playerBtn.className = "player";
      playerBtn.removeAttribute("player-href");
      playerBtn.removeAttribute("href");
      playerBtn.classList.add("disabled");
      playerBtn.setAttribute("disabled", "true");
    }
  }

  if (watchBtn) {
    const isWatchDisabled = hasLink || hasPlayer;
    watchBtn.classList.toggle("disabled", isWatchDisabled);
    if (isWatchDisabled) {
      watchBtn.setAttribute("disabled", "true");
    } else {
      watchBtn.removeAttribute("disabled");
    }
  }
}

function openPlayerPopup(videoUrl) {
  if (!videoUrl || !window.projectsEngine) return;

  const playerTpl = document.getElementById("player-template");
  if (!playerTpl) return;

  const clone = playerTpl.content.cloneNode(true);
  const iframe = clone.querySelector("iframe");

  if (iframe) {
    iframe.src = videoUrl;
  }

  const popupEl = window.projectsEngine.openPopup(clone);
  if (popupEl) {
    popupEl.id = "player-popup";
  }
}

document.addEventListener("click", (e) => {
  const playerBtn = e.target.closest(".player");
  if (!playerBtn) return;

  if (playerBtn.disabled || playerBtn.classList.contains("disabled")) return;

  const videoUrl = playerBtn.getAttribute("player-href");
  if (videoUrl && videoUrl.trim() !== "" && videoUrl !== "#") {
    e.preventDefault();
    openPlayerPopup(videoUrl);
  }
});

// =========================================================================
// Отслеживание последней открытой серии (.continue) внутри попапа
// =========================================================================

const CONTINUE_STORAGE_KEY = "continueWatchingState";

function getContinueState() {
  try {
    return JSON.parse(localStorage.getItem(CONTINUE_STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function setContinueState(projectId, continueId) {
  if (!projectId) return;

  const state = getContinueState();
  if (continueId) {
    state[projectId] = continueId;
  } else {
    delete state[projectId];
  }

  try {
    localStorage.setItem(CONTINUE_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Не удалось сохранить continueWatchingState:", e);
  }
}

// Восстанавливаем активную .continue при открытии попапа (после перезагрузки страницы и т.п.)
// Если сохранённая серия больше не найдена (например, стала Lost и потеряла ссылку) —
// запись в localStorage удаляется, чтобы "хвосты" не копились.
function restoreContinueState(projectEl) {
  const projectId = projectEl?.id;
  if (!projectId) return;

  const savedContinueId = getContinueState()[projectId];
  if (!savedContinueId) return;

  const continueEls = projectEl.querySelectorAll(".continue");
  let matched = false;

  for (const el of continueEls) {
    if (el.dataset.continueId === savedContinueId) {
      el.classList.add("active");
      matched = true;
      break;
    }
  }

  if (!matched) {
    setContinueState(projectId, null);
  }
}

// Ищем ближайший элемент .continue, относящийся к нажатой кнопке .link/.player
// (поднимаемся от кнопки вверх по DOM, пока не найдём контейнер с .continue внутри)
function findRelatedContinue(triggerBtn, projectEl) {
  let el = triggerBtn.parentElement;
  while (el && el !== projectEl.parentElement) {
    const continueEl = el.querySelector(".continue");
    if (continueEl) return continueEl;
    el = el.parentElement;
  }
  return null;
}

document.addEventListener("click", (e) => {
  // Клик по уже активной .continue — снимаем отметку
  const activeContinue = e.target.closest(".continue.active");
  if (activeContinue) {
    activeContinue.classList.remove("active");
    const projectEl = activeContinue.closest(".project");
    if (projectEl) setContinueState(projectEl.id, null);
    return;
  }

  // Клик по кнопке .link или .player — отмечаем соответствующую серию как последнюю открытую
  const trigger = e.target.closest(".link, .player");
  if (!trigger) return;
  if (trigger.disabled || trigger.classList.contains("disabled")) return;

  const projectEl = trigger.closest(".project");
  if (!projectEl) return;

  const continueEl = findRelatedContinue(trigger, projectEl);
  if (!continueEl || !continueEl.dataset.continueId) return;

  // В попапе может быть активна только одна .continue
  projectEl.querySelectorAll(".continue.active").forEach((el) => {
    if (el !== continueEl) el.classList.remove("active");
  });

  continueEl.classList.add("active");
  setContinueState(projectEl.id, continueEl.dataset.continueId);
});

function getFlatDatabase(projectsDb, popupsDb) {
  const allItems = new Map();

  projectsDb.forEach((item) => {
    const id = item.ID || item.id;
    if (id) {
      allItems.set(id, { ...item });
    }
  });

  Object.values(popupsDb).forEach((seasons) => {
    if (!Array.isArray(seasons)) return;
    seasons.forEach((season) => {
      if (season.Cards && Array.isArray(season.Cards)) {
        season.Cards.forEach((c) => {
          const cId = c.ID || c.id;
          if (cId) allItems.set(cId, { ...c });
        });
      }
      const sId = season.ID || season.id;
      if (sId && (season.NameRU || season.nameRu)) {
        allItems.set(sId, { ...season });
      }
    });
  });

  return Array.from(allItems.values()).map((item) => {
    const nameRu = item.NameRU || item.nameRu || "";
    const nameEn = item.NameEN || item.nameEn || "";

    const rawRu = nameRu.replace(/\|\|/g, " ");
    const rawEn = nameEn.replace(/\|\|/g, " ");

    return {
      ...item,
      nameRuLower: rawRu.toLowerCase(),
      nameEnLower: rawEn.toLowerCase(),
      trigramsString: [...SiteEngine.getTrigrams(rawRu), ...SiteEngine.getTrigrams(rawEn)].join(" "),
    };
  });
}

// Вызов глобального метода поиска стандартного типа
SiteEngine.registerSearch((query, cardsContainer, noteEl) => {
  SiteEngine.runSearch({
    query,
    cardsContainer,
    noteEl,
    indexedData: window.projectsEngine.indexedData,
    createCardFn: createProjectCard,
    cardTypeClass: "project",
    enableNickSearch: false,
  });
});

function openRandomiserPopup() {
  const randomiserTpl = document.getElementById("randomiser-template");
  if (!randomiserTpl || !window.projectsEngine) return;

  const existingPopup = document.getElementById("randomiser-popup");
  if (existingPopup) {
    window.projectsEngine.closePopup(existingPopup);
  }

  const clone = randomiserTpl.content.cloneNode(true);
  const randomBtn = clone.querySelector(".random");
  const cardsContainer = clone.querySelector(".cards");

  if (randomBtn && cardsContainer) {
    randomBtn.addEventListener("click", () => {
      const engine = window.projectsEngine;
      const db = engine.indexedData?.length ? engine.indexedData : engine.config.database;

      if (!db || db.length === 0) return;

      const randomIndex = Math.floor(Math.random() * db.length);
      const randomItem = db[randomIndex];

      if (randomItem && typeof engine.config.createCardFn === "function") {
        const cardNode = engine.config.createCardFn(randomItem, engine.config.cardTypeClass);
        if (cardNode) {
          cardsContainer.prepend(cardNode);

          const currentCards = cardsContainer.children;
          if (currentCards.length > 8) {
            currentCards[currentCards.length - 1].remove();
          }
        }
      }
    });
  }

  const popupEl = window.projectsEngine.openPopup(clone);
  if (popupEl) {
    popupEl.id = "randomiser-popup";
  }
}

window.openRandomiserPopup = openRandomiserPopup;
window.projectsEngine = new SiteEngine(ProjectsConfig);
