(function () {
  const windowEl = document.querySelector(".window");
  if (!windowEl) return;

  window.setAspect = function (aspectClass) {
    windowEl.classList.remove("ar16x9", "ar4x3");
    windowEl.classList.add(aspectClass);
    localStorage.setItem("windowAspectRatio", aspectClass);
  };

  const savedAspect = localStorage.getItem("windowAspectRatio");

  if (savedAspect === "ar16x9") {
    setAspect("ar16x9");
  } else {
    setAspect("ar4x3");
  }
})();
