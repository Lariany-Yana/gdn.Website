// =========================================================================
// Константы и глобальные базы данных
// =========================================================================
const DONUT_LVL = {
  "donut-lvl-1": { className: "donut-lvl-1", readable: "ЯГодень Стартовый" },
  "donut-lvl-2": { className: "donut-lvl-2", readable: "ЯГодень Стандарт" },
  "donut-lvl-3": { className: "donut-lvl-3", readable: "ЯГодень Премиум" },
};

const SRC_PREFIX = {
  boosty: "https://boosty.to/",
  vk: "https://vk.com/",
};

//prettier-ignore
const cardDatabase = [
	...seriesAnime,
	...seriesSerials,
	...seriesCartoons,
	...fullmeterAnime,
	...fullmeterMovie,
	...fullmeterCartoon,
	...amusementGames,
	...amusementYouTube,
	...amusementPoker,
	...amusementEvents,
	...amusementTVShows,
	...literatureManga,
	...literatureManhwa,
	...literatureComics,
	...literatureRanobe,
	...literatureBooks];

const popupDatabase = {
  ...seriesAnimePopups,
  ...seriesSerialsPopups,
  ...seriesCartoonsPopups,
  ...fullmeterAnimePopups,
  ...fullmeterMoviePopups,
  ...fullmeterCartoonPopups,
  ...amusementGamesPopups,
  ...amusementYouTubePopups,
  ...amusementPokerPopups,
  ...amusementTVShowsPopups,
  ...literatureMangaPopups,
  ...literatureManhwaPopups,
  ...literatureComicsPopups,
  ...literatureRanobePopups,
  ...literatureBooksPopups,
};

// =========================================================================
// Вспомогательные утилиты обработки данных
// =========================================================================
const processNameForSorting = (name) => {
  if (!name) return { cleanName: "", sortName: "", compareName: "", phantomText: "" };

  let baseName = name;
  let phantomText = "";

  if (name.includes("||")) {
    const parts = name.split("||");
    baseName = parts[0].trim();
    phantomText = parts.slice(1).join(" ").trim();
  }

  const makeCompareName = (str) => str.replace(/\s+/g, "").toLowerCase();

  const regex = /&#(\d+)/;
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
};

const getGroupKey = (name) => {
  const firstChar = name.trim()[0].toUpperCase();
  return /\d/.test(firstChar) ? "#" : firstChar;
};

function getTrigrams(str) {
  const s = "  " + (str || "").toLowerCase() + "  ";
  const trigrams = [];
  for (let i = 0; i < s.length - 2; i++) trigrams.push(s.substring(i, i + 3));
  return trigrams;
}

function applyDonutTerms(donutTerms, donutEl, cardEl = null) {
  if (!donutTerms) return;
  const terms = Array.isArray(donutTerms) ? donutTerms : [donutTerms];

  terms.forEach((term) => {
    const donutConfig = DONUT_LVL[term];
    if (donutConfig) {
      if (cardEl) cardEl.classList.add(donutConfig.className);
      donutEl.classList.add(donutConfig.className);

      if (!donutEl.textContent) {
        donutEl.textContent = donutConfig.readable;
        donutEl.classList.remove("hidden");
      }
    }
  });
}

// =========================================================================
// Компоненты интерфейса и работа с попапами (UI)
// =========================================================================
function createTitleCard(item) {
  const template = document.querySelector("#card-template");
  const clone = template.content.cloneNode(true);
  const card = clone.querySelector(".title-card");
  const { cleanName } = processNameForSorting(item.nameRu);
  const favBtn = clone.querySelector(".add-favorite");

  if (item.id && String(item.id).trim() !== "") {
    if (favBtn) {
      favBtn.classList.remove("hidden");

      const currentFavs = JSON.parse(localStorage.getItem(TitlesConfig.favKey)) || [];
      const isFav = currentFavs.includes(String(item.id));

      favBtn.textContent = isFav ? TitlesConfig.favTextAdded : TitlesConfig.favTextDefault;
      favBtn.classList.toggle("tracked", isFav);
    } else {
      favBtn.classList.add("hidden");
    }
  }

  card.id = item.id || "";

  if (item.titleLost?.toLowerCase().includes("lost")) card.classList.add("lost");

  clone.querySelector("img").src = item.posterImage;
  clone.querySelector(".name-ru").textContent = cleanName;

  const nameEnInfo = item.nameEn ? processNameForSorting(item.nameEn) : null;

  hideIfEmpty(clone.querySelector(".name-en"), nameEnInfo?.cleanName);
  hideIfEmpty(clone.querySelector(".just-info.status"), item.titleStatus);

  if (item.donutTerms) {
    applyDonutTerms(item.donutTerms, clone.querySelector(".donut"), card);
  }

  const watchBtn = clone.querySelector(".watch");
  const linkData = item.titleLink;

  if (Array.isArray(linkData) && linkData.length >= 2) {
    const [linkType, linkUrl] = linkData;

    if (linkType) {
      watchBtn.classList.add(linkType);
    }

    watchBtn.onclick = () => {
      if (linkUrl?.trim()) {
        const prefix = SRC_PREFIX[linkType] || "";
        const finalUrl = prefix ? `${prefix}${linkUrl}` : linkUrl;

        window.open(finalUrl, "_blank");
      } else {
        openPopup(item.id);
      }
    };
  } else {
    watchBtn.onclick = () => {
      if (typeof linkData === "string" && linkData.trim()) {
        window.open(linkData, "_blank");
      } else {
        openPopup(item.id);
      }
    };
  }

  const hasLink = Array.isArray(linkData) ? !!linkData[1]?.trim() : !!linkData?.trim();
  const hasPopup = !!popupDatabase[item.id];

  if (!hasLink && !hasPopup) {
    watchBtn.setAttribute("data-empty", "true");
    watchBtn.textContent = "ERROR";
  }

  return clone;
}

function openPopup(id) {
  const resContainer = document.querySelector(".results-container");
  if (resContainer) resContainer.innerHTML = "";
  let titleData = cardDatabase.find((i) => i.id === id);

  if (!titleData) {
    for (const seasons of Object.values(popupDatabase)) {
      const found = seasons.find((e) => e.id === id);
      if (found) {
        titleData = found;
        break;
      }
    }
  }

  const episodesData = popupDatabase[id];
  if (!episodesData) return;

  const popup = initPopup("episodes");
  if (!popup) return;

  if (titleData) {
    popup.querySelector(".name-ru").textContent = processNameForSorting(titleData.nameRu).cleanName;

    const nameEnInfo = titleData.nameEn ? processNameForSorting(titleData.nameEn) : null;

    hideIfEmpty(popup.querySelector(".name-en"), nameEnInfo?.cleanName);

    if (titleData.donutTerms) {
      applyDonutTerms(titleData.donutTerms, popup.querySelector(".donut"));
    }
  }

  const container = popup.querySelector(".all-seasons-container");
  container.innerHTML = "";

  let currentCardGroup = null;

  episodesData.forEach((entry) => {
    let targetEntry = entry;

    if (entry.pasteCard) {
      const lookupId = entry.pasteCard;

      let foundCard = cardDatabase.find((i) => String(i.id) === String(lookupId));

      if (!foundCard) {
        for (const seasons of Object.values(popupDatabase)) {
          const found = seasons.find((e) => String(e.id) === String(lookupId));
          if (found) {
            foundCard = found;
            break;
          }
        }
      }

      if (foundCard) {
        targetEntry = foundCard;
      } else {
        return;
      }
    }

    if (targetEntry.seasonName?.trim()) {
      currentCardGroup = null;
      const h1 = document.createElement("h1");
      h1.className = "season";
      h1.textContent = targetEntry.seasonName;
      container.appendChild(h1);
    }

    if (targetEntry.items?.length > 0) {
      currentCardGroup = null;
      const epContainer = document.createElement("div");
      epContainer.className = "episodes-container";

      targetEntry.items.forEach((ep) => {
        const a = document.createElement("a");
        a.className = `episode-button ${ep.source} ${ep.lost ? "lost" : ""}`;

        const prefix = SRC_PREFIX[ep.source] || "";

        a.href = prefix ? `${prefix}${ep.link}` : ep.link;

        a.target = "_blank";
        a.innerHTML = `<span>${ep.title}</span>`;
        epContainer.appendChild(a);
      });

      container.appendChild(epContainer);
    } else if (targetEntry.nameRu) {
      if (!currentCardGroup) {
        currentCardGroup = document.createElement("div");
        currentCardGroup.className = "card-container";
        container.appendChild(currentCardGroup);
      }
      currentCardGroup.appendChild(createTitleCard(targetEntry));
    }
  });
}

// =========================================================================
// Конфигурационный объект тайтлов (TitlesConfig)
// =========================================================================
const TitlesConfig = {
  containerId: "#titles",
  database: cardDatabase,
  defaultType: "series-Anime",
  favKey: "fav_titles",
  favTextDefault: "В избранное",
  favTextAdded: "Из избранного",
  searchPlaceholder: "Введите название тайтла (Минимум 2 символа)",
  sortFn: (a, b) => {
    const infoA = processNameForSorting(a.nameRu);
    const infoB = processNameForSorting(b.nameRu);

    const keyA = getGroupKey(infoA.cleanName);
    const keyB = getGroupKey(infoB.cleanName);

    if (keyA === "#" && keyB !== "#") return -1;
    if (keyB === "#" && keyA !== "#") return 1;

    return infoA.compareName.localeCompare(infoB.compareName, "ru", {
      numeric: true,
      sensitivity: "variant",
    });
  },

  getGroupKeyFn: (item) => getGroupKey(processNameForSorting(item.nameRu).cleanName),

  createCardFn: createTitleCard,

  getFlatDatabase: () => {
    const allItems = new Map();

    cardDatabase.forEach((i) => {
      if (i.id !== "Amusement-Poker" && i.cardType !== "amusement-Event") {
        allItems.set(i.id, { ...i });
      }
    });

    Object.values(popupDatabase).forEach((seasons) => {
      seasons.forEach((e) => {
        if (e.id && e.id !== "Amusement-Poker" && e.cardType !== "amusement-Event" && e.nameRu) {
          allItems.set(e.id, { ...e });
        }
      });
    });

    return Array.from(allItems.values()).map((i) => {
      const rawRu = (i.nameRu || "").replace("||", " ");
      const rawEn = (i.nameEn || "").replace("||", " ");

      return {
        ...i,
        nameRuLower: rawRu.toLowerCase(),
        nameEnLower: rawEn.toLowerCase(),
        trigrams: new Set([...getTrigrams(rawRu), ...getTrigrams(rawEn)]),
      };
    });
  },

  openSearchFn: (query, indexedData) => {
    if (query.length < 2) {
      renderSearchResults(null, createTitleCard, TitlesConfig.searchPlaceholder);
      return;
    }

    const queryLower = query.toLowerCase();
    const queryTris = getTrigrams(queryLower);
    const filtered = [];

    for (let i = 0; i < indexedData.length; i++) {
      const item = indexedData[i];
      const scoreRu = calculateMatchScore(item.nameRuLower, queryLower);
      const scoreEn = calculateMatchScore(item.nameEnLower, queryLower);
      const directScore = Math.max(scoreRu, scoreEn);

      if (directScore > 0) {
        const scoredItem = {
          ...item,
          score: directScore - (item.nameRuLower || "").length * 0.001,
        };
        filtered.push(scoredItem);
        continue;
      }

      let matches = 0;
      for (let j = 0; j < queryTris.length; j++) {
        if (item.trigrams && item.trigrams.has(queryTris[j])) {
          matches++;
        }
      }

      const score = matches / queryTris.length;
      if (score > 0.35) {
        const scoredItem = {
          ...item,
          score: score * 0.5,
        };
        filtered.push(scoredItem);
      }
    }

    renderSearchResults(filtered, createTitleCard);
  },
};

// =========================================================================
// Инициализация модуля и глобальные события
// =========================================================================
const godenEngine = new SiteEngine(TitlesConfig);

document.addEventListener("click", (e) => {
  const randomBtn = e.target.closest(".random-button");
  if (!randomBtn) return;

  const container = document.querySelector(".results-container");
  if (!container) return;

  const randomIndex = Math.floor(Math.random() * cardDatabase.length);
  const randomItem = cardDatabase[randomIndex];

  const cardFragment = createTitleCard(randomItem);
  const card = cardFragment.querySelector(".title-card");

  container.prepend(cardFragment);
  if (card) {
    animateCardAppearance(card);
  }

  const currentCards = container.querySelectorAll(".title-card");
  if (currentCards.length > 10) {
    currentCards[currentCards.length - 1].remove();
  }
});
