let currentLang = 'es';

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.querySelectorAll('[data-es]').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
  document.querySelector('.lang-btn').textContent = currentLang === 'es' ? 'EN / ES' : 'ES / EN';
}
