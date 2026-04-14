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
  initThreeJSEV();
});

/* ---- 3D Three.js EV Charging Scene ---- */
function initThreeJSEV() {
  const container = document.body;
  if (typeof THREE === 'undefined') return;

  // Create Scene
  const scene = new THREE.Scene();

  // Add soft fog to blend the horizon smoothly with the crisp light theme background
  scene.fog = new THREE.FogExp2(0xf5f5f7, 0.04);

  // Create Camera
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 200);
  camera.position.set(0, 4, 15);
  camera.lookAt(0, 0, 0);

  // Create Renderer with transparent background
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Fixed positioning to act as a sleek, professional ambient layer
  renderer.domElement.style.position = 'fixed';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.left = '0';
  renderer.domElement.style.width = '100vw';
  renderer.domElement.style.height = '100vh';
  renderer.domElement.style.zIndex = '-1'; // Sit far beneath UI for a modern aesthetic
  renderer.domElement.style.pointerEvents = 'none';

  container.appendChild(renderer.domElement);

  // Create an elegant "Peer-to-Peer Energy Network" grid
  // This brings a premium, Apple-like, high-tech flow of energy
  const geometry = new THREE.PlaneGeometry(100, 100, 60, 60);
  const material = new THREE.MeshBasicMaterial({
    color: 0x4ADE00,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });

  const gridTerrain = new THREE.Mesh(geometry, material);
  gridTerrain.rotation.x = -Math.PI / 2;
  gridTerrain.position.y = -3;
  scene.add(gridTerrain);

  // Abstract glowing data nodes flowing through the network
  const nodes = [];
  const nodeGeo = new THREE.SphereGeometry(0.15, 16, 16);
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00C853, transparent: true, opacity: 0.8 });

  for(let i=0; i < 20; i++) {
    const node = new THREE.Mesh(nodeGeo, nodeMat);
    node.position.set(
      (Math.random() - 0.5) * 60,
      -3,
      (Math.random() - 0.5) * 60
    );
    // Offset for organic, wave-riding mathematics
    node.userData = {
      offsetX: Math.random() * 100,
      offsetZ: Math.random() * 100,
      speed: 0.5 + Math.random() * 0.5
    };
    scene.add(node);
    nodes.push(node);
  }

  // Ultra-smooth Mouse Parallax tracking
  let mouseX = 0;
  let mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Handle Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();

    // 1. Gently animate the grid vertices to simulate an undulating "energy wave"
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
       const x = position.getX(i);
       const y = position.getY(i);

       // Clean, fluid sine-wave math
       const z = Math.sin(x * 0.1 + time * 0.5) * 1.5 +
                 Math.cos(y * 0.15 + time * 0.4) * 1.0;

       position.setZ(i, z);
    }
    position.needsUpdate = true;

    // 2. Animate energy nodes organically drifting along the wave
    nodes.forEach(node => {
      const data = node.userData;
      node.position.x += Math.sin(time * data.speed + data.offsetX) * 0.05;
      node.position.z += Math.cos(time * data.speed + data.offsetZ) * 0.05;

      // Calculate wave height at the node's position so it explicitly "rides" the terrain
      const waveY = Math.sin(node.position.x * 0.1 + time * 0.5) * 1.5 +
                    Math.cos(node.position.z * 0.15 + time * 0.4) * 1.0;
      node.position.y = -3 + waveY;
    });

    // 3. Cinematic and elegant camera parallax
    camera.position.x += (mouseX * 3 - camera.position.x) * 0.02;
    camera.position.y += (4 + mouseY * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, -1, 0);

    renderer.render(scene, camera);
  }

  animate();
}

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
