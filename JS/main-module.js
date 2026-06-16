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

const originalRender = SiteEngine.prototype.render;
SiteEngine.prototype.render = function (type, isStatic) {
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
    return;
  }
  originalRender.call(this, type, isStatic);
};

const godenEngine = new SiteEngine(MainConfig);

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
    const key = ScheduleUtils.getDayKey(item.date);
    if (item.scheduleType === "schedule-current") {
      if (!groups.current[key]) groups.current[key] = [];
      groups.current[key].push(item);
    } else {
      if (!groups.past[key]) groups.past[key] = [];
      groups.past[key].push(item);
    }
  });

  const renderEcosystem = (data, targetContainer) => {
    const keys = Object.keys(data);

    keys.forEach((title) => {
      const section = document.createElement("section");
      section.className = "card-section";

      const h2 = document.createElement("h2");
      h2.className = "card-section-name";
      h2.textContent = title;

      section.appendChild(h2);

      const cardWrap = document.createElement("div");
      cardWrap.className = "card-container";

      data[title].forEach((item) => cardWrap.appendChild(createScheduleCard(item)));

      section.appendChild(cardWrap);
      targetContainer.appendChild(section);
    });
  };

  renderEcosystem(groups.current, currentCont);
  renderEcosystem(groups.past, pastCont);
}
