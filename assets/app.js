/* ========== FILE: assets/app.js (v3) — menu, année, effets ========== */
// Année dynamique dans le pied de page
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

// Menu « ☰ » (téléphone et tablette).
// Gestion unique : intercepte le clic avant les éventuels scripts propres aux pages,
// pour éviter que le menu s'ouvre puis se referme aussitôt.
const menu = document.getElementById('menu');
document.addEventListener('click', (e) => {
  const burger = e.target.closest('#burger');
  if (burger && menu) {
    e.stopPropagation();
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    return;
  }
  if (menu && menu.classList.contains('open') && !e.target.closest('#menu')) {
    menu.classList.remove('open');
  }
}, true);

// Ombre de la barre de navigation au défilement
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 6);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Apparition progressive des sections au défilement
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12 });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('is-visible'));
}
