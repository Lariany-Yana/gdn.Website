// =========================================================================
// Модуль страницы Заказов / Тайтлов (orderpage.js)
// =========================================================================

const cardTypeLabels = {
  "order-during": "В процессе",
  "order-determinate": "В уточнении",
  "order-incomplete": "Нужен дозаказ",
  "order-frozen": "На паузе",
  "order-switch": "Свапы",
  "order-finished": "Просмотренное",
};

const MONTH_NAMES = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const TYPE_ORDER = ["order-waiting", "order-during", "order-determinate", "order-incomplete", "order-frozen", "order-switch", "order-finished"];

function parseDateStr(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return null;
  const parts = dateStr.trim().split(".");
  if (parts.length !== 3) return null;

  let day = parseInt(parts[0], 10);
  let month = parseInt(parts[1], 10);
  let year = parseInt(parts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;
  if (year < 100) year += 2000;

  return new Date(year, month - 1, day);
}

function getCardEarliestDate(item) {
  if (!item || !Array.isArray(item.Slots) || item.Slots.length === 0) {
    return null;
  }

  let earliestDate = null;
  for (const slot of item.Slots) {
    const d = parseDateStr(slot.Date || slot.date);
    if (d && (!earliestDate || d < earliestDate)) {
      earliestDate = d;
    }
  }

  return earliestDate;
}

function getSortedSlots(slots) {
  if (!Array.isArray(slots)) return [];
  return [...slots].sort((a, b) => {
    const dateA = parseDateStr(a.Date || a.date);
    const dateB = parseDateStr(b.Date || b.date);
    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;
    return dateA - dateB;
  });
}

function findOrderById(id) {
  if (!id || typeof ordersDatabase === "undefined") return null;
  const targetId = String(id).trim();
  return ordersDatabase.find((item) => String(item.ID || item.id) === targetId) || null;
}

function createOrderCard(item, cardTypeClass = "order") {
  if (!item) return null;

  const customStyleClass = item.Style || "";

  if (item.Type === "order-switch") {
    const swapCardTemplate = document.getElementById("order-swap-card-template");
    const swapSlotTemplate = document.getElementById("order-swap-slot-template");

    if (!swapCardTemplate) return null;

    const clone = swapCardTemplate.content.cloneNode(true);
    const card = clone.querySelector(".card");

    const itemId = item.ID || item.id;
    if (itemId) card.id = itemId;

    if (cardTypeClass) card.classList.add(cardTypeClass);
    card.classList.add("swap");
    if (customStyleClass) card.classList.add(customStyleClass);

    const mainStatusEl = clone.querySelector(".info .status");
    if (mainStatusEl) {
      mainStatusEl.textContent = item.Status || item.status || "";
    }

    if (Array.isArray(item.FromTo) && item.FromTo.length > 0 && swapSlotTemplate) {
      const fragment = document.createDocumentFragment();

      item.FromTo.forEach((slotData) => {
        const slotClone = swapSlotTemplate.content.cloneNode(true);

        const nameRuEl = slotClone.querySelector(".name-ru");
        if (nameRuEl) {
          const rawNameRU = slotData.NameRU || slotData.nameRu || "";
          const nameRuInfo = SiteEngine.processNameForSorting(rawNameRU);
          nameRuEl.textContent = nameRuInfo.cleanName;
        }

        const nameEnEl = slotClone.querySelector(".name-en");
        if (nameEnEl) {
          const rawNameEN = slotData.NameEN || slotData.nameEn || "";
          const nameEnInfo = rawNameEN ? SiteEngine.processNameForSorting(rawNameEN) : null;
          nameEnEl.textContent = nameEnInfo ? nameEnInfo.cleanName : "";
        }

        const slotStatusEl = slotClone.querySelector(".status");
        if (slotStatusEl) {
          slotStatusEl.textContent = slotData.Status || slotData.status || "";
        }

        fragment.appendChild(slotClone);
      });

      card.appendChild(fragment);
    }

    return clone;
  }

  const cardTemplate = document.getElementById("order-card-template");
  const slotTemplate = document.getElementById("order-slot-template");

  if (!cardTemplate) return null;

  const clone = cardTemplate.content.cloneNode(true);
  const card = clone.querySelector(".card");

  const itemId = item.ID || item.id;
  if (itemId) card.id = itemId;
  if (cardTypeClass) card.classList.add(cardTypeClass);
  if (customStyleClass) card.classList.add(customStyleClass);

  const nameRuEl = clone.querySelector(".name-ru");
  if (nameRuEl) {
    const nameRuInfo = SiteEngine.processNameForSorting(item.NameRU || item.nameRu || "");
    nameRuEl.textContent = nameRuInfo.cleanName;
  }

  const nameEnEl = clone.querySelector(".name-en");
  if (nameEnEl) {
    const rawNameEN = item.NameEN || item.nameEn || "";
    const nameEnInfo = rawNameEN ? SiteEngine.processNameForSorting(rawNameEN) : null;
    nameEnEl.textContent = nameEnInfo ? nameEnInfo.cleanName : "";
  }

  const statusEl = clone.querySelector(".status");
  if (statusEl) {
    statusEl.textContent = item.Status || item.status || "";
  }

  const favBtn = clone.querySelector(".favorite");
  if (favBtn && itemId) {
    const favs = SiteEngine.activeInstance?.favorites;
    if (Array.isArray(favs) && favs.includes(String(itemId))) {
      favBtn.classList.add("tracked");
    }
  }

  const slotsContainer = clone.querySelector(".slots");
  if (slotsContainer) {
    slotsContainer.innerHTML = "";

    if (Array.isArray(item.Slots) && item.Slots.length > 0 && slotTemplate) {
      const fragment = document.createDocumentFragment();
      const sortedSlots = getSortedSlots(item.Slots);

      sortedSlots.forEach((slotData) => {
        const slotClone = slotTemplate.content.cloneNode(true);
        const slotEl = slotClone.querySelector(".slot") || slotClone.firstElementChild;

        if (slotEl) {
          const isListed = slotData.Listed !== undefined ? slotData.Listed : slotData.listed;
          if (isListed === false) {
            slotEl.classList.add("unlisted");
          } else if (isListed === true) {
            slotEl.classList.add("listed");
          }
        }

        const dateEl = slotClone.querySelector(".date");
        if (dateEl) dateEl.textContent = slotData.Date || slotData.date || "";

        const countEl = slotClone.querySelector(".count");
        if (countEl) countEl.textContent = slotData.Slot || slotData.Count || slotData.count || "";

        const nameEl = slotClone.querySelector(".name");
        if (nameEl) nameEl.textContent = slotData.Name || slotData.name || "";

        fragment.appendChild(slotClone);
      });

      slotsContainer.appendChild(fragment);
    }
  }

  return clone;
}

const OrdersConfig = {
  containerId: ".window",
  cardTypeClass: "order",
  database: typeof ordersDatabase !== "undefined" ? ordersDatabase : [],
  defaultType: "order-waiting",
  favKey: "fav_orders",
  createCardFn: createOrderCard,
  findItemFn: findOrderById,
  getFlatDatabase: getFlatOrdersDatabase,

  getGroupKeyFn: (item) => {
    if (!item) return "#";

    if (item.Type === "order-waiting") {
      const date = getCardEarliestDate(item);
      if (date) {
        const monthName = MONTH_NAMES[date.getMonth()];
        const year = date.getFullYear();
        return `${monthName} ${year}`;
      }
      return "Без даты";
    }

    return cardTypeLabels[item.Type] || "Прочее";
  },

  sortFn: (a, b) => {
    const typeA = a.Type || "";
    const typeB = b.Type || "";

    if (typeA !== typeB) {
      const idxA = TYPE_ORDER.indexOf(typeA);
      const idxB = TYPE_ORDER.indexOf(typeB);
      return (idxA !== -1 ? idxA : 99) - (idxB !== -1 ? idxB : 99);
    }

    if (typeA === "order-waiting" && typeB === "order-waiting") {
      const dateA = getCardEarliestDate(a);
      const dateB = getCardEarliestDate(b);

      if (dateA && dateB) {
        if (dateA.getTime() !== dateB.getTime()) return dateA - dateB;
      } else if (dateA && !dateB) {
        return -1;
      } else if (!dateA && dateB) {
        return 1;
      }
    }

    return 0;
  },

  initAlphabetNavFn: function (items) {
    const navContainer = (this.windowEl || document).querySelector(".management.navigate");
    if (!navContainer) return;

    navContainer.innerHTML = "";

    const sortedGroups = [];
    items.forEach((item) => {
      const key = typeof this.config.getGroupKeyFn === "function" ? this.config.getGroupKeyFn(item) : "#";
      if (key && !sortedGroups.includes(key)) {
        sortedGroups.push(key);
      }
    });

    if (sortedGroups.length === 0) return;

    const fragment = document.createDocumentFragment();
    const groupElementsMap = new Map();

    sortedGroups.forEach((groupKey) => {
      const btn = document.createElement("button");
      btn.textContent = groupKey;
      btn.dataset.group = groupKey;

      btn.addEventListener("click", () => {
        const sections = (this.windowEl || document).querySelectorAll(".content section.cards");
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
  },
};

window.ordersEngine = new SiteEngine(OrdersConfig);

document.querySelector(".content").setAttribute("data-update-was", UpdateWas);

function getFlatOrdersDatabase(ordersDb) {
  if (!Array.isArray(ordersDb)) return [];

  return ordersDb.map((item) => {
    const titleNames = [];
    if (item.NameRU || item.nameRu) titleNames.push(item.NameRU || item.nameRu);
    if (item.NameEN || item.nameEn) titleNames.push(item.NameEN || item.nameEn);

    if (Array.isArray(item.FromTo)) {
      item.FromTo.forEach((ft) => {
        if (ft.NameRU || ft.nameRu) titleNames.push(ft.NameRU || ft.nameRu);
        if (ft.NameEN || ft.nameEn) titleNames.push(ft.NameEN || ft.nameEn);
      });
    }

    const rawTitle = titleNames.join(" ").replace(/\|\|/g, " ");
    const titleLower = rawTitle.toLowerCase();

    const nickNames = [];
    if (Array.isArray(item.Slots)) {
      item.Slots.forEach((slot) => {
        const name = slot.Name || slot.name;
        if (name && typeof name === "string") {
          nickNames.push(name);
        }
      });
    }

    const rawNick = nickNames.join(" ");
    const nickLower = rawNick.toLowerCase();

    return {
      ...item,
      titleLower,
      nickLower,
      titleTrigramsStr: SiteEngine.getTrigrams(titleLower).join(" "),
      nickTrigramsStr: SiteEngine.getTrigrams(nickLower).join(" "),
    };
  });
}

// Вызов глобального метода поиска со включенным флагом поиска по никнеймам (@)
SiteEngine.registerSearch((query, cardsContainer, noteEl) => {
  SiteEngine.runSearch({
    query,
    cardsContainer,
    noteEl,
    indexedData: window.ordersEngine.indexedData,
    createCardFn: createOrderCard,
    cardTypeClass: "order",
    enableNickSearch: true,
  });
});
