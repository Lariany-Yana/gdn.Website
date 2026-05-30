// =========================================================================
// Константы и словари модуля заказов
// =========================================================================
const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const cardTypeLabels = {
  "order-during": "В процессе",
  "order-incomplete": "Початое",
  "order-frozen": "На паузе",
  "order-switch": "Свапы",
};

const getOrderWaitingTime = (item) => {
  const dateStr = item.items?.[0]?.date;
  return dateStr ? OrdersConfig.parseCustomDate(dateStr).getTime() : Infinity;
};

// =========================================================================
// Конфигурационный объект заказов (OrdersConfig)
// =========================================================================
const OrdersConfig = {
  containerId: "#orders",
  database: ordersDatabase,
  defaultType: "order-during",
  favKey: "fav_orders",
  favTextDefault: "Отслеживать",
  favTextAdded: "Отслеживается",
  searchPlaceholder: "Для поиска по никам нужно ввести «@»",
  parseCustomDate: parseCustomDate,

  sortFn: (a, b) => {
    if (a.cardType === "order-waiting" && b.cardType === "order-waiting") {
      return getOrderWaitingTime(a) - getOrderWaitingTime(b);
    }
    return 0;
  },

  getGroupKeyFn: (item) => {
    if (item.cardType === "order-waiting") {
      const firstItem = item.items?.[0];
      if (!firstItem?.date) return "Без даты";

      const date = OrdersConfig.parseCustomDate(firstItem.date);
      return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    }
    return cardTypeLabels[item.cardType] || "Без категории";
  },

  getFlatDatabase: () =>
    ordersDatabase
      .filter((item) => item.cardType !== "order-switch")
      .map((item) => {
        const nicknames = item.items ? item.items.map((slot) => slot.nickname.toLowerCase()) : [];

        return {
          ...item,
          searchIndex: `${item.nameRu} ${item.nameEn}`.toLowerCase(),
          nicknameIndex: nicknames,
        };
      }),

createCardFn: (order) => {
    // 1. Обработка специального типа карточек: Свапы заказов
    if (order.cardType === "order-switch") {
      const template = document.getElementById("order-switch-template");
      if (!template) {
        console.error("Шаблон order-switch-template не найден");
        return document.createElement("article");
      }
      
      const fragment = template.content.cloneNode(true);
      const card = fragment.querySelector(".order-card");

      // ID для карточек свапов обычно не критичен (они без кнопки избранного), 
      // но на всякий случай генерируем или берем пустой
      const orderId = order.id ? String(order.id).trim() : "";
      if (orderId) card.id = orderId;

      // Добавляем класс кастомизации (например, цвет пользователя)
      if (order.personalOrder && order.personalOrder.trim() !== "") {
        card.classList.add(order.personalOrder.trim());
      }

      // Заполняем блок "ОТКУДА" (from) -> суффикс _1
      const fromBlock = card.querySelector(".order-content.from");
      if (fromBlock) {
        fromBlock.querySelector(".name-ru").textContent = order.nameRu_1 || "";
        hideIfEmpty(fromBlock.querySelector(".name-en"), order.nameEn_1);
        hideIfEmpty(fromBlock.querySelector(".order-info"), order.orderRemark_1);
      }

      // Заполняем блок "КУДА" (to) -> суффикс _2
      const toBlock = card.querySelector(".order-content.to");
      if (toBlock) {
        toBlock.querySelector(".name-ru").textContent = order.nameRu_2 || "";
        hideIfEmpty(toBlock.querySelector(".name-en"), order.nameEn_2);
        hideIfEmpty(toBlock.querySelector(".order-info"), order.orderRemark_2);
      }

      return card;
    }

    // 2. Стандартная логика для всех остальных типов карточек (с фильтрацией по слотам)
    const template = document.getElementById("order-card-template");
    const slotTemplate = document.getElementById("slot-row-template");
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".order-card");

    const orderId = order.id ? String(order.id).trim() : "";
    card.id = orderId;

    if (order.personalOrder && order.personalOrder.trim() !== "") {
      card.classList.add(order.personalOrder.trim());
    }

    hideIfEmpty(card.querySelector(".order-info"), order.orderRemark);
    hideIfEmpty(card.querySelector(".name-en"), order.nameEn);

    card.querySelector(".name-ru").textContent = order.nameRu;

    const slotsContainer = card.querySelector(".order-slots");
    if (order.items && order.items.length > 0) {
      order.items.forEach((item) => {
        const slotRowFrag = slotTemplate.content.cloneNode(true);
        const slotRow = slotRowFrag.querySelector(".slot-row");
        slotRow.querySelector(".nickname").textContent = item.nickname;
        slotRow.querySelector(".count").textContent = item.slot;
        slotRow.querySelector(".date").textContent = item.date;
        slotsContainer.appendChild(slotRowFrag);
      });
      slotsContainer.classList.remove("hidden");
    }

    const favBtn = card.querySelector(".add-favorite");
    if (favBtn) {
      if (orderId !== "") {
        favBtn.classList.remove("hidden");
        const currentFavs = JSON.parse(localStorage.getItem(OrdersConfig.favKey)) || [];
        const isFav = currentFavs.includes(orderId);
        favBtn.textContent = isFav ? OrdersConfig.favTextAdded : OrdersConfig.favTextDefault;
        favBtn.classList.toggle("tracked", isFav);
      } else {
        favBtn.classList.add("hidden");
      }
    }

    return card;
  },

  openSearchFn: (query, indexedData) => {
    let popup = document.getElementById("popup-search") || initPopup("search");
    const container = popup.querySelector(".results-container");

    if (query.length < 2) {
      container.innerHTML = `<p class="search-hint">${OrdersConfig.searchPlaceholder}</p>`;
      return;
    }

    const lowerQuery = query.toLowerCase();
    let filtered = [];

    if (lowerQuery.startsWith("@")) {
      const pureNickQuery = lowerQuery.slice(1);

      if (pureNickQuery.length === 0) {
        container.innerHTML = `<p class="search-hint">${OrdersConfig.searchPlaceholder}</p>`;
        return;
      }

      filtered = indexedData.filter((item) => item.nicknameIndex.some((nick) => nick.includes(pureNickQuery)));
    } else {
      filtered = indexedData.filter((item) => item.searchIndex.includes(lowerQuery));
    }

    container.innerHTML = filtered.length ? "" : "<p>Ничего не найдено</p>";

    if (filtered.length) {
      const wrap = document.createElement("div");
      wrap.className = "card-container";

      const LIMIT = 15;
      const itemsToRender = filtered.slice(0, LIMIT);

      itemsToRender.forEach((item) => {
        const card = OrdersConfig.createCardFn(item);
        wrap.appendChild(card);
        animateCardAppearance(card);
      });

      container.appendChild(wrap);

      if (filtered.length > LIMIT) {
        const leftOver = filtered.length - LIMIT;
        const remainingItems = filtered.slice(LIMIT);

        renderSearchMoreButton(container, wrap, remainingItems, OrdersConfig.createCardFn, leftOver);
      }
    }
  },
};

// =========================================================================
// Инициализация модуля заказов
// =========================================================================
const godenEngine = new SiteEngine(OrdersConfig);

const updateWasElement = document.getElementById("updateWas");
if (updateWasElement && typeof updateWas !== "undefined") {
  updateWasElement.textContent = updateWas;
}
