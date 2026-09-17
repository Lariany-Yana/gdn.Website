function applyTheme(theme) {
  document.body.style.setProperty("color-scheme", theme);
  document.body.setAttribute("data-theme", theme);
}

function getSystemTheme() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function effectiveTheme() {
  const saved = localStorage.getItem("userTheme");
  if (saved) return saved;
  return getSystemTheme();
}

function toggleTheme() {
  const next = effectiveTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("userTheme", next);
}

(function () {
  const saved = localStorage.getItem("userTheme");

  if (saved) {
    applyTheme(saved);
  } else {
    applyTheme(getSystemTheme());
  }

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      if (!localStorage.getItem("userTheme")) {
        applyTheme(event.matches ? "dark" : "light");
      }
    });
  }
})();
