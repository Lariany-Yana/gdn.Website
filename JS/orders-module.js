// =========================================================================
// Константы и словари модуля заказов
// =========================================================================
const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const cardTypeLabels = {
  "order-during": "В процессе",
  "order-incomplete": "Нужен дозаказ",
  "order-frozen": "На паузе",
  "order-switch": "Свапы",
  "order-finished": "Просмотренное",
};

const getOrderWaitingTime = (item) => {
  if (!item.items || item.items.length === 0) return Infinity;

  const firstActiveItem = item.items.find((slot) => !slot.was || (slot.was.trim() !== "was" && slot.was.trim() !== "owe"));

  const targetItem = firstActiveItem || item.items[0];

  return targetItem && targetItem.date ? OrdersConfig.parseCustomDate(targetItem.date).getTime() : Infinity;
};

// =========================================================================
// Конфигурационный объект заказов (OrdersConfig)
// =========================================================================
const OrdersConfig = {
  containerId: "#orders",
  database: ordersDatabase,
  defaultType: "order-waiting",
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
      if (!item.items || item.items.length === 0) return "Без даты";

      const firstActiveItem = item.items.find((slot) => !slot.was || (slot.was.trim() !== "was" && slot.was.trim() !== "owe"));

      const targetItem = firstActiveItem || item.items[0];

      if (!targetItem || !targetItem.date) return "Без даты";

      const date = OrdersConfig.parseCustomDate(targetItem.date);
      return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    }
    return cardTypeLabels[item.cardType] || "Без категории";
  },

  getFlatDatabase: () =>
    ordersDatabase
      .filter((item) => item.cardType !== "order-switch" && item.cardType !== "order-finished")
      .map((item) => {
        const nicknames = item.items ? item.items.map((slot) => slot.nickname.toLowerCase()) : [];

        return {
          ...item,
          searchIndex: `${item.nameRu} ${item.nameEn}`.toLowerCase(),
          nicknameIndex: nicknames,
        };
      }),

  createCardFn: (order) => {
    if (order.cardType === "order-switch") {
      const template = document.getElementById("order-switch-template");
      if (!template) {
        console.error("Шаблон order-switch-template не найден");
        return document.createElement("article");
      }

      const fragment = template.content.cloneNode(true);
      const card = fragment.querySelector(".order-card");

      const orderId = order.id ? String(order.id).trim() : "";
      if (orderId) card.id = orderId;

      if (order.personalOrder && order.personalOrder.trim() !== "") {
        card.classList.add(order.personalOrder.trim());
      }

      const fromBlock = card.querySelector(".order-content.from");
      if (fromBlock) {
        fromBlock.querySelector(".name-ru").textContent = order.nameRu_1 || "";
        hideIfEmpty(fromBlock.querySelector(".name-en"), order.nameEn_1);
        hideIfEmpty(fromBlock.querySelector(".order-info"), order.orderRemark_1);
      }

      const toBlock = card.querySelector(".order-content.to");
      if (toBlock) {
        toBlock.querySelector(".name-ru").textContent = order.nameRu_2 || "";
        hideIfEmpty(toBlock.querySelector(".name-en"), order.nameEn_2);
        hideIfEmpty(toBlock.querySelector(".order-info"), order.orderRemark_2);
      }

      return card;
    }

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

        if (item.was) {
          const wasValue = item.was.trim();

          if (wasValue === "was") {
            slotRow.classList.add("was");
          } else if (wasValue === "owe") {
            slotRow.classList.add("was", "owe");
          }
        }

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

    const nameElements = card.querySelectorAll(".name-ru");

    nameElements.forEach((element) => {
      element.style.cursor = "copy";
      let isCopying = false;

      element.addEventListener("click", () => {
        if (isCopying) return;

        const textToCopy = element.textContent.trim();
        if (!textToCopy) return;

        isCopying = true;
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            const originalText = textToCopy;
            element.textContent = "Скопировано в буфер обмена";
            element.classList.add("copied");

            setTimeout(() => {
              element.textContent = originalText;
              element.classList.remove("copied");
              isCopying = false;
            }, 1500);
          })
          .catch((err) => {
            console.error("Ошибка копирования", err);
            isCopying = false;
          });
      });
    });

    return card;
  },

  openSearchFn: (query, indexedData) => {
    if (query.length < 2) {
      renderSearchResults(null, OrdersConfig.createCardFn, OrdersConfig.searchPlaceholder);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = [];

    if (lowerQuery.startsWith("@")) {
      const pureNickQuery = lowerQuery.slice(1);

      if (pureNickQuery.length === 0) {
        renderSearchResults(null, OrdersConfig.createCardFn, OrdersConfig.searchPlaceholder);
        return;
      }

      indexedData.forEach((item) => {
        const matchedNick = item.nicknameIndex.find((nick) => nick.includes(pureNickQuery));
        if (matchedNick) {
          const score = calculateMatchScore(matchedNick, pureNickQuery);

          filtered.push({ ...item, score });
        }
      });
    } else {
      indexedData.forEach((item) => {
        const score = calculateMatchScore(item.searchIndex, lowerQuery);
        if (score > 0) {
          filtered.push({ ...item, score });
        }
      });
    }

    renderSearchResults(filtered, OrdersConfig.createCardFn, OrdersConfig.searchPlaceholder);
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
