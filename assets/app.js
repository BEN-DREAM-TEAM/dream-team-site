/* ========== FILE: assets/app.js (v2) ========== */
// Année dynamique footer
const yearEls = document.querySelectorAll('#year');
yearEls.forEach(el => el.textContent = new Date().getFullYear());

// Menu burger (mobile)
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    menu.style.flexDirection = 'column';
    menu.style.gap = '12px';
    menu.style.position = 'absolute';
    menu.style.top = '100px';
    menu.style.right = '4%';
    menu.style.background = '#fff';
    menu.style.padding = '16px 18px';
    menu.style.border = '1px solid #e8eaef';
    menu.style.borderRadius = '12px';
    menu.style.boxShadow = '0 14px 40px rgba(0,0,0,.08)';
  });
}

// Ombre de nav au scroll
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 6) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll);
onScroll();

// Révélation au scroll (fluidité)
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: .12 });

for (const el of reveals) {
  io.observe(el);
}

// Gestion du formulaire de contact + toast
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', () => {
    // Laisse le mailto s'exécuter
    setTimeout(() => {
      const toast = document.querySelector('.toast');
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remo
