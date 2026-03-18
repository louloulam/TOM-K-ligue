// ============================================
// TOM KÉLIGUE — script.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Curseur personnalisé ──────────────────
  const cursor = document.querySelector('.cursor');
  const ring   = document.querySelector('.cursor-ring');

  if (cursor && ring) {
    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top  = mouseY + 'px';
    });

    const animRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      requestAnimationFrame(animRing);
    };
    animRing();

    // Grossir le ring sur liens
    document.querySelectorAll('a, button, .service-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.style.transform   = 'translate(-50%, -50%) scale(1.8)';
        ring.style.borderColor = 'rgba(155, 126, 200, 0.8)';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.transform   = 'translate(-50%, -50%) scale(1)';
        ring.style.borderColor = 'rgba(155, 126, 200, 0.5)';
      });
    });
  }

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

  // ── Compteur années expérience ────────────
  const counter = document.querySelector('.grand');
  if (counter) {
    const target = parseInt(counter.textContent);
    let current  = 0;
    const step   = Math.ceil(target / 30);
    const timer  = setInterval(() => {
      current = Math.min(current + step, target);
      counter.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 50);
  }

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

});
