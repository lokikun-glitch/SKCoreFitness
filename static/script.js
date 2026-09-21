/* ============================================================
   POWERFORGE GYM — script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ── MOBILE MENU ── */
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');

  navToggle?.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* ── SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  /* ── COUNTER ANIMATION ── */
  const counters = document.querySelectorAll('[data-count]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let start = 0;
      const duration = 1800;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => countObserver.observe(el));

  /* ── CONTACT FORM ── */
  const form = document.getElementById('contact-form');
  const formWrap = document.querySelector('.form-fields');
  const formSuccess = document.querySelector('.form-success');

  const WHATSAPP_NUMBER = '919595605530';

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const fname = form.fname.value.trim();
    const lname = form.lname.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const goalField = form.goal;
    const goal = goalField.value ? goalField.options[goalField.selectedIndex].text : '';
    const message = form.message.value.trim();

    const lines = [
      'Hi! I want to book a FREE TRIAL at SK CORE FITNESS.',
      '',
      `Name: ${fname} ${lname}`,
      `Phone: ${phone}`,
    ];
    if (email) lines.push(`Email: ${email}`);
    if (goal) lines.push(`Goal: ${goal}`);
    if (message) lines.push(`Message: ${message}`);

    const text = encodeURIComponent(lines.join('\n'));

    // Open WhatsApp with the form details pre-filled, ready to send
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');

    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Opening WhatsApp...';
    btn.disabled = true;

    formWrap.style.display = 'none';
    formSuccess.style.display = 'block';
  });

  /* ── SMOOTH SCROLL FOR NAV LINKS ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── MARQUEE DUPLICATE ── */
  const track = document.querySelector('.marquee-track');
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  /* ── ACTIVE NAV LINK HIGHLIGHT ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        active?.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(sec => activeObserver.observe(sec));

});
