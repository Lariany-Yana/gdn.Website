// =========================================================================
// Модуль главной страницы / Расписания (mainpage.js)
// =========================================================================

// =========================================================================
// Вспомогательные утилиты для обработки дат расписания
// =========================================================================
const ScheduleUtils = {
  parseDate(dateStr) {
    if (typeof parseCustomDate === "function") {
      return parseCustomDate(dateStr);
    }

    if (!dateStr || typeof dateStr !== "string") return null;
    const parts = dateStr.trim().split(".");
    if (parts.length !== 3) return null;

    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1;
    let year = parseInt(parts[2], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) return null;
    if (year < 100) year += 2000;
    return new Date(year, month, day);
  },

  getDayKey(dateStr) {
    const date = this.parseDate(dateStr);
    if (!date || isNaN(date.getTime())) return dateStr || "Без даты";

    const dayName = date.toLocaleDateString("ru-RU", { weekday: "long" });
    const capitalizedDay = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    return `${capitalizedDay} ${dateStr}`;
  },

  getMonthKey(dateStr) {
    const date = this.parseDate(dateStr);
    if (!date || isNaN(date.getTime())) return "Без даты";

    const monthName = date.toLocaleDateString("ru-RU", { month: "long" });
    const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    return `${capitalizedMonth} ${date.getFullYear()}`;
  },
};

/**
 * Обработчик автоскролла при раскрытии <details>
 */
function handleDetailsToggle(event) {
  const target = event.target;

  if (target.tagName === "DETAILS" && target.open) {
    const scrollContainer = target.closest(".content") || target.closest(".window");

    if (scrollContainer) {
      requestAnimationFrame(() => {
        const containerTop = scrollContainer.getBoundingClientRect().top;
        const elementTop = target.getBoundingClientRect().top;
        const targetScrollTop = scrollContainer.scrollTop + (elementTop - containerTop);

        scrollContainer.scrollTo({
          top: targetScrollTop,
          behavior: "smooth",
        });
      });
    }
  }
}

/**
 * Функция поиска элемента расписания по ID в базе данных
 */
function findScheduleById(id) {
  if (typeof scheduleDatabase === "undefined" || !id) return null;
  const targetId = String(id).trim();
  return scheduleDatabase.find((item) => String(item.ID || item.id) === targetId) || null;
}

/**
 * Билдер карточки расписания из HTML-шаблона #schedule-card-template
 */
function createScheduleCard(item, cardTypeClass = "schedule") {
  if (!item) return null;

  const template = document.getElementById("schedule-card-template");
  if (!template) return null;

  const clone = template.content.cloneNode(true);
  const card = clone.querySelector(".card");
  if (!card) return null;

  const itemId = item.ID || item.id;
  if (itemId) card.id = itemId;
  if (cardTypeClass && !card.classList.contains(cardTypeClass)) {
    card.classList.add(cardTypeClass);
  }

  // Название на русском
  const nameRuEl = clone.querySelector(".name-ru");
  if (nameRuEl) {
    const rawNameRU = item.NameRU || item.nameRu || "";
    const nameRuInfo = typeof SiteEngine !== "undefined" && SiteEngine.processNameForSorting ? SiteEngine.processNameForSorting(rawNameRU) : { cleanName: rawNameRU };
    nameRuEl.textContent = nameRuInfo.cleanName;
  }

  // Название на английском
  const nameEnEl = clone.querySelector(".name-en");
  if (nameEnEl) {
    const rawNameEN = item.NameEN || item.nameEn || "";
    const nameEnInfo = typeof SiteEngine !== "undefined" && SiteEngine.processNameForSorting && rawNameEN ? SiteEngine.processNameForSorting(rawNameEN) : { cleanName: rawNameEN };
    nameEnEl.textContent = nameEnInfo.cleanName;
  }

  // Статус / Информационная пометка
  const statusEl = clone.querySelector(".status") || clone.querySelector(".schedule-info");
  if (statusEl) {
    statusEl.textContent = item.Status || item.status || item.scheduleRemark || "";
  }

  return clone;
}

// Конфигурация движка
const ScheduleConfig = {
  containerId: ".window",
  cardTypeClass: "schedule",
  database: typeof scheduleDatabase !== "undefined" ? scheduleDatabase : [],
  defaultType: "page-Schedule",
  favKey: "fav_schedule",
  createCardFn: createScheduleCard,
  findItemFn: findScheduleById,
  getGroupKeyFn: (item) => item.Date || item.date || "без-даты",
  sortFn: (a, b) => {
    const dateA = ScheduleUtils.parseDate(a.Date || a.date);
    const dateB = ScheduleUtils.parseDate(b.Date || b.date);
    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;
    return dateA - dateB;
  },
};

// Инициализация экземпляра движка
window.scheduleEngine = new SiteEngine(ScheduleConfig);

// Переопределение метода render с поддержкой статических шаблонов по их ID
window.scheduleEngine.render = function (type) {
  const contentSelector = `${this.config.containerId} .content`;
  const contentEl = document.querySelector(contentSelector) || document.querySelector(this.config.containerId);
  if (!contentEl) return;

  // 1. Проверяем наличие статического HTML-шаблона для текущей вкладки (например: #page-Main, #page-Donut)
  const staticTemplate = document.getElementById(type);

  if (staticTemplate && staticTemplate.tagName === "TEMPLATE" && type !== "page-Schedule") {
    contentEl.scrollTop = 0;
    contentEl.innerHTML = "";
    contentEl.appendChild(staticTemplate.content.cloneNode(true));

    // Очищаем вспомогательную навигацию для статических страниц
    const navContainer = document.querySelector(`${this.config.containerId} .management.navigate`);
    if (navContainer) navContainer.innerHTML = "";
    return;
  }

  // 2. Рендеринг динамической базы данных для расписания
  if (!this.config.database) return;

  const filtered = this.config.database.filter((item) => {
    if (!item.Type) return type === "page-Schedule";
    return item.Type === type;
  });

  this.renderByItems(filtered);
};

// Переопределение метода renderByItems для расписания
window.scheduleEngine.renderByItems = function (items) {
  const contentSelector = `${this.config.containerId} .content`;
  const contentEl = document.querySelector(contentSelector);
  if (!contentEl) return;

  // Навешиваем слушатель toggle единожды на контейнер с флагом capture
  if (!contentEl.dataset.toggleListenerAttached) {
    contentEl.addEventListener("toggle", handleDetailsToggle, true);
    contentEl.dataset.toggleListenerAttached = "true";
  }

  contentEl.scrollTop = 0;
  contentEl.innerHTML = "";

  if (!items || items.length === 0) {
    contentEl.innerHTML = `<div class="empty-state">Список пуст</div>`;
    const navContainer = document.querySelector(`${this.config.containerId} .management.navigate`);
    if (navContainer) navContainer.innerHTML = "";
    return;
  }

  // Разделение элементов на актуальные и прошедшие
  const currentItems = [];
  const pastItems = [];

  items.forEach((item) => {
    const isCurrent = item.Current !== undefined ? item.Current : item.current;
    if (isCurrent === false) {
      pastItems.push(item);
    } else {
      currentItems.push(item);
    }
  });

  // Сортировка элементов по дате (от старых к новым)
  const sortFn = typeof this.config.sortFn === "function" ? this.config.sortFn : (a, b) => ScheduleUtils.parseDate(a.Date || a.date) - ScheduleUtils.parseDate(b.Date || b.date);

  currentItems.sort(sortFn);
  pastItems.sort(sortFn);

  const fragment = document.createDocumentFragment();

  // -------------------------------------------------------------------------
  // 1. Рендеринг актуальных карточек (Current: true)
  // -------------------------------------------------------------------------
  let currentGroup = "";
  let currentSection = null;

  currentItems.forEach((item) => {
    const rawDate = typeof this.config.getGroupKeyFn === "function" ? this.config.getGroupKeyFn(item) : "#";

    if (rawDate !== currentGroup) {
      currentGroup = rawDate;

      currentSection = document.createElement("section");
      currentSection.className = "cards";
      currentSection.dataset.groupKey = rawDate;

      const titleSpan = document.createElement("span");
      titleSpan.className = "title";
      titleSpan.textContent = ScheduleUtils.getDayKey(rawDate);
      currentSection.appendChild(titleSpan);

      fragment.appendChild(currentSection);
    }

    const cardNode = this.config.createCardFn(item, this.config.cardTypeClass);
    if (cardNode && currentSection) {
      currentSection.appendChild(cardNode);
    }
  });

  // -------------------------------------------------------------------------
  // 2. Рендеринг прошедших карточек (Current: false) в <details> по месяцам
  // -------------------------------------------------------------------------
  if (pastItems.length > 0) {
    const monthsMap = new Map();

    pastItems.forEach((item) => {
      const rawDate = typeof this.config.getGroupKeyFn === "function" ? this.config.getGroupKeyFn(item) : "#";
      const monthKey = ScheduleUtils.getMonthKey(rawDate);

      if (!monthsMap.has(monthKey)) {
        monthsMap.set(monthKey, new Map());
      }
      const daysMap = monthsMap.get(monthKey);

      if (!daysMap.has(rawDate)) {
        daysMap.set(rawDate, []);
      }
      daysMap.get(rawDate).push(item);
    });

    // Сортировка месяцев в ОБРАТНОМ порядке (от новых к старым)
    const sortedMonthEntries = Array.from(monthsMap.entries()).sort(([, daysMapA], [, daysMapB]) => {
      const firstDateA = ScheduleUtils.parseDate(daysMapA.keys().next().value);
      const firstDateB = ScheduleUtils.parseDate(daysMapB.keys().next().value);
      if (!firstDateA && !firstDateB) return 0;
      if (!firstDateA) return 1;
      if (!firstDateB) return -1;
      return firstDateB - firstDateA;
    });

    const monthTemplate = document.getElementById("schedule-month-template");

    sortedMonthEntries.forEach(([monthTitle, daysMap]) => {
      let detailsNode;

      if (monthTemplate) {
        const clone = monthTemplate.content.cloneNode(true);
        detailsNode = clone.querySelector("details");
        const emptyCardsSec = detailsNode.querySelectorAll(".cards");
        emptyCardsSec.forEach((el) => el.remove());
      } else {
        detailsNode = document.createElement("details");
      }

      let summaryNode = detailsNode.querySelector("summary");
      if (!summaryNode) {
        summaryNode = document.createElement("summary");
        detailsNode.prepend(summaryNode);
      }
      summaryNode.textContent = monthTitle;

      daysMap.forEach((dayItems, rawDate) => {
        const daySection = document.createElement("section");
        daySection.className = "cards";
        daySection.dataset.groupKey = rawDate;

        const titleSpan = document.createElement("span");
        titleSpan.className = "title";
        titleSpan.textContent = ScheduleUtils.getDayKey(rawDate);
        daySection.appendChild(titleSpan);

        dayItems.forEach((item) => {
          const cardNode = this.config.createCardFn(item, this.config.cardTypeClass);
          if (cardNode) {
            daySection.appendChild(cardNode);
          }
        });

        detailsNode.appendChild(daySection);
      });

      fragment.appendChild(detailsNode);
    });
  }

  contentEl.appendChild(fragment);

  if (typeof this.initAlphabetNavigation === "function") {
    this.initAlphabetNavigation([...currentItems, ...pastItems]);
  }
};
