function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('open');
}

// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});
