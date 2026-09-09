function applyTheme(theme) {
  document.body.style.setProperty('color-scheme', theme);
  document.body.setAttribute('data-theme', theme);
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme') || localStorage.getItem('userTheme') || 'dark';

  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  applyTheme(newTheme);
  localStorage.setItem('userTheme', newTheme);
}

(function() {
  const savedTheme = localStorage.getItem('userTheme') || 'dark';
  applyTheme(savedTheme);
})();