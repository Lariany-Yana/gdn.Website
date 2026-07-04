// =========================================================================
// Конфигурация и инициализация расширения движка
// =========================================================================
const MainConfig = {
  containerId: "#main",
  database: typeof scheduleDatabase !== "undefined" ? scheduleDatabase : [],
  defaultType: "page-Main",
  isStaticDefault: true,
  renderScheduleFn: renderSchedule,
};

class MainEngine extends SiteEngine {
  init() {
    super.init(); // Вызываем базовую инициализацию из core.js

    // Навешиваем слушатель строго ОДИН раз при создании движка
    if (this.main) {
      this.main.addEventListener("toggle", this.handleScheduleToggle.bind(this), true);
    }
  }

  // Выносим тяжелую логику в отдельный метод
  handleScheduleToggle(event) {
    const target = event.target;
    
    if (target.tagName === "DETAILS" && target.open) {
      const scrollContainer = target.closest(".window");

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

  render(type, isStatic) {
    if (type === "schedule") {
      const template = document.getElementById("page-Schedule");
      
      if (template && this.main) {
        this.main.innerHTML = "";
        this.main.appendChild(template.content.cloneNode(true));
      }

      if (typeof this.config.renderScheduleFn === "function") {
        this.config.renderScheduleFn();
      }
      
      if (this.main) this.main.scrollTop = 0;
      
      return; // Событий здесь больше нет, только чистый рендер DOM
    }
    
    super.render(type, isStatic);
  }
}

const godenEngine = new MainEngine(MainConfig);

// =========================================================================
// Вспомогательные утилиты для обработки дат расписания
// =========================================================================
const ScheduleUtils = {
  parseDate(dateStr) {
    return parseCustomDate(dateStr);
  },

  getDayKey(dateStr) {
    const date = this.parseDate(dateStr);
    const dayName = date.toLocaleDateString("ru-RU", { weekday: "long" });
    const capitalizedDay = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    return `${capitalizedDay} ${dateStr}`;
  },

  getMonthKey(dateStr) {
    const date = this.parseDate(dateStr);
    const monthName = date.toLocaleDateString("ru-RU", { month: "long" });
    const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    return `${capitalizedMonth} ${date.getFullYear()}`;
  },
};

// =========================================================================
// Функции генерации интерфейса и рендеринга расписания
// =========================================================================
function createScheduleCard(item) {
  const template = document.querySelector("#schedule-card-template");
  if (!template) return document.createElement("div");

  const clone = template.content.cloneNode(true);

  clone.querySelector(".name-ru").textContent = item.nameRu;

  hideIfEmpty(clone.querySelector(".name-en"), item.nameEn);
  hideIfEmpty(clone.querySelector(".schedule-info"), item.scheduleRemark);

  return clone;
}

function renderSchedule() {
  const main = document.querySelector(MainConfig.containerId);
  const currentCont = main.querySelector(".current");
  const pastCont = main.querySelector(".past");

  if (!currentCont || !pastCont) return;

  currentCont.innerHTML = "";
  pastCont.innerHTML = "";

  const sortedDb = [...scheduleDatabase].sort((a, b) => ScheduleUtils.parseDate(a.date) - ScheduleUtils.parseDate(b.date));
  const groups = { current: {}, past: {} };

  sortedDb.forEach((item) => {
    const dayKey = ScheduleUtils.getDayKey(item.date);

    if (item.scheduleType === "schedule-current") {
      if (!groups.current[dayKey]) groups.current[dayKey] = [];
      groups.current[dayKey].push(item);
    } else {
      const monthKey = ScheduleUtils.getMonthKey(item.date);

      if (!groups.past[monthKey]) groups.past[monthKey] = {};
      if (!groups.past[monthKey][dayKey]) groups.past[monthKey][dayKey] = [];

      groups.past[monthKey][dayKey].push(item);
    }
  });

  const createDaySection = (dayTitle, items) => {
    const section = document.createElement("section");
    section.className = "card-section";

    const h2 = document.createElement("h2");
    h2.className = "card-section-name";
    h2.textContent = dayTitle;
    section.appendChild(h2);

    const cardWrap = document.createElement("div");
    cardWrap.className = "card-container";

    items.forEach((item) => cardWrap.appendChild(createScheduleCard(item)));
    section.appendChild(cardWrap);

    return section;
  };

  Object.keys(groups.current).forEach((dayTitle) => {
    currentCont.appendChild(createDaySection(dayTitle, groups.current[dayTitle]));
  });

  Object.keys(groups.past).forEach((monthTitle) => {
    const details = document.createElement("details");
    details.className = "past-month";

    const summary = document.createElement("summary");
    summary.textContent = monthTitle;
    details.appendChild(summary);

    const dayGroups = groups.past[monthTitle];
    Object.keys(dayGroups).forEach((dayTitle) => {
      details.appendChild(createDaySection(dayTitle, dayGroups[dayTitle]));
    });

    pastCont.appendChild(details);
  });
}
