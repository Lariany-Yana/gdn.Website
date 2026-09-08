// Функция переключения темы (доступна глобально через window)
function toggleTheme() {
  // Узнаем текущую тему из body (или из localStorage, если в body ещё нет стилей)
  const currentTheme = document.body.style.getPropertyValue('color-scheme') || localStorage.getItem('userTheme') || 'dark';
  
  // Меняем на противоположную
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Применяем к body и сохраняем
  document.body.style.setProperty('color-scheme', newTheme);
  localStorage.setItem('userTheme', newTheme);
}

// Применяем сохраненную тему сразу при загрузке страницы
(function() {
  const savedTheme = localStorage.getItem('userTheme') || 'dark';
  document.body.style.setProperty('color-scheme', savedTheme);
})();