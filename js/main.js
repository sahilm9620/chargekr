/* ============================================
   CHARGEKR  Main JavaScript
   Animations, Interactions & Utilities
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initCounters();
  initAccordions();
  initMobileMenu();
  initParticles();
  initCalculator();
  initSmoothScroll();
  initFuturisticUI();
});

/* ---- Futuristic UI Enhancements ---- */
function initFuturisticUI() {
  // 1. Create custom cursor
  if (!window.matchMedia('(pointer: coarse)').matches) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    const follower = document.createElement('div');
    follower.classList.add('custom-cursor-follower');

    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const render = () => {
      // Faster response for center dot
      cursorX += (mouseX - cursorX) * 0.5;
      cursorY += (mouseY - cursorY) * 0.5;

      // Slower response for follower
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;

      requestAnimationFrame(render);
    };
    render();

    // Hover states
    const interactiveElements = document.querySelectorAll('a, button, input, .card, .float-card');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        follower.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
        follower.classList.remove('hovering');
      });
    });

    // Hide native cursor for a cleaner look
    document.body.style.cursor = 'none';
    interactiveElements.forEach(el => {
      el.style.cursor = 'none';
    });
  }

  // 2. Inject Cyber Rings into hero visual if it exists
  const heroVisual = document.querySelector('.hero-visual-inner');
  if (heroVisual) {
    const ring1 = document.createElement('div');
    ring1.className = 'cyber-ring cyber-ring-1';
    const ring2 = document.createElement('div');
    ring2.className = 'cyber-ring cyber-ring-2';
    heroVisual.prepend(ring2);
    heroVisual.prepend(ring1);
  }

  // 3. Inject glowing Grid background across hero and dark sections
  const hero = document.querySelector('.hero');
  if (hero && !hero.querySelector('.bg-grid')) {
    const grid = document.createElement('div');
    grid.className = 'bg-grid';
    hero.prepend(grid);
  }

  document.querySelectorAll('.section--dark').forEach(sec => {
    if (!sec.querySelector('.bg-grid')) {
      const grid = document.createElement('div');
      grid.className = 'bg-grid';
      sec.prepend(grid);
    }
  });
}

/* ---- Navbar Scroll Effect ---- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ---- Scroll Reveal (Intersection Observer) ---- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // If parent has stagger class, children get delays from CSS
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ---- Animated Counters ---- */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.counter, 10);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = Math.round(eased * target);

    el.textContent = prefix + current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ---- Accordion ---- */
function initAccordions() {
  const headers = document.querySelectorAll('.accordion-header');
  if (!headers.length) return;

  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close all accordions in same parent
      item.parentElement.querySelectorAll('.accordion-item').forEach((i) => {
        i.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ---- Mobile Menu ---- */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ---- Particle Background ---- */
function initParticles() {
  const container = document.querySelector('.particles');
  if (!container) return;

  const count = 20;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (8 + Math.random() * 12) + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.width = (2 + Math.random() * 4) + 'px';
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}

/* ---- Earnings Calculator ---- */
function initCalculator() {
  const hoursSlider = document.getElementById('calc-hours');
  const rateSlider = document.getElementById('calc-rate');
  const daysSlider = document.getElementById('calc-days');

  if (!hoursSlider || !rateSlider || !daysSlider) return;

  const hoursValue = document.getElementById('calc-hours-val');
  const rateValue = document.getElementById('calc-rate-val');
  const daysValue = document.getElementById('calc-days-val');
  const monthlyResult = document.getElementById('monthly-earnings');
  const yearlyResult = document.getElementById('yearly-earnings');

  function calculate() {
    const hours = parseInt(hoursSlider.value);
    const rate = parseInt(rateSlider.value);
    const days = parseInt(daysSlider.value);

    if (hoursValue) hoursValue.textContent = hours;
    if (rateValue) rateValue.textContent = '₹' + rate;
    if (daysValue) daysValue.textContent = days;

    const monthly = hours * rate * days * 4;
    const yearly = monthly * 12;

    if (monthlyResult) monthlyResult.textContent = '₹' + monthly.toLocaleString();
    if (yearlyResult) yearlyResult.textContent = '₹' + yearly.toLocaleString();
  }

  hoursSlider.addEventListener('input', calculate);
  rateSlider.addEventListener('input', calculate);
  daysSlider.addEventListener('input', calculate);

  calculate();
}

/* ---- Smooth Scroll ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
