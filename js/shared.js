/* ═══════════════════════════════════════════════════════════
   Kiin Uts · Shared Components (nav, footer, WhatsApp)
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const page = window.location.pathname.split('/').pop() || 'index.html';

  const LINKS = [
    { href: 'index.html',          text: 'Inicio'         },
    { href: 'nosotros.html',       text: 'Nosotros'       },
    { href: 'deportes.html',       text: 'Deportes'       },
    { href: 'recreacion.html',     text: 'Recreación'     },
    { href: 'ponte-en-forma.html', text: 'Ponte en Forma' },
    { href: 'capacitacion.html',   text: 'Capacitación'   },
    { href: 'contacto.html',       text: 'Contacto', cta: true },
  ];

  const linksHtml = LINKS.map(l => {
    const active = l.href === page ? ' active' : '';
    const cls    = l.cta ? ' nav-cta' : active;
    return `<li><a href="${l.href}" class="${cls.trim()}">${l.text}</a></li>`;
  }).join('');

  /* ── Nav ─────────────────────────────────────────────────── */
  const NAV = `
<nav id="navbar">
  <div class="nav-wrap">
    <a href="index.html" class="nav-brand">
      <img src="img/logo-kiin.jpg" alt="Kiin Uts Sport &amp; Recreation" class="brand-logo">
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Abrir menú">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="navLinks">${linksHtml}</ul>
  </div>
</nav>`;

  /* ── Footer ──────────────────────────────────────────────── */
  const FOOTER = `
<footer>
  <div class="footer-top">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="img/logo-kiin.jpg" alt="Kiin Uts Sport &amp; Recreation" class="brand-logo brand-logo--footer">
          </div>
          <p>Organización deportiva y recreativa de México. Creando experiencias llenas de optimismo y felicidad desde 2011.</p>
          <div class="social-links">
            <a href="https://instagram.com/kiinuts" target="_blank" rel="noopener" class="social-btn" title="Instagram">📸</a>
            <a href="https://facebook.com/kiinuts" target="_blank" rel="noopener" class="social-btn" title="Facebook">📘</a>
            <a href="https://youtube.com/@kiinuts" target="_blank" rel="noopener" class="social-btn" title="YouTube">▶️</a>
            <a href="https://wa.me/5514733567" target="_blank" rel="noopener" class="social-btn" title="WhatsApp">💬</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="deportes.html">Deportes</a></li>
            <li><a href="recreacion.html">Recreación</a></li>
            <li><a href="ponte-en-forma.html">Ponte en Forma</a></li>
            <li><a href="capacitacion.html">Capacitación</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contáctanos</h4>
          <ul>
            <li><a href="tel:5514733567">📞 55 1473 3567</a></li>
            <li><a href="mailto:m.fernandez@kiinuts.com">📧 m.fernandez@kiinuts.com</a></li>
            <li><a href="https://wa.me/5514733567" target="_blank" rel="noopener">💬 WhatsApp</a></li>
            <li><a href="https://instagram.com/kiinuts" target="_blank" rel="noopener">📸 Instagram</a></li>
            <li><a href="https://facebook.com/kiinuts" target="_blank" rel="noopener">📘 Facebook</a></li>
            <li><a href="https://youtube.com/@kiinuts" target="_blank" rel="noopener">▶️ YouTube</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <span>© ${new Date().getFullYear()} Kiin Uts. Sport &amp; Recreation. Todos los derechos reservados.</span>
      <a href="#">Política de Privacidad</a>
    </div>
  </div>
</footer>`;

  /* ── WhatsApp button ─────────────────────────────────────── */
  const WA = `
<a href="https://wa.me/5514733567" class="wa-btn" target="_blank" rel="noopener" title="Escríbenos por WhatsApp">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 1C7.7 1 1 7.7 1 16c0 2.6.7 5.1 2 7.3L1 31l7.9-2.1C11 30.3 13.5 31 16 31c8.3 0 15-6.7 15-15S24.3 1 16 1zm0 27.4c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.3-4.5-.3-.5C4 20.5 3.4 18.3 3.4 16 3.4 9 9 3.4 16 3.4S28.6 9 28.6 16 23 28.4 16 28.4zm8.2-9.5c-.4-.2-2.5-1.2-2.9-1.3-.4-.1-.7-.2-.9.2s-1 1.3-1.3 1.6c-.2.3-.5.3-.9.1-2.4-1.2-4-2.1-5.5-4.8-.4-.7.4-.7 1.2-2.3.1-.3 0-.5-.1-.7-.1-.2-.9-2.3-1.3-3.1-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-1.5 1.5-1.5 4 .1 6.1 2.4 3.4 5.4 5.6 8.9 6.3 1.1.2 2.1.2 2.9-.1 1-.4 2.5-1 2.8-2 .3-.9.3-1.6.2-1.8z"/>
  </svg>
</a>`;

  /* ── Inject nav (synchronous) ────────────────────────────── */
  const navPh = document.getElementById('nav-ph');
  if (navPh) navPh.outerHTML = NAV;

  /* ── Init after DOM ready ────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {

    /* Footer */
    const footerPh = document.getElementById('footer-ph');
    if (footerPh) footerPh.outerHTML = FOOTER;

    /* WhatsApp */
    document.body.insertAdjacentHTML('beforeend', WA);

    /* Mobile nav toggle */
    const toggle   = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        toggle.classList.toggle('open');
      });
      navLinks.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => {
          navLinks.classList.remove('open');
          toggle.classList.remove('open');
        })
      );
    }

    /* Nav scroll shadow */
    const nav = document.getElementById('navbar');
    if (nav) {
      const updateNav = () => nav.classList.toggle('scrolled', window.scrollY > 50);
      window.addEventListener('scroll', updateNav, { passive: true });
      updateNav();
    }

    /* Fade-in on scroll */
    const fadeEls = document.querySelectorAll('.fade-in, .fade-in-l, .fade-in-r');
    if (fadeEls.length) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: 0.1 });
      fadeEls.forEach(el => obs.observe(el));
    }

    /* Stat counters (if any) */
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = +el.dataset.count;
      const obs2   = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          obs2.unobserve(el);
          const t0  = performance.now();
          const dur = 1400;
          (function step(now) {
            const p    = Math.min((now - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = (el.dataset.suffix ? '' : '') + Math.floor(ease * target) + (el.dataset.suffix || '');
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = target + (el.dataset.suffix || '');
          })(t0);
        });
      });
      obs2.observe(el);
    });
  });
})();
