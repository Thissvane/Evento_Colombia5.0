// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  if (window.scrollY > 40) {
    nav.style.padding = '0.5rem 0';
    nav.style.borderBottomColor = 'rgba(247,201,72,0.25)';
  } else {
    nav.style.padding = '1rem 0';
    nav.style.borderBottomColor = 'rgba(247,201,72,0.15)';
  }
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.conf-card, .info-card, .ethics-block, .obj-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
