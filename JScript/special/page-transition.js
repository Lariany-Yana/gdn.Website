(function () {
  // 1. Внедрение стилей: html и body всегда сохраняют фон var(--html-color).
  // Начальная прозрачность задаётся строго контейнеру .window
  var css = ".window { opacity: 0; } " + ".window.window_animated { transition: opacity 0.33s ease-in-out !important; } " + ".window.window_visible { opacity: 1 !important; }";

  var style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(css));
  (document.head || document.documentElement).appendChild(style);

  // 2. Плавное появление (Fade-in)
  function showPage() {
    var win = document.querySelector(".window");
    if (!win) return;

    win.classList.add("window_animated");

    // Пауза 200 мс (как в Тильде) даёт браузеру время отрендерить кадр
    setTimeout(function () {
      win.classList.add("window_visible");
    }, 200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showPage);
  } else {
    showPage();
  }

  // Поддержка BFCache (кнопки "Назад / Вперёд" в браузере)
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      var win = document.querySelector(".window");
      if (win) win.classList.add("window_visible");
    }
  });

  // Восстановление видимости при возврате на вкладку
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) {
      var win = document.querySelector(".window");
      if (win) win.classList.add("window_visible");
    }
  });

  // 3. Плавный уход (Fade-out)
  document.addEventListener("click", function (event) {
    var link = event.target.closest("a");
    if (!link) return;

    var href = link.getAttribute("href");

    // Пропуск системных и якорных ссылок
    if (!href || href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

    // Пропуск открытия в новой вкладке и кликов с зажатыми модификаторами (Ctrl/Cmd/Shift)
    if (link.target === "_blank" || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (link.hasAttribute("download") || link.classList.contains("no-transition")) return;

    event.preventDefault();

    var win = document.querySelector(".window");
    if (win) {
      win.classList.remove("window_visible");
    }

    // Задержка 500 мс перед перенаправлением (330 мс анимация + 170 мс запас)
    setTimeout(function () {
      window.location.href = href;
    }, 500);
  });
})();
