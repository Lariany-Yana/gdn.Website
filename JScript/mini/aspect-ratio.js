(function() {
    const windowEl = document.querySelector('.window');
    if (!windowEl) return;

    // Функция гарантированной установки класса
    window.setAspect = function(aspectClass) {
      windowEl.classList.remove('ar16x9', 'ar4x3');
      windowEl.classList.add(aspectClass);
      localStorage.setItem('windowAspectRatio', aspectClass);
    };

    // Читаем значение из localStorage
    const savedAspect = localStorage.getItem('windowAspectRatio');

    // Если записано ar16x9 — ставим его, во всех остальных случаях (ar4x3 или null) — ar4x3
    if (savedAspect === 'ar16x9') {
      setAspect('ar16x9');
    } else {
      setAspect('ar4x3');
    }
  })();