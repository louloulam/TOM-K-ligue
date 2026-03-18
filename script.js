// ============================================
// TOM KÉLIGUE — script.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Nav sticky ────────────────────────────
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── Menu mobile ───────────────────────────
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn   = document.querySelector('.mobile-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
    closeBtn.addEventListener('click',  () => mobileMenu.classList.remove('open'));
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  // ── Reveal au scroll ──────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // ── Formulaire ────────────────────────────
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn  = form.querySelector('.form-submit span');
      const orig = btn.textContent;
      btn.textContent = 'Message envoyé ✓';
      setTimeout(() => { btn.textContent = orig; form.reset(); }, 3000);
    });
  }

  // ── Parallaxe légère hero ─────────────────
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroBg.style.transform = `translateY(${y * 0.3}px)`;
    }, { passive: true });
  }

  // ── Parallaxe vidéo hero ──────────────────
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroVideo.style.transform = `translateY(${y * 0.2}px)`;
    }, { passive: true });
  }

});
