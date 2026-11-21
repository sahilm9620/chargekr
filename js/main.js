/* ==========================================================================
   CHARGEKR  Lenis + 3D WebGL & Spatial Perspective Engine (2026)
   Powered by Studio Freight Lenis (lerp: 0.085) + Three.js WebGL + CSS 3D
   1. Cached Section & Element Geometry (Zero DOM Layout Reads on Scroll)
   2. Hero 3D Unfolding Plane (rotateX + translateZ + clip-path)
   3. Three.js Interactive 3D Wallbox & P2P Grid Twin (Lenis Scroll-Scrubbed)
   4. Horizontal 3D Curved Spatial Gallery + Interactive Step Jump Pills
   5. 3D Sticky Stacking Cards (rotateX + translateZ Depth Recession)
   6. Interactive 3D Cursor Tilt & Specular Sheen on Bento & Spec Cards
   ========================================================================== */

const clamp = (val, min, max) => Math.min(max, Math.max(min, val));
const lerp = (start, end, factor) => start + (end - start) * factor;
const expoOut = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

document.addEventListener('DOMContentLoaded', () => {
  let lenis = null;
  try { lenis = initLenisEngine(); } catch (e) { console.warn('Lenis:', e); }
  try { initBrandIgnitionIntro(lenis); } catch (e) { console.warn('BrandIntro:', e); }
  try { initSplitTextReveals(); } catch (e) { console.warn('SplitText:', e); }
  try { initHeroNodeSwitcher(); } catch (e) { console.warn('HeroNode:', e); }
  try { initLenisScrollChoreography(lenis); } catch (e) { console.warn('ScrollChoreography:', e); }
  try { initThreeWallboxTwin(lenis); } catch (e) { console.warn('WallboxTwin:', e); }
  try { init3DCardTilt(); } catch (e) { console.warn('CardTilt:', e); }
  try { initVelocityMarquee(); } catch (e) { console.warn('Marquee:', e); }
  try { initSpeedComparator(lenis); } catch (e) { console.warn('SpeedComparator:', e); }
  try { initMagneticButtons(); } catch (e) { console.warn('MagneticButtons:', e); }
  try { initScrollReveal(); } catch (e) { console.warn('ScrollReveal:', e); }
  try { initCounters(); } catch (e) { console.warn('Counters:', e); }
  try { initAccordions(); } catch (e) { console.warn('Accordions:', e); }
  try { initMobileMenu(lenis); } catch (e) { console.warn('MobileMenu:', e); }
  try { initCalculator(); } catch (e) { console.warn('Calculator:', e); }
  try { initLenisAnchorScroll(lenis); } catch (e) { console.warn('AnchorScroll:', e); }
});

/* ---- 0. Signature ChargeKr Brand Ignition Curtain + Hero Host Node Switcher ---- */
function initBrandIgnitionIntro(lenis) {
  const introEl = document.getElementById('ck-brand-intro');
  if (!introEl) return;

  // Skip intro if user already viewed it in this tab session and navigated back from an inner page
  const navEntries = performance.getEntriesByType && performance.getEntriesByType('navigation');
  const isReload = navEntries && navEntries[0] && navEntries[0].type === 'reload';
  if (!isReload && sessionStorage.getItem('ck_intro_seen') === '1') {
    introEl.classList.add('is-done');
    return;
  }
  sessionStorage.setItem('ck_intro_seen', '1');

  const ringFill = document.getElementById('ck-intro-ring-fill');
  const meterFill = document.getElementById('ck-intro-meter-fill');
  const pctEl = document.getElementById('ck-intro-pct');
  const statusLbl = document.getElementById('ck-intro-status-lbl');
  const heroHeading = document.querySelector('#hero h1[data-split-reveal]');

  const circumference = 326.7;
  const duration = 680;
  const startTime = performance.now();

  if (lenis) lenis.stop();

  function stepIntro(now) {
    const t = clamp((now - startTime) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const pct = Math.round(eased * 100);

    if (ringFill) {
      ringFill.style.strokeDashoffset = (circumference * (1 - eased)).toFixed(1);
    }
    if (meterFill) {
      meterFill.style.transform = `scaleX(${eased.toFixed(3)})`;
    }
    if (pctEl) {
      pctEl.textContent = `${pct}%`;
    }
    if (statusLbl && pct >= 88) {
      statusLbl.textContent = '● GRID ONLINE • 100% TO HOST';
      statusLbl.style.color = '#32E800';
    }

    if (t < 1) {
      requestAnimationFrame(stepIntro);
    } else {
      // Re-trigger hero headline split-word + volt underline reveal right as shutters part
      if (heroHeading) {
        heroHeading.classList.remove('is-inview');
      }
      setTimeout(() => {
        introEl.classList.add('is-opening');
        if (lenis) lenis.start();
        if (heroHeading) {
          requestAnimationFrame(() => heroHeading.classList.add('is-inview'));
        }
        setTimeout(() => {
          introEl.classList.add('is-done');
        }, 900);
      }, 120);
    }
  }

  requestAnimationFrame(stepIntro);
}

function initHeroNodeSwitcher() {
  const pins = Array.from(document.querySelectorAll('#hero-node-switcher .hero-node-pin'));
  const locTxt = document.getElementById('hero-host-loc-txt');
  const specPill = document.getElementById('hero-host-spec-pill');
  const socEl = document.getElementById('hero-telemetry-soc');
  const kwhEl = document.getElementById('hero-telemetry-kwh');
  const barEl = document.getElementById('hero-telemetry-bar');
  const statusEl = document.getElementById('hero-telemetry-status');
  const heroBox = document.getElementById('hero-cinema-box');

  if (!pins.length) return;

  const nodes = [
    {
      loc: 'ILLUSTRATIVE SESSION • INDIRANAGAR, BENGALURU',
      spec: '7.4 KW HOME WALLBOX • ₹45/HR',
      soc: 38,
      kwh: '6.4',
      earn: 90,
      status: '● CHARGING NOW (ILLUSTRATIVE)'
    },
    {
      loc: 'ILLUSTRATIVE SESSION • BANDRA WEST, MUMBAI',
      spec: '11 KW TYPE-2 AC BAY • ₹60/HR',
      soc: 74,
      kwh: '16.5',
      earn: 180,
      status: '● CHARGING NOW (ILLUSTRATIVE)'
    },
    {
      loc: 'ILLUSTRATIVE SESSION • KOREGAON PARK, PUNE',
      spec: '3.3 KW 15A SMART PLUG • ₹30/HR',
      soc: 92,
      kwh: '5.2',
      earn: 60,
      status: '● COMPLETED SESSION (ILLUSTRATIVE)'
    }
  ];

  let activeIdx = 0;
  let displayedSoc = nodes[0].soc;
  let displayedEarn = nodes[0].earn;
  let animRaf = null;

  function selectNode(idx) {
    activeIdx = idx;
    const node = nodes[idx] || nodes[0];
    pins.forEach((p, i) => p.classList.toggle('active', i === idx));

    if (locTxt) locTxt.textContent = node.loc;
    if (specPill) specPill.textContent = node.spec;
    if (statusEl) statusEl.textContent = node.status;

    if (barEl && window.scrollY < 140) {
      barEl.style.transform = `scaleX(${(node.soc / 100).toFixed(3)})`;
    }

    if (animRaf) cancelAnimationFrame(animRaf);
    const startSoc = displayedSoc;
    const startEarn = displayedEarn;
    const startTime = performance.now();
    const duration = 360;

    function tick(now) {
      if (window.scrollY >= 140) return;
      const t = Math.min(1, (now - startTime) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      displayedSoc = Math.round(startSoc + (node.soc - startSoc) * ease);
      displayedEarn = Math.round(startEarn + (node.earn - startEarn) * ease);
      if (socEl) socEl.textContent = `${displayedSoc}% Charged`;
      if (kwhEl) kwhEl.textContent = `+${node.kwh} kWh · Host Earns ₹${displayedEarn}`;
      if (t < 1) {
        animRaf = requestAnimationFrame(tick);
      }
    }
    animRaf = requestAnimationFrame(tick);
  }

  pins.forEach((pin, idx) => {
    pin.addEventListener('click', () => {
      selectNode(idx);
      resetAutoTimer();
    });
  });

  let autoTimer = null;
  function resetAutoTimer() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      if (window.scrollY < 120) {
        selectNode((activeIdx + 1) % nodes.length);
      }
    }, 3800);
  }
  resetAutoTimer();

  // Subtle 3D mouse-move parallax on Hero Overlay elements
  if (heroBox && window.innerWidth > 1024) {
    const overlay = heroBox.querySelector('.hero-cinema-overlay');
    heroBox.addEventListener('mousemove', (e) => {
      if (!overlay) return;
      const rect = heroBox.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      overlay.style.transform = `translate3d(${(nx * -10).toFixed(1)}px, ${(ny * -8).toFixed(1)}px, 0)`;
    });
    heroBox.addEventListener('mouseleave', () => {
      if (overlay) overlay.style.transform = '';
    });
  }
}

/* ---- 1. Core Lenis Smooth Inertia Engine ---- */
window.__lenisVelocity = 0;
window.__lenisDirection = 1;
window.__lenisProgress = 0;

function initLenisEngine() {
  if (typeof Lenis === 'undefined') return null;

  const lenis = new Lenis({
    lerp: 0.085,
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
    infinite: false
  });

  window.lenis = lenis;

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenis;
}

/* ---- 2. Lenis-Driven 3D Spatial Scroll Choreography ---- */
function initLenisScrollChoreography(lenis) {
  const rootStyle = document.documentElement.style;
  const navbar = document.querySelector('.navbar');
  const progressBar = document.getElementById('scroll-progress-bar');

  // Right-edge Lenis Chapter Rail
  const railButtons = Array.from(document.querySelectorAll('#lenis-index-rail .lenis-rail-btn'));

  // Hero Cinema 3D Elements
  const heroStage = document.getElementById('hero-cinema-stage') || document.querySelector('.hero-cinema-stage');
  const heroBox = document.getElementById('hero-cinema-box') || document.querySelector('.hero-cinema-box');
  const heroImg = heroBox ? heroBox.querySelector('img') : null;
  const socEl = document.getElementById('hero-telemetry-soc');
  const kwhEl = document.getElementById('hero-telemetry-kwh');
  const barEl = document.getElementById('hero-telemetry-bar');
  const statusEl = document.getElementById('hero-telemetry-status');

  // Inner-page Hero Banner Image Parallax
  const innerBanners = Array.from(document.querySelectorAll('.arch-hero-banner'));

  // Bento Parallax Cards
  const bentoCards = Array.from(document.querySelectorAll('[data-parallax-speed]'));

  // Horizontal Session Anatomy Elements (3D Curved Gallery)
  const hSection = document.getElementById('session-journey');
  const hRail = document.getElementById('h-scroll-rail');
  const hConduitFill = document.getElementById('h-conduit-fill');
  const hStepLabel = document.getElementById('h-active-step-label');
  const hStepCounter = document.getElementById('h-scroll-progress-txt');
  const hCards = hRail ? Array.from(hRail.querySelectorAll('.h-step-card')) : [];
  const hJumpPills = Array.from(document.querySelectorAll('#h-step-jump-pills .h-jump-pill'));
  const stepTitles = [
    'STEP 01 // RADAR DISCOVERY',
    'STEP 02 // ZERO-QUEUE SLOT LOCK',
    'STEP 03 // LIVE WATTAGE TELEMETRY',
    'STEP 04 // INSTANT UPI SETTLEMENT'
  ];

  // 3D Sticky Stacking Cards
  const stackCards = Array.from(document.querySelectorAll('.stack-card'));

  // Cached Geometry Store (Updated only on resize/load  NEVER during scroll)
  let windowH = window.innerHeight;
  let windowW = window.innerWidth;
  let docLimit = Math.max(1, document.documentElement.scrollHeight - windowH);

  let railTargets = [];
  let heroBounds = null;
  let innerBannerBounds = [];
  let bentoBounds = [];
  let hBounds = null;
  let stackBounds = [];

  function getPageTop(el) {
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY;
  }

  function cacheGeometry() {
    windowH = window.innerHeight;
    windowW = window.innerWidth;
    docLimit = Math.max(1, document.documentElement.scrollHeight - windowH);

    railTargets = railButtons
      .map((btn) => {
        const sel = btn.getAttribute('data-lenis-target');
        const targetEl = sel ? document.querySelector(sel) : null;
        return targetEl ? { btn, el: targetEl, top: getPageTop(targetEl) } : null;
      })
      .filter(Boolean);

    if (heroStage) {
      heroBounds = {
        top: getPageTop(heroStage),
        height: heroStage.offsetHeight
      };
    }

    innerBannerBounds = innerBanners.map((banner) => ({
      el: banner,
      img: banner.querySelector('img'),
      top: getPageTop(banner),
      height: banner.offsetHeight
    }));

    bentoBounds = bentoCards.map((card) => {
      const prevTransform = card.style.transform;
      card.style.transform = 'none';
      const top = getPageTop(card);
      const height = card.offsetHeight;
      card.style.transform = prevTransform;
      return {
        el: card,
        speed: parseFloat(card.getAttribute('data-parallax-speed') || '0'),
        top,
        height
      };
    });

    if (hSection && hRail) {
      const viewportW = hRail.parentElement ? hRail.parentElement.clientWidth : windowW;
      hBounds = {
        top: getPageTop(hSection),
        height: hSection.offsetHeight,
        scrollable: Math.max(1, hSection.offsetHeight - windowH),
        maxShift: Math.max(0, hRail.scrollWidth - viewportW + 80),
        cardWidth: hCards[0] ? hCards[0].offsetWidth + 28 : 480
      };
    }

    stackBounds = stackCards.map((card) => {
      const prevTransform = card.style.transform;
      card.style.transform = 'none';
      const top = getPageTop(card);
      const height = card.offsetHeight;
      card.style.transform = prevTransform;
      return {
        el: card,
        img: card.querySelector('.stack-card-media img'),
        top,
        height
      };
    });
  }

  cacheGeometry();
  window.addEventListener('resize', cacheGeometry);
  window.addEventListener('load', cacheGeometry);

  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => cacheGeometry());
    ro.observe(document.body);
  }

  let lastRenderedSoc = -1;
  let lastActiveHStep = -1;
  let lastActiveRailIdx = -1;
  let isNavScrolled = false;
  let isNavHidden = false;

  // Render function bound directly to Lenis sub-pixel scroll state
  function renderScrollState(scroll, limit, velocity, direction, progress) {
    window.__lenisVelocity = velocity;
    window.__lenisDirection = direction;
    window.__lenisProgress = progress;

    // Expose live Lenis CSS variables
    rootStyle.setProperty('--lenis-velocity', velocity.toFixed(3));
    rootStyle.setProperty('--lenis-progress', progress.toFixed(4));

    // 1. Direction-Aware Smart Floating Navbar
    const shouldScrollNav = scroll > 32;
    if (shouldScrollNav !== isNavScrolled) {
      isNavScrolled = shouldScrollNav;
      if (navbar) navbar.classList.toggle('scrolled', isNavScrolled);
    }

    const shouldHideNav = scroll > 320 && direction === 1 && velocity > 1.35;
    if (shouldHideNav && !isNavHidden) {
      isNavHidden = true;
      if (navbar) navbar.classList.add('nav-hidden');
    } else if ((direction === -1 || scroll <= 240) && isNavHidden) {
      isNavHidden = false;
      if (navbar) navbar.classList.remove('nav-hidden');
    }

    // 2. Top Progress Bar (Sub-pixel GPU scaleX)
    if (progressBar) {
      progressBar.style.transform = `scaleX(${clamp(progress, 0, 1).toFixed(4)})`;
    }

    // 3. Right-Edge Lenis Chapter Index Rail Active Tracking
    if (railTargets.length) {
      const triggerY = scroll + windowH * 0.42;
      let activeRailIdx = 0;
      for (let i = 0; i < railTargets.length; i++) {
        if (triggerY >= railTargets[i].top) {
          activeRailIdx = i;
        }
      }
      if (activeRailIdx !== lastActiveRailIdx) {
        lastActiveRailIdx = activeRailIdx;
        railTargets.forEach((item, idx) => {
          item.btn.classList.toggle('active', idx === activeRailIdx);
        });
      }
    }

    // 4. Hero Cinema 3D Unfolding Plane + Clip-Path Expansion + Live Telemetry Scrub
    if (heroBounds && heroBox) {
      const stageTopInView = heroBounds.top - scroll;
      const start = windowH * 0.82;
      const end = windowH * 0.05;
      const p = clamp((start - stageTopInView) / (start - end), 0, 1);

      if (windowW > 1024) {
        const insetX = (5.5 * (1 - p)).toFixed(3);
        const radius = (28 * (1 - p)).toFixed(2);
        const rotX = ((1 - p) * 8.5).toFixed(2);
        const tz = ((1 - p) * -42).toFixed(1);
        heroBox.style.clipPath = `inset(0% ${insetX}% 0% ${insetX}% round ${radius}px)`;
        heroBox.style.transform = `rotateX(${rotX}deg) translate3d(0, 0, ${tz}px)`;
      }

      if (heroImg) {
        const imgScale = (1.12 - p * 0.12).toFixed(4);
        const imgY = ((scroll - heroBounds.top) * 0.08).toFixed(2);
        heroImg.style.transform = `translate3d(0, ${imgY}px, 0) scale3d(${imgScale}, ${imgScale}, 1)`;
      }

      if (scroll > 80) {
        const soc = Math.round(24 + p * 72);
        if (soc !== lastRenderedSoc) {
          lastRenderedSoc = soc;
          const kwh = (4.8 + p * 24.6).toFixed(1);
          const hostEarn = Math.round(parseFloat(kwh) * 11.9);
          if (socEl) socEl.textContent = `${soc}% Charged`;
          if (kwhEl) kwhEl.textContent = `+${kwh} kWh · Host Earns ₹${hostEarn}`;
          if (statusEl) {
            statusEl.textContent = p > 0.92 ? '● PAID VIA UPI (100% TO HOST)' : '● CHARGING NOW';
          }
        }
        if (barEl) {
          barEl.style.transform = `scaleX(${(0.24 + p * 0.72).toFixed(4)})`;
        }
      }
    }

    // 5. Inner-Page Hero Banner Smooth 3D Image Parallax
    if (innerBannerBounds.length) {
      for (let i = 0; i < innerBannerBounds.length; i++) {
        const b = innerBannerBounds[i];
        if (!b.img) continue;
        const relY = scroll + windowH * 0.5 - (b.top + b.height * 0.5);
        if (Math.abs(relY) < windowH * 1.2) {
          const shiftY = clamp(relY * 0.09, -40, 40).toFixed(2);
          b.img.style.transform = `translate3d(0, ${shiftY}px, 0) scale3d(1.1, 1.1, 1)`;
        }
      }
    }

    // 6. Architectural Bento Cards 3D Sub-Pixel Parallax + Velocity Pitch
    if (windowW > 1024 && bentoBounds.length) {
      const velOffset = clamp(velocity * -0.35, -8, 8);
      const velRotX = clamp(velocity * 0.32, -3.5, 3.5);
      for (let i = 0; i < bentoBounds.length; i++) {
        const item = bentoBounds[i];
        if (item.el.dataset.isHovered === 'true') continue;
        const cardTopInView = item.top - scroll;
        if (cardTopInView < windowH * 1.2 && cardTopInView + item.height > -windowH * 0.2) {
          const centerNorm = (cardTopInView + item.height * 0.5 - windowH * 0.5) / windowH;
          const ty = clamp(centerNorm * item.speed + velOffset * 0.3, -28, 28).toFixed(2);
          item.el.style.transform = `translate3d(0, ${ty}px, 0) rotateX(${velRotX.toFixed(2)}deg)`;
        }
      }
    }

    // 7. Horizontal Scroll-Jacked 4-Step Session Journey with 3D Cylindrical Card Depth
    if (hBounds && hRail && hCards.length) {
      if (windowW > 1024) {
        const scrolledIntoSection = scroll - hBounds.top;
        const p = clamp(scrolledIntoSection / hBounds.scrollable, 0, 1);
        const shiftX = -p * hBounds.maxShift;

        hRail.style.transform = `translate3d(${shiftX.toFixed(2)}px, 0, 0)`;

        if (hConduitFill) {
          hConduitFill.style.transform = `scaleX(${(0.25 + p * 0.75).toFixed(4)})`;
        }

        const activeFloat = p * (hCards.length - 1);
        const activeIdx = Math.min(hCards.length - 1, Math.round(activeFloat));

        // Apply 3D spatial rotation to each card based on its distance from the active slot
        hCards.forEach((card, idx) => {
          const dist = idx - activeFloat;
          const rotY = clamp(dist * -6.5, -14, 14).toFixed(2);
          const tz = clamp(-Math.abs(dist) * 32, -70, 0).toFixed(1);
          const rotZ = clamp(velocity * -0.06, -1.2, 1.2).toFixed(2);
          card.style.transform = `translate3d(0, 0, ${tz}px) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
        });

        if (activeIdx !== lastActiveHStep) {
          lastActiveHStep = activeIdx;
          if (hStepLabel) hStepLabel.textContent = stepTitles[activeIdx] || stepTitles[0];
          if (hStepCounter) hStepCounter.textContent = `0${activeIdx + 1} / 0${hCards.length}`;
          hCards.forEach((c, idx) => c.classList.toggle('is-active-step', idx === activeIdx));
          hJumpPills.forEach((pill, idx) => pill.classList.toggle('active', idx === activeIdx));
        }
      } else {
        hRail.style.transform = 'none';
        hCards.forEach((c) => (c.style.transform = 'none'));
      }
    }

    // 8. 3D Sticky Stacking Cards (rotateX + translateZ Depth Recession)
    if (stackBounds.length) {
      for (let i = 0; i < stackBounds.length; i++) {
        const current = stackBounds[i];
        const cardTopInView = current.top - scroll;

        if (current.img && cardTopInView < windowH && cardTopInView + current.height > 0) {
          const enterP = clamp((windowH - cardTopInView) / (windowH + current.height), 0, 1);
          const imgY = ((enterP - 0.5) * -36).toFixed(2);
          current.img.style.transform = `translate3d(0, ${imgY}px, 0) scale3d(1.08, 1.08, 1)`;
        }

        if (windowW <= 1024) {
          current.el.style.transform = 'none';
          continue;
        }

        const next = stackBounds[i + 1];
        if (!next) continue;

        const nextTopInView = next.top - scroll;
        const overlapP = clamp((windowH - nextTopInView) / (windowH - 116), 0, 1);
        const scale = (1 - overlapP * 0.055).toFixed(4);
        const ty = (-overlapP * 20).toFixed(2);
        const tz = (-overlapP * 85).toFixed(1);
        const rotX = (-overlapP * 6.5).toFixed(2);

        current.el.style.transform = `translate3d(0, ${ty}px, ${tz}px) rotateX(${rotX}deg) scale3d(${scale}, ${scale}, 1)`;
      }
    }
  }

  // Bind directly to Lenis scroll events for 1:1 sub-pixel accuracy
  if (lenis) {
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      renderScrollState(scroll, limit, velocity, direction, progress);
    });
    renderScrollState(window.scrollY, docLimit, 0, 1, window.scrollY / docLimit);
  } else {
    window.addEventListener(
      'scroll',
      () => {
        const s = window.scrollY;
        renderScrollState(s, docLimit, 0, 1, s / docLimit);
      },
      { passive: true }
    );
    renderScrollState(window.scrollY, docLimit, 0, 1, window.scrollY / docLimit);
  }

  // Right-Edge Lenis Chapter Rail Clicks
  railButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const sel = btn.getAttribute('data-lenis-target');
      const targetEl = sel ? document.querySelector(sel) : null;
      if (!targetEl) return;
      if (lenis) {
        lenis.scrollTo(targetEl, { offset: -40, duration: 1.35, easing: expoOut });
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Helper to scroll to a specific horizontal step index using Lenis
  function scrollToHorizontalStep(idx) {
    if (window.innerWidth <= 1024 || !hBounds || !hCards.length) return;
    const targetP = idx / Math.max(1, hCards.length - 1);
    const targetScroll = hBounds.top + targetP * hBounds.scrollable;
    if (lenis) {
      lenis.scrollTo(targetScroll, { duration: 1.15, easing: expoOut });
    } else {
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  }

  hJumpPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const stepIdx = parseInt(pill.getAttribute('data-jump-step') || '0', 10);
      scrollToHorizontalStep(stepIdx);
    });
  });

  hCards.forEach((card, idx) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => scrollToHorizontalStep(idx));
  });
}

/* ---- 3. How ChargeKr Works  Residential Parking Bay & Charger Connection ---- */
function initThreeWallboxTwin(lenis) {
  const section = document.querySelector('.lenis-3d-section');
  const container = document.getElementById('lenis-3d-canvas-wrap');
  if (!section || !container || typeof THREE === 'undefined') return;

  const stagePills = Array.from(document.querySelectorAll('#lenis-3d-stage-pills .lenis-3d-pill'));
  const stageIdxEl = document.getElementById('three-stage-idx');
  const stageTitleEl = document.getElementById('three-stage-title');
  const stageDescEl = document.getElementById('three-stage-desc');
  const specLeftEl = document.getElementById('three-spec-left');
  const specRightEl = document.getElementById('three-spec-right');

  const row1Lbl = document.getElementById('ck-row-1-lbl');
  const row1Val = document.getElementById('ck-row-1-val');
  const row2Lbl = document.getElementById('ck-row-2-lbl');
  const row2Val = document.getElementById('ck-row-2-val');
  const row3Lbl = document.getElementById('ck-row-3-lbl');
  const row3Val = document.getElementById('ck-row-3-val');

  const stageContent = [
    {
      idx: 'STEP 01 OF 03 • DISCOVER & BOOK NEARBY',
      title: 'Reserve a verified home charger near your destination',
      desc: 'Open ChargeKr to see available 15A, Type-2, and Fast chargers in nearby apartments, villas, and offices. Lock your time slot in advance and receive verified host arrival instructions and designated bay details.',
      rows: [
        ['Host Location', 'Indiranagar Villa #14 (Type-2 · 7.4 kW)', false],
        ['Reserved Slot & Entry', '2:00 PM – 5:00 PM • Slot Confirmed', true],
        ['Driver Verification', 'Verified EV Profile & Connector Match', false]
      ]
    },
    {
      idx: 'STEP 02 OF 03 • ARRIVE & PLUG IN',
      title: 'Pull into the host’s parking bay and plug in',
      desc: 'Zero waiting in commercial queues. Scan the QR code on the host’s charger and plug the connector into your EV. Both you and the host can track live charging progress from your phones.',
      rows: [
        ['Arrival Wait Time', '0 Minutes (Pre-Booked Bay)', false],
        ['Charger Connection', 'QR Scanned • Type-2 Connector Locked', true],
        ['Power Delivery', '7.4 kW Home AC (+52 km Range / Hr)', false]
      ]
    },
    {
      idx: 'STEP 03 OF 03 • CHARGE & AUTO-UPI PAYOUT',
      title: 'Unplug and drive away instant 100% payout to host',
      desc: 'No cash or manual meter reading. The moment your car finishes charging, ChargeKr settles the bill automatically via UPI and transfers 100% of the earnings directly to the host with zero commission.',
      rows: [
        ['Energy Delivered', '+22.0 kWh Added (20% → 85% Battery)', false],
        ['Driver UPI Payment', '₹180.00 Auto-Paid (3 hrs @ ₹60/hr)', false],
        ['Host Earnings (100% · ₹0 Fee)', '+ ₹180.00 Credited to Host Bank', true]
      ]
    }
  ];

  // Safely check WebGL availability
  let isWebglSupported = false;
  try {
    const testCanvas = document.createElement('canvas');
    isWebglSupported = !!(window.WebGLRenderingContext && (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')));
  } catch (e) {
    isWebglSupported = false;
  }

  const w = container.clientWidth || 640;
  const h = container.clientHeight || 460;
  const aspect = w / h;

  let renderer = null;
  if (isWebglSupported) {
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'default' });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.warn('Three.js WebGLRenderer creation failed, using 2D car twin:', err);
      renderer = null;
    }
  }

  if (!renderer) {
    initFallbackCarAnimation(container, section, lenis, stagePills, stageContent);
    return;
  }

  // Scene & Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, aspect, 0.1, 100);
  camera.position.set(0, 1.85, 6.4);
  camera.lookAt(0, 0.15, 0);

  // Studio Architectural Daylight Lighting
  const ambientLight = new THREE.AmbientLight(0xfffdf8, 0.92);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.65);
  keyLight.position.set(5, 9, 6);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xdce2ec, 0.85);
  fillLight.position.set(-6, 4, -4);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xffffff, 0.65);
  rimLight.position.set(0, 5, -7);
  scene.add(rimLight);

  const portGlowLight = new THREE.PointLight(0x32e800, 0, 4.5);
  scene.add(portGlowLight);

  // Master Stage Group (Centered in Card)
  const stageGroup = new THREE.Group();
  stageGroup.position.set(-0.08, 0.12, -0.2);
  stageGroup.rotation.y = -0.38;
  scene.add(stageGroup);

  // High-Contrast Architectural Materials (Pearl Glacier White EV on Slate Asphalt Bay)
  const carBodyMat = new THREE.MeshStandardMaterial({
    color: 0xf4f5f7,
    roughness: 0.18,
    metalness: 0.35
  });
  const cabinGlassMat = new THREE.MeshStandardMaterial({
    color: 0x0d1016,
    roughness: 0.06,
    metalness: 0.94
  });
  const darkTrimMat = new THREE.MeshStandardMaterial({
    color: 0x161920,
    roughness: 0.35,
    metalness: 0.55
  });
  const pillarConcreteMat = new THREE.MeshStandardMaterial({
    color: 0xd8d3c8,
    roughness: 0.68,
    metalness: 0.08
  });
  const baySlabMat = new THREE.MeshStandardMaterial({
    color: 0x262930,
    roughness: 0.82,
    metalness: 0.12
  });
  const bayCurbBaseMat = new THREE.MeshStandardMaterial({
    color: 0xd5d0c5,
    roughness: 0.78,
    metalness: 0.06
  });
  const bayLineMat = new THREE.MeshBasicMaterial({
    color: 0xffffff
  });
  const tireMat = new THREE.MeshStandardMaterial({
    color: 0x111317,
    roughness: 0.72,
    metalness: 0.15
  });
  const alloyMat = new THREE.MeshStandardMaterial({
    color: 0xd0d5de,
    roughness: 0.18,
    metalness: 0.88
  });
  const voltGlowMat = new THREE.MeshBasicMaterial({ color: 0x32e800 });
  const whiteLedMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const tailLedMat = new THREE.MeshBasicMaterial({ color: 0xd91e2e });

  // =========================================================================
  // 0. RESIDENTIAL ARCHITECTURAL PARKING BAY SLAB & RESERVED STRIPING
  // =========================================================================
  const bayGroup = new THREE.Group();
  bayGroup.position.y = -0.5;
  stageGroup.add(bayGroup);

  // Outer Stone Apron
  const apronMesh = new THREE.Mesh(new THREE.BoxGeometry(5.5, 0.06, 3.35), bayCurbBaseMat);
  apronMesh.position.set(0.0, -0.04, 0.16);
  bayGroup.add(apronMesh);

  // Dark Slate Asphalt Parking Pad
  const slabMesh = new THREE.Mesh(new THREE.BoxGeometry(5.05, 0.07, 2.85), baySlabMat);
  slabMesh.position.set(0.0, -0.015, 0.14);
  bayGroup.add(slabMesh);

  // Crisp Parking Bay Striping
  const frontStripe = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.012, 2.3), bayLineMat);
  frontStripe.position.set(-2.22, 0.022, 0.06);
  bayGroup.add(frontStripe);

  const sideStripeLeft = new THREE.Mesh(new THREE.BoxGeometry(4.35, 0.012, 0.06), bayLineMat);
  sideStripeLeft.position.set(-0.08, 0.022, 1.21);
  bayGroup.add(sideStripeLeft);

  const sideStripeRight = new THREE.Mesh(new THREE.BoxGeometry(4.35, 0.012, 0.06), bayLineMat);
  sideStripeRight.position.set(-0.08, 0.022, -1.09);
  bayGroup.add(sideStripeRight);

  // Wheel Stop Curb Block with Volt Accent Stripe
  const curbMesh = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, 1.46), darkTrimMat);
  curbMesh.position.set(-1.96, 0.045, 0.0);
  bayGroup.add(curbMesh);

  const curbVoltStripe = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.03, 0.88), voltGlowMat);
  curbVoltStripe.position.set(-1.96, 0.06, 0.0);
  bayGroup.add(curbVoltStripe);

  // Under-Car Charging Glow Plane (Illuminates during Step 3)
  const underGlowMat = new THREE.MeshBasicMaterial({
    color: 0x32e800,
    transparent: true,
    opacity: 0.0
  });
  const underGlowMesh = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.35), underGlowMat);
  underGlowMesh.rotation.x = -Math.PI / 2;
  underGlowMesh.position.set(0.14, 0.024, 0);
  bayGroup.add(underGlowMesh);

  // =========================================================================
  // 1. SCULPTED 3D ELECTRIC CROSSOVER / FASTBACK VEHICLE (Drives Into Bay)
  // =========================================================================
  const evCarGroup = new THREE.Group();
  stageGroup.add(evCarGroup);

  const carChassisGroup = new THREE.Group();
  evCarGroup.add(carChassisGroup);

  const carWidth = 1.66;

  // Lower Sculpted Body Profile
  const bodyShape = new THREE.Shape();
  bodyShape.moveTo(-2.12, -0.14);
  bodyShape.lineTo(-2.08, 0.15);
  bodyShape.quadraticCurveTo(-1.92, 0.31, -1.22, 0.36); // Sculpted hood
  bodyShape.lineTo(-0.34, 0.78); // Raked windshield
  bodyShape.quadraticCurveTo(0.45, 0.84, 1.28, 0.66); // Fastback roofline
  bodyShape.lineTo(1.96, 0.4); // Rear shoulder
  bodyShape.lineTo(2.06, 0.06); // Kammback tail
  bodyShape.lineTo(1.94, -0.14);
  bodyShape.closePath();

  const carBodyGeo = new THREE.ExtrudeGeometry(bodyShape, {
    depth: carWidth,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 1,
    bevelSize: 0.065,
    bevelThickness: 0.085
  });
  carBodyGeo.center();
  const carBodyMesh = new THREE.Mesh(carBodyGeo, carBodyMat);
  carBodyMesh.position.y = 0.28;
  carChassisGroup.add(carBodyMesh);

  // Lower Aero Rocker Skirt & Diffuser Trim
  const rockerGeo = new THREE.BoxGeometry(3.96, 0.11, carWidth + 0.14);
  const rockerMesh = new THREE.Mesh(rockerGeo, darkTrimMat);
  rockerMesh.position.set(-0.02, -0.06, 0);
  carChassisGroup.add(rockerMesh);

  // Contrasting Obsidian Panoramic Glass Canopy
  const canopyShape = new THREE.Shape();
  canopyShape.moveTo(-1.16, 0.37);
  canopyShape.lineTo(-0.31, 0.79);
  canopyShape.quadraticCurveTo(0.45, 0.85, 1.24, 0.67);
  canopyShape.lineTo(1.72, 0.44);
  canopyShape.lineTo(-1.16, 0.37);

  const canopyGeo = new THREE.ExtrudeGeometry(canopyShape, {
    depth: carWidth * 0.85,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.03,
    bevelThickness: 0.04
  });
  canopyGeo.center();
  const canopyMesh = new THREE.Mesh(canopyGeo, cabinGlassMat);
  canopyMesh.position.set(0.18, 0.58, 0);
  carChassisGroup.add(canopyMesh);

  // Aerodynamic Side Mirrors (Left & Right)
  [-1, 1].forEach((side) => {
    const mirrorGroup = new THREE.Group();
    mirrorGroup.position.set(-0.58, 0.42, side * (carWidth * 0.5 + 0.12));
    const stalkMesh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.12), darkTrimMat);
    const capMesh = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.07, 0.1), carBodyMat);
    capMesh.position.z = side * 0.04;
    mirrorGroup.add(stalkMesh, capMesh);
    carChassisGroup.add(mirrorGroup);
  });

  // Front Matrix LED Lightbar + Lower Splitter
  const frontLightMesh = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.048, carWidth * 0.94), whiteLedMat);
  frontLightMesh.position.set(-2.1, 0.16, 0);
  carChassisGroup.add(frontLightMesh);

  // Rear Full-Width Crimson LED Tailbar (Flares on braking)
  const rearLightMesh = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.055, carWidth * 0.95), tailLedMat);
  rearLightMesh.position.set(2.04, 0.3, 0);
  carChassisGroup.add(rearLightMesh);

  // 4 Sculpted Multi-Spoke Aero Wheels (Rotate as car drives into bay)
  const wheelSpinGroups = [];
  const wheelPositions = [
    [-1.32, -0.14, 0.88],
    [1.32, -0.14, 0.88],
    [-1.32, -0.14, -0.88],
    [1.32, -0.14, -0.88]
  ];

  wheelPositions.forEach(([wx, wy, wz]) => {
    const wheelHolder = new THREE.Group();
    wheelHolder.position.set(wx, wy, wz);

    // Wheel Arch Flare Trim
    const archGeo = new THREE.TorusGeometry(0.39, 0.035, 10, 24, Math.PI);
    const archMesh = new THREE.Mesh(archGeo, darkTrimMat);
    archMesh.position.z = wz > 0 ? 0.04 : -0.04;
    wheelHolder.add(archMesh);

    // Rotating Tire + 5-Spoke Alloy Assembly
    const spinGroup = new THREE.Group();
    wheelHolder.add(spinGroup);
    wheelSpinGroups.push(spinGroup);

    const tireGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.24, 32);
    tireGeo.rotateX(Math.PI / 2);
    spinGroup.add(new THREE.Mesh(tireGeo, tireMat));

    const rimGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.25, 24);
    rimGeo.rotateX(Math.PI / 2);
    spinGroup.add(new THREE.Mesh(rimGeo, darkTrimMat));

    // 5 Distinct Alloy Spokes so wheel rotation is clearly visible
    const zSide = wz > 0 ? 0.13 : -0.13;
    for (let s = 0; s < 5; s++) {
      const angle = (s / 5) * Math.PI * 2;
      const spokeMesh = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.042, 0.02), alloyMat);
      spokeMesh.position.set(Math.cos(angle) * 0.1, Math.sin(angle) * 0.1, zSide);
      spokeMesh.rotation.z = angle;
      spinGroup.add(spokeMesh);
    }

    const outerRingMesh = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.02, 12, 28), alloyMat);
    outerRingMesh.position.z = zSide;
    spinGroup.add(outerRingMesh);

    evCarGroup.add(wheelHolder);
  });

  // Skateboard Floor Battery Pack (8 Cell Modules along lower rocker sill)
  const batteryCells = [];
  for (let i = 0; i < 8; i++) {
    const cellMat = new THREE.MeshBasicMaterial({
      color: i < 2 ? 0x32e800 : 0x343942
    });
    const cellGeo = new THREE.BoxGeometry(0.18, 0.075, 0.04);
    const cellMesh = new THREE.Mesh(cellGeo, cellMat);
    cellMesh.position.set(-0.76 + i * 0.215, -0.06, carWidth * 0.5 + 0.06);
    carChassisGroup.add(cellMesh);
    batteryCells.push(cellMesh);
  }

  // Front-Left Fender Charging Port Inlet + Hinged Flap Door
  const portCoords = new THREE.Vector3(-0.92, 0.24, carWidth * 0.5 + 0.06);
  const portGroup = new THREE.Group();
  portGroup.position.copy(portCoords);
  carChassisGroup.add(portGroup);

  const portRecessGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.06, 24);
  portRecessGeo.rotateX(Math.PI / 2);
  portGroup.add(new THREE.Mesh(portRecessGeo, darkTrimMat));

  const portHaloGeo = new THREE.TorusGeometry(0.135, 0.018, 16, 36);
  const portHaloMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const portHaloMesh = new THREE.Mesh(portHaloGeo, portHaloMat);
  portHaloMesh.position.z = 0.026;
  portGroup.add(portHaloMesh);

  const portFlapPivot = new THREE.Group();
  portFlapPivot.position.set(-0.14, 0, 0.032);
  const flapGeo = new THREE.BoxGeometry(0.26, 0.22, 0.025);
  flapGeo.translate(0.13, 0, 0);
  portFlapPivot.add(new THREE.Mesh(flapGeo, darkTrimMat));
  portGroup.add(portFlapPivot);

  // =========================================================================
  // 2. HOST HOME WALLBOX ON ARCHITECTURAL PILLAR (Flush on Bay Slab)
  // =========================================================================
  const wallboxGroup = new THREE.Group();
  wallboxGroup.position.set(-1.66, 0.22, 1.32);
  wallboxGroup.rotation.y = 0.36;
  stageGroup.add(wallboxGroup);

  const pillarMesh = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.44, 0.3), pillarConcreteMat);
  pillarMesh.position.y = 0;
  wallboxGroup.add(pillarMesh);

  const boxMesh = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.64, 0.18), cabinGlassMat);
  boxMesh.position.set(0, 0.18, 0.17);
  wallboxGroup.add(boxMesh);

  const wbHaloMesh = new THREE.Mesh(new THREE.TorusGeometry(0.135, 0.016, 16, 48), voltGlowMat);
  wbHaloMesh.position.set(0, 0.25, 0.27);
  wallboxGroup.add(wbHaloMesh);

  // =========================================================================
  // 3. ANIMATED TYPE-2 CHARGING CONNECTOR + CABLE + 10 ENERGY PULSES
  // =========================================================================
  const plugNozzleGroup = new THREE.Group();
  stageGroup.add(plugNozzleGroup);

  const barrelGeo = new THREE.CylinderGeometry(0.065, 0.065, 0.24, 20);
  barrelGeo.rotateX(Math.PI / 2);
  const barrelMesh = new THREE.Mesh(barrelGeo, alloyMat);
  barrelMesh.position.z = -0.1;
  plugNozzleGroup.add(barrelMesh);

  const handleMesh = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.14, 0.28), darkTrimMat);
  handleMesh.position.set(0, -0.03, 0.08);
  handleMesh.rotation.x = 0.22;
  plugNozzleGroup.add(handleMesh);

  const gunLedMesh = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.028, 0.18), voltGlowMat);
  gunLedMesh.position.set(0, 0.05, 0.06);
  plugNozzleGroup.add(gunLedMesh);

  const holsterPos = new THREE.Vector3(-1.42, 0.22, 1.4);
  const dockedPos = new THREE.Vector3(portCoords.x, portCoords.y, portCoords.z + 0.14);
  const cableOrigin = new THREE.Vector3(-1.6, -0.06, 1.44);

  const cableMat = new THREE.MeshStandardMaterial({
    color: 0x14161b,
    roughness: 0.38,
    metalness: 0.3
  });
  let cableMesh = null;
  let currentCurve = null;

  function buildCableCurve(nozzlePos, dockT) {
    const tailPos = new THREE.Vector3(nozzlePos.x, nozzlePos.y - 0.06, nozzlePos.z + 0.22);
    const mid1 = new THREE.Vector3(
      lerp(cableOrigin.x, tailPos.x, 0.33),
      -0.42 + dockT * 0.08,
      lerp(cableOrigin.z, tailPos.z, 0.35) + 0.15
    );
    const mid2 = new THREE.Vector3(
      lerp(cableOrigin.x, tailPos.x, 0.68),
      -0.32 + dockT * 0.12,
      lerp(cableOrigin.z, tailPos.z, 0.7) + 0.1
    );
    return new THREE.CatmullRomCurve3([cableOrigin, mid1, mid2, tailPos]);
  }

  function updateCableGeometry(nozzlePos, dockT) {
    currentCurve = buildCableCurve(nozzlePos, dockT);
    const newGeo = new THREE.TubeGeometry(currentCurve, 32, 0.032, 10, false);
    if (!cableMesh) {
      cableMesh = new THREE.Mesh(newGeo, cableMat);
      stageGroup.add(cableMesh);
    } else {
      cableMesh.geometry.dispose();
      cableMesh.geometry = newGeo;
    }
  }

  const pulseSpheres = [];
  const pulseGeo = new THREE.SphereGeometry(0.052, 12, 12);
  for (let i = 0; i < 10; i++) {
    const pMesh = new THREE.Mesh(pulseGeo, voltGlowMat);
    pMesh.visible = false;
    stageGroup.add(pMesh);
    pulseSpheres.push(pMesh);
  }

  // Responsive Bounds & Scroll Progress State
  let secTop = 0;
  let secScrollable = 1;
  let scrollProg = 0;
  let smoothProg = 0;
  let pointerX = 0;
  let pointerY = 0;
  let lastStageIdx = -1;
  let lastCableT = -1;
  let manualTargetProg = null;

  function cache3DBounds() {
    const w = Math.max(1, container.clientWidth);
    const h = Math.max(1, container.clientHeight);
    const aspect = w / h;

    secTop = section.getBoundingClientRect().top + window.scrollY;
    secScrollable = Math.max(1, section.offsetHeight - window.innerHeight);

    // Dynamically compute camera distance so the entire bay + car + wallbox
    // fits 100% inside the card and stays centered on every desktop & mobile screen
    const fovRad = (34 * Math.PI) / 180;
    const halfTan = Math.tan(fovRad / 2);
    const requiredDistForWidth = 5.95 / (2 * halfTan * aspect);
    const requiredDistForHeight = 2.6 / (2 * halfTan);
    const camDist = Math.max(6.2, requiredDistForWidth, requiredDistForHeight);

    camera.fov = 34;
    camera.position.set(0, camDist * 0.27, camDist);
    camera.lookAt(0, 0.14, 0);
    stageGroup.position.set(0.04, 0.04, 0);

    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  cache3DBounds();
  window.addEventListener('resize', cache3DBounds);
  window.addEventListener('load', cache3DBounds);
  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => cache3DBounds());
    ro.observe(container);
  }

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    pointerX = nx * 0.14;
    pointerY = ny * 0.07;
  });

  const infoCardEl = document.getElementById('lenis-3d-info-card');
  let stageSwitchTimer = null;

  function applyStageText(info) {
    if (stageIdxEl) stageIdxEl.textContent = info.idx;
    if (stageTitleEl) stageTitleEl.textContent = info.title;
    if (stageDescEl) stageDescEl.textContent = info.desc;

    if (info.rows) {
      if (row1Lbl) row1Lbl.textContent = info.rows[0][0];
      if (row1Val) {
        row1Val.textContent = info.rows[0][1];
        row1Val.style.color = info.rows[0][2] ? '#1b8a00' : 'var(--text-primary)';
      }
      if (row2Lbl) row2Lbl.textContent = info.rows[1][0];
      if (row2Val) {
        row2Val.textContent = info.rows[1][1];
        row2Val.style.color = info.rows[1][2] ? '#1b8a00' : 'var(--text-primary)';
      }
      if (row3Lbl) row3Lbl.textContent = info.rows[2][0];
      if (row3Val) {
        row3Val.textContent = info.rows[2][1];
        row3Val.style.color = info.rows[2][2] ? '#1b8a00' : 'var(--text-primary)';
      }
    }
  }

  function updateStageHUD(stageIdx) {
    if (stageIdx === lastStageIdx) return;
    const isInitial = lastStageIdx === -1;
    lastStageIdx = stageIdx;
    const info = stageContent[stageIdx] || stageContent[0];

    stagePills.forEach((pill, i) => pill.classList.toggle('active', i === stageIdx));

    if (isInitial || !infoCardEl) {
      applyStageText(info);
      return;
    }

    if (stageSwitchTimer) clearTimeout(stageSwitchTimer);
    infoCardEl.classList.add('stage-switching');
    stageSwitchTimer = setTimeout(() => {
      applyStageText(info);
      infoCardEl.classList.remove('stage-switching');
    }, 125);
  }

  function computeScrollProgress(scrollY) {
    if (window.innerWidth > 1024) {
      manualTargetProg = null;
      scrollProg = clamp((scrollY - secTop) / secScrollable, 0, 1);
    } else if (manualTargetProg === null) {
      // On mobile/tablet where section is not sticky, scrub smoothly as card passes through viewport
      const rect = container.getBoundingClientRect();
      const startY = window.innerHeight * 0.82;
      const endY = window.innerHeight * 0.12;
      scrollProg = clamp((startY - rect.top) / Math.max(1, startY - endY), 0, 1);
    }
  }

  if (lenis) {
    lenis.on('scroll', ({ scroll }) => computeScrollProgress(scroll));
  } else {
    window.addEventListener('scroll', () => computeScrollProgress(window.scrollY), { passive: true });
  }

  stagePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const idx = parseInt(pill.getAttribute('data-3d-stage') || '0', 10);
      const targetP = idx === 0 ? 0.18 : idx === 1 ? 0.56 : 0.94;
      if (window.innerWidth > 1024 && lenis) {
        lenis.scrollTo(secTop + targetP * secScrollable, { duration: 1.25, easing: expoOut });
      } else {
        manualTargetProg = targetP;
        scrollProg = targetP;
        updateStageHUD(idx);
      }
    });
  });

  let clockTime = 0;
  function animate3D() {
    smoothProg = lerp(smoothProg, scrollProg, 0.09);
    const vel = Math.abs(window.__lenisVelocity || 0);
    clockTime += 0.016 + vel * 0.005;

    const activeStage = smoothProg < 0.33 ? 0 : smoothProg < 0.62 ? 1 : 2;
    updateStageHUD(activeStage);

    // Update live progress bar inside the 3 step pills
    const p0 = clamp(smoothProg / 0.33, 0, 1);
    const p1 = clamp((smoothProg - 0.33) / 0.29, 0, 1);
    const p2 = clamp((smoothProg - 0.62) / 0.38, 0, 1);
    const pillProgs = [p0, p1, p2];
    stagePills.forEach((pill, i) => {
      pill.style.setProperty('--pill-progress', pillProgs[i].toFixed(3));
    });

    // 1. Subtle 3D Camera Angle Shift
    const targetRotY = -0.34 + smoothProg * 0.22 + pointerX;
    const targetRotX = 0.04 + pointerY;
    stageGroup.rotation.y = lerp(stageGroup.rotation.y, targetRotY, 0.1);
    stageGroup.rotation.x = lerp(stageGroup.rotation.x, targetRotX, 0.1);

    // 2. Step 1 (0.0 -> 0.26): EV Drives Smoothly Into Host Bay + Wheels Spin + Brake Flare
    const rawDrive = clamp(smoothProg / 0.24, 0, 1);
    const driveEase = 1 - Math.pow(1 - rawDrive, 3); // Cubic deceleration into parking bay
    evCarGroup.position.x = 0.14 + (1 - driveEase) * 0.62;

    // Spin 5-spoke aero wheels proportional to car movement
    const wheelAngle = (1 - driveEase) * -3.6;
    wheelSpinGroups.forEach((wg) => {
      wg.rotation.z = wheelAngle;
    });

    // Subtle suspension pitch as car brakes to a stop + micro-settle when plug docks
    const brakePitch = rawDrive > 0.05 && rawDrive < 0.98 ? Math.sin(rawDrive * Math.PI) * 0.022 : 0;
    const dockPulse = smoothProg > 0.54 && smoothProg < 0.64 ? Math.sin(((smoothProg - 0.54) / 0.1) * Math.PI) * -0.008 : 0;
    carChassisGroup.rotation.z = brakePitch + dockPulse;

    // Brake lightbar flares bright crimson while stopping in bay
    const isBraking = rawDrive > 0.35 && rawDrive < 0.97;
    tailLedMat.color.setHex(isBraking ? 0xff1e32 : 0xb81826);

    // Open charging port flap door once car nears parked position (0.16 -> 0.32)
    const flapOpenP = clamp((smoothProg - 0.15) / 0.16, 0, 1);
    portFlapPivot.rotation.y = -flapOpenP * 1.38;

    // 3. Step 2 (0.26 -> 0.58): Host Wallbox Nozzle Lifts, Arcs & Locks Into Vehicle Port
    const rawDock = clamp((smoothProg - 0.26) / 0.32, 0, 1);
    const dockT = rawDock * rawDock * (3 - 2 * rawDock);

    const arcLiftY = Math.sin(dockT * Math.PI) * 0.34;
    const arcOutZ = Math.sin(dockT * Math.PI) * 0.24;

    // Track car's current port position so nozzle always aligns with the car fender
    const currentDockedX = dockedPos.x + evCarGroup.position.x;
    plugNozzleGroup.position.set(
      lerp(holsterPos.x, currentDockedX, dockT),
      lerp(holsterPos.y, dockedPos.y, dockT) + arcLiftY,
      lerp(holsterPos.z, dockedPos.z, dockT) + arcOutZ
    );

    plugNozzleGroup.rotation.y = lerp(-0.55, 0, dockT);
    plugNozzleGroup.rotation.x = lerp(0.35, 0, dockT);

    if (Math.abs(dockT - lastCableT) > 0.001 || !cableMesh) {
      lastCableT = dockT;
      updateCableGeometry(plugNozzleGroup.position, dockT);
    }

    // 4. Step 3 (0.58 -> 1.0): Charging Active, Energy Pulses Flow & Battery Modules Fill
    const isPlugged = smoothProg >= 0.57;
    const chargeP = clamp((smoothProg - 0.57) / 0.41, 0, 1);

    if (isPlugged) {
      portHaloMat.color.setHex(0x32e800);
      portGlowLight.intensity = 1.6 + Math.sin(clockTime * 6) * 0.35;
      portGlowLight.position.set(-0.4, 0.2, 1.2);
      underGlowMat.opacity = 0.14 + Math.sin(clockTime * 4) * 0.05;
    } else {
      portHaloMat.color.setHex(0xffffff);
      portGlowLight.intensity = 0;
      underGlowMat.opacity = 0;
    }

    pulseSpheres.forEach((pMesh, idx) => {
      pMesh.visible = isPlugged;
      if (isPlugged && currentCurve) {
        const t = (clockTime * 0.48 + idx / pulseSpheres.length) % 1;
        const pt = currentCurve.getPointAt(t);
        pMesh.position.copy(pt);
        const s = 0.82 + Math.sin(t * Math.PI) * 0.48;
        pMesh.scale.setScalar(s);
      }
    });

    const litModules = 2 + Math.floor(chargeP * 6.5);
    batteryCells.forEach((cell, idx) => {
      cell.material.color.setHex(idx < litModules ? 0x32e800 : 0x343942);
    });

    const socVal = Math.round(20 + chargeP * 65);
    if (specLeftEl) {
      specLeftEl.innerHTML = isPlugged
        ? 'CHARGER: <strong style="color:#1b8a00;">CONNECTED • 7.4 KW</strong>'
        : dockT > 0.05
          ? 'CHARGER: <strong>CONNECTING TO EV...</strong>'
          : rawDrive < 0.95
            ? 'VEHICLE: <strong>ARRIVING AT HOST BAY...</strong>'
            : 'CHARGER: <strong>READY IN HOST BAY</strong>';
    }
    if (specRightEl) {
      const hostCut = Math.round(chargeP * 180);
      specRightEl.textContent = isPlugged
        ? `● BATTERY: ${socVal}% · HOST EARNS ₹${hostCut} (100%)`
        : '● VEHICLE BATTERY: 20%';
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate3D);
  }

  requestAnimationFrame(animate3D);
}

/* ---- 3b. Interactive 2D Fallback Twin (Car Drives In & Plugs Into Wallbox on Scroll) ---- */
function initFallbackCarAnimation(container, section, lenis, stagePills, stageContent) {
  if (!container || !section) return;

  container.innerHTML = `
    <div class="ck-car-fallback-stage" style="width:100%; height:100%; position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center;">
      <svg viewBox="0 0 860 480" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="display:block; overflow:visible;">
        <defs>
          <linearGradient id="bayGrad2D" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2D3039"/>
            <stop offset="100%" stop-color="#1A1C22"/>
          </linearGradient>
          <linearGradient id="carBodyGrad2D" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="40%" stop-color="#F2F4F7"/>
            <stop offset="100%" stop-color="#DDE2E8"/>
          </linearGradient>
          <linearGradient id="glassGrad2D" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#1B202A"/>
            <stop offset="100%" stop-color="#090B10"/>
          </linearGradient>
          <filter id="voltGlow2D" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <!-- 0. Parking Bay Ground & Lines -->
        <rect x="70" y="310" width="720" height="130" rx="14" fill="url(#bayGrad2D)"/>
        <line x1="110" y1="322" x2="760" y2="322" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="14 10" opacity="0.45"/>
        <line x1="110" y1="428" x2="760" y2="428" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="14 10" opacity="0.45"/>
        <line x1="110" y1="322" x2="110" y2="428" stroke="#FFFFFF" stroke-width="4" opacity="0.85"/>
        <!-- Wheel Stop Curb -->
        <rect x="134" y="358" width="16" height="52" rx="4" fill="#14171E"/>
        <rect x="136" y="366" width="12" height="36" rx="2" fill="#32E800" opacity="0.9"/>

        <!-- Under-Car Glow (Illuminates on Step 3) -->
        <ellipse id="fb-underglow" cx="490" cy="392" rx="180" ry="22" fill="#32E800" opacity="0" filter="url(#voltGlow2D)"/>

        <!-- 1. Wallbox Pillar & Unit -->
        <g id="fb-wallbox-group">
          <rect x="150" y="160" width="34" height="198" rx="6" fill="#D8D3C8" stroke="#B8B2A6" stroke-width="1.5"/>
          <rect x="138" y="180" width="58" height="84" rx="12" fill="#0D1016" stroke="#2D323E" stroke-width="2"/>
          <circle id="fb-wb-ring" cx="167" cy="222" r="16" fill="none" stroke="#32E800" stroke-width="3" filter="url(#voltGlow2D)"/>
          <text x="167" y="225" font-family="-apple-system, sans-serif" font-size="8" font-weight="900" fill="#32E800" text-anchor="middle">CK</text>
          <circle cx="167" cy="254" r="5" fill="#20242D"/>
        </g>

        <!-- 2. Electric Car (Moves on X as car drives in) -->
        <g id="fb-car-group" transform="translate(180, 0)">
          <!-- Car Shadow -->
          <ellipse cx="490" cy="386" rx="180" ry="14" fill="#000000" opacity="0.45"/>

          <!-- Body Chassis -->
          <path d="M 330 355 L 320 325 Q 335 295 410 285 L 485 242 Q 545 236 615 252 L 670 282 Q 682 315 672 355 Z" fill="url(#carBodyGrad2D)" stroke="#CAD0D8" stroke-width="1.5"/>
          <!-- Panoramic Glass -->
          <path d="M 415 284 L 482 244 Q 542 238 610 254 L 638 284 Z" fill="url(#glassGrad2D)"/>
          <line x1="535" y1="240" x2="538" y2="284" stroke="#0D1016" stroke-width="4"/>

          <!-- Headlights -->
          <path d="M 322 318 L 338 312 L 332 328 Z" fill="#FFFFFF" id="fb-headlight" filter="url(#voltGlow2D)"/>
          <!-- Taillight (Brake light) -->
          <rect id="fb-taillight" x="668" y="306" width="6" height="18" rx="2" fill="#D91E2E"/>

          <!-- Charge Port Door & Port Inlet -->
          <g id="fb-charge-port" transform="translate(365, 305)">
            <rect id="fb-port-door" x="0" y="0" width="16" height="20" rx="3" fill="#DDE2E8" stroke="#B8BFC8" stroke-width="1"/>
            <circle id="fb-port-inlet" cx="8" cy="10" r="5" fill="#0D1016" stroke="#32E800" stroke-width="2"/>
            <circle id="fb-port-glow" cx="8" cy="10" r="7" fill="none" stroke="#32E800" stroke-width="2" opacity="0" filter="url(#voltGlow2D)"/>
          </g>

          <!-- Wheels -->
          <g id="fb-wheel-front" transform="translate(385, 362)">
            <circle cx="0" cy="0" r="28" fill="#14171E" stroke="#0B0D12" stroke-width="3"/>
            <circle cx="0" cy="0" r="18" fill="#CAD0D8" stroke="#909AA8" stroke-width="2"/>
            <circle cx="0" cy="0" r="7" fill="#14171E"/>
            <g id="fb-spokes-front">
              <line x1="-16" y1="0" x2="16" y2="0" stroke="#FFFFFF" stroke-width="2.5"/>
              <line x1="0" y1="-16" x2="0" y2="16" stroke="#FFFFFF" stroke-width="2.5"/>
            </g>
          </g>
          <g id="fb-wheel-rear" transform="translate(615, 362)">
            <circle cx="0" cy="0" r="28" fill="#14171E" stroke="#0B0D12" stroke-width="3"/>
            <circle cx="0" cy="0" r="18" fill="#CAD0D8" stroke="#909AA8" stroke-width="2"/>
            <circle cx="0" cy="0" r="7" fill="#14171E"/>
            <g id="fb-spokes-rear">
              <line x1="-16" y1="0" x2="16" y2="0" stroke="#FFFFFF" stroke-width="2.5"/>
              <line x1="0" y1="-16" x2="0" y2="16" stroke="#FFFFFF" stroke-width="2.5"/>
            </g>
          </g>
        </g>

        <!-- 3. Charging Cable & Gun Nozzle -->
        <path id="fb-cable-path" d="M 167 254 Q 210 350 373 315" fill="none" stroke="#1A1D24" stroke-width="6" stroke-linecap="round"/>
        <path id="fb-cable-pulse" d="M 167 254 Q 210 350 373 315" fill="none" stroke="#32E800" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="16 12" opacity="0" filter="url(#voltGlow2D)"/>

        <!-- Charging Gun Nozzle -->
        <g id="fb-nozzle" transform="translate(167, 254)">
          <rect x="-8" y="-6" width="16" height="12" rx="3" fill="#161920" stroke="#2E3340" stroke-width="1.5"/>
          <rect x="-2" y="-4" width="8" height="8" rx="2" fill="#32E800"/>
        </g>
      </svg>
    </div>
  `;

  const carGroup = container.querySelector('#fb-car-group');
  const spokesFront = container.querySelector('#fb-spokes-front');
  const spokesRear = container.querySelector('#fb-spokes-rear');
  const portDoor = container.querySelector('#fb-port-door');
  const portGlow = container.querySelector('#fb-port-glow');
  const taillight = container.querySelector('#fb-taillight');
  const cablePath = container.querySelector('#fb-cable-path');
  const cablePulse = container.querySelector('#fb-cable-pulse');
  const nozzle = container.querySelector('#fb-nozzle');
  const underglow = container.querySelector('#fb-underglow');

  const stageIdxEl = document.getElementById('three-stage-idx');
  const stageTitleEl = document.getElementById('three-stage-title');
  const stageDescEl = document.getElementById('three-stage-desc');
  const specLeftEl = document.getElementById('three-spec-left');
  const specRightEl = document.getElementById('three-spec-right');

  const row1Lbl = document.getElementById('ck-row-1-lbl');
  const row1Val = document.getElementById('ck-row-1-val');
  const row2Lbl = document.getElementById('ck-row-2-lbl');
  const row2Val = document.getElementById('ck-row-2-val');
  const row3Lbl = document.getElementById('ck-row-3-lbl');
  const row3Val = document.getElementById('ck-row-3-val');

  let scrollProg = 0;
  let smoothProg = 0;
  let lastStageIdx = -1;
  let animTime = 0;

  function updateHUD(idx) {
    if (idx === lastStageIdx) return;
    lastStageIdx = idx;
    const info = stageContent[idx] || stageContent[0];
    stagePills.forEach((p, i) => p.classList.toggle('active', i === idx));

    if (stageIdxEl) stageIdxEl.textContent = info.idx;
    if (stageTitleEl) stageTitleEl.textContent = info.title;
    if (stageDescEl) stageDescEl.textContent = info.desc;
    if (info.rows) {
      if (row1Lbl) row1Lbl.textContent = info.rows[0][0];
      if (row1Val) { row1Val.textContent = info.rows[0][1]; row1Val.style.color = info.rows[0][2] ? '#1b8a00' : 'var(--text-primary)'; }
      if (row2Lbl) row2Lbl.textContent = info.rows[1][0];
      if (row2Val) { row2Val.textContent = info.rows[1][1]; row2Val.style.color = info.rows[1][2] ? '#1b8a00' : 'var(--text-primary)'; }
      if (row3Lbl) row3Lbl.textContent = info.rows[2][0];
      if (row3Val) { row3Val.textContent = info.rows[2][1]; row3Val.style.color = info.rows[2][2] ? '#1b8a00' : 'var(--text-primary)'; }
    }
  }

  function computeProg(scrollY) {
    const secTop = section.getBoundingClientRect().top + window.scrollY;
    const secScrollable = Math.max(1, section.offsetHeight - window.innerHeight);
    if (window.innerWidth > 1024) {
      scrollProg = clamp((scrollY - secTop) / secScrollable, 0, 1);
    } else {
      const rect = container.getBoundingClientRect();
      const startY = window.innerHeight * 0.85;
      const endY = window.innerHeight * 0.15;
      scrollProg = clamp((startY - rect.top) / Math.max(1, startY - endY), 0, 1);
    }
  }

  if (lenis) {
    lenis.on('scroll', ({ scroll }) => computeProg(scroll));
  } else {
    window.addEventListener('scroll', () => computeProg(window.scrollY), { passive: true });
  }

  stagePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const idx = parseInt(pill.getAttribute('data-3d-stage') || '0', 10);
      const targetP = idx === 0 ? 0.15 : idx === 1 ? 0.52 : 0.92;
      const secTop = section.getBoundingClientRect().top + window.scrollY;
      const secScrollable = Math.max(1, section.offsetHeight - window.innerHeight);
      if (lenis && window.innerWidth > 1024) {
        lenis.scrollTo(secTop + targetP * secScrollable, { duration: 1.1, easing: expoOut });
      } else {
        scrollProg = targetP;
        updateHUD(idx);
      }
    });
  });

  function render2D() {
    smoothProg = lerp(smoothProg, scrollProg, 0.1);
    animTime += 0.03;

    const activeStage = smoothProg < 0.33 ? 0 : smoothProg < 0.62 ? 1 : 2;
    updateHUD(activeStage);

    // Pill progress bars
    const p0 = clamp(smoothProg / 0.33, 0, 1);
    const p1 = clamp((smoothProg - 0.33) / 0.29, 0, 1);
    const p2 = clamp((smoothProg - 0.62) / 0.38, 0, 1);
    [p0, p1, p2].forEach((prog, i) => {
      if (stagePills[i]) stagePills[i].style.setProperty('--pill-progress', prog.toFixed(3));
    });

    // Step 1: Car drives into bay (0.0 -> 0.28)
    const rawDrive = clamp(smoothProg / 0.26, 0, 1);
    const driveEase = 1 - Math.pow(1 - rawDrive, 3);
    const carX = (1 - driveEase) * 200;
    if (carGroup) carGroup.setAttribute('transform', `translate(${carX.toFixed(1)}, 0)`);

    // Wheel rotation
    const wheelDeg = ((1 - driveEase) * -360).toFixed(1);
    if (spokesFront) spokesFront.setAttribute('transform', `rotate(${wheelDeg})`);
    if (spokesRear) spokesRear.setAttribute('transform', `rotate(${wheelDeg})`);

    // Brake lights flare
    const isBraking = rawDrive > 0.3 && rawDrive < 0.98;
    if (taillight) taillight.setAttribute('fill', isBraking ? '#FF1E32' : '#D91E2E');

    // Flap door opens
    const flapP = clamp((smoothProg - 0.18) / 0.14, 0, 1);
    if (portDoor) portDoor.setAttribute('transform', `rotate(${(-flapP * 65).toFixed(1)}, 0, 10)`);

    // Step 2: Cable nozzle connects to car port (0.28 -> 0.58)
    const rawDock = clamp((smoothProg - 0.28) / 0.28, 0, 1);
    const dockT = rawDock * rawDock * (3 - 2 * rawDock); // smoothstep

    // Port coordinates on car: (373 + carX, 315)
    const targetPortX = 373 + carX;
    const targetPortY = 315;

    // Nozzle position: lerp from wallbox holster (167, 254) to port
    const arcLift = Math.sin(dockT * Math.PI) * -45;
    const nX = lerp(167, targetPortX, dockT);
    const nY = lerp(254, targetPortY, dockT) + arcLift;

    if (nozzle) nozzle.setAttribute('transform', `translate(${nX.toFixed(1)}, ${nY.toFixed(1)})`);

    // Dynamic cable curve
    const ctrlX = lerp(200, targetPortX - 60, dockT);
    const ctrlY = lerp(340, 360, dockT) + arcLift * 0.5;
    const pathD = `M 167 254 Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${nX.toFixed(1)} ${nY.toFixed(1)}`;
    if (cablePath) cablePath.setAttribute('d', pathD);
    if (cablePulse) cablePulse.setAttribute('d', pathD);

    // Step 3: Charging active (0.58 -> 1.0)
    const isCharging = smoothProg >= 0.56;
    const chargeP = clamp((smoothProg - 0.56) / 0.42, 0, 1);

    if (isCharging) {
      if (underglow) underglow.setAttribute('opacity', (0.2 + Math.sin(animTime * 4) * 0.08).toFixed(2));
      if (portGlow) portGlow.setAttribute('opacity', (0.8 + Math.sin(animTime * 6) * 0.2).toFixed(2));
      if (cablePulse) {
        cablePulse.setAttribute('opacity', '0.9');
        cablePulse.style.strokeDashoffset = (-animTime * 45).toFixed(1);
      }
    } else {
      if (underglow) underglow.setAttribute('opacity', '0');
      if (portGlow) portGlow.setAttribute('opacity', '0');
      if (cablePulse) cablePulse.setAttribute('opacity', '0');
    }

    const socVal = Math.round(20 + chargeP * 65);
    const hostCut = Math.round(chargeP * 180);
    if (specLeftEl) {
      specLeftEl.innerHTML = isCharging
        ? 'CHARGER: <strong style="color:#1b8a00;">CONNECTED • 7.4 KW</strong>'
        : dockT > 0.05
          ? 'CHARGER: <strong>CONNECTING TO EV...</strong>'
          : rawDrive < 0.95
            ? 'VEHICLE: <strong>ARRIVING AT HOST BAY...</strong>'
            : 'CHARGER: <strong>READY IN HOST BAY</strong>';
    }
    if (specRightEl) {
      specRightEl.textContent = isCharging
        ? `● BATTERY: ${socVal}% · HOST EARNS ₹${hostCut} (100%)`
        : '● VEHICLE BATTERY: 20%';
    }

    requestAnimationFrame(render2D);
  }

  requestAnimationFrame(render2D);
}

/* ---- 4. Interactive 3D Cursor Tilt & Specular Sheen on Cards ---- */
function init3DCardTilt() {
  if (window.innerWidth <= 1024) return;
  const cards = document.querySelectorAll('.arch-bento-card, .arch-spec-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      card.dataset.isHovered = 'true';
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const nx = x / rect.width - 0.5;
      const ny = y / rect.height - 0.5;

      const rotY = (nx * 7).toFixed(2);
      const rotX = (-ny * 7).toFixed(2);

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(0, -4px, 8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.dataset.isHovered = 'false';
      card.style.transform = '';
    });
  });
}

/* ---- 5. Split-Word Masked Heading Reveals ---- */
function initSplitTextReveals() {
  const headings = document.querySelectorAll('[data-split-reveal]');
  if (!headings.length) return;

  headings.forEach((heading) => {
    if (heading.classList.contains('split-ready')) return;
    heading.classList.add('split-ready');

    let wordIndex = 0;

    function processNode(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        const parts = text.split(/(\s+)/);
        const frag = document.createDocumentFragment();

        parts.forEach((part) => {
          if (/^\s+$/.test(part) || part === '') {
            frag.appendChild(document.createTextNode(part));
          } else {
            const mask = document.createElement('span');
            mask.className = 'split-word-mask';
            const inner = document.createElement('span');
            inner.className = 'split-word-inner';
            inner.style.transitionDelay = `${wordIndex * 0.04}s`;
            inner.textContent = part;
            mask.appendChild(inner);
            frag.appendChild(mask);
            wordIndex++;
          }
        });
        return frag;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName === 'BR') {
          return node.cloneNode(true);
        }
        const clone = node.cloneNode(false);
        Array.from(node.childNodes).forEach((child) => {
          clone.appendChild(processNode(child));
        });
        return clone;
      }
      return node.cloneNode(true);
    }

    const newChildren = document.createDocumentFragment();
    Array.from(heading.childNodes).forEach((child) => {
      newChildren.appendChild(processNode(child));
    });
    heading.innerHTML = '';
    heading.appendChild(newChildren);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
  );

  headings.forEach((h) => observer.observe(h));
}

/* ---- 6. Lenis Velocity-Driven Architectural Ticker Ribbon ---- */
function initVelocityMarquee() {
  const track = document.getElementById('velocity-marquee-track');
  if (!track) return;

  let offset = 0;
  let currentDirection = 1;
  const baseSpeed = 0.55;

  function animateTicker() {
    const v = window.__lenisVelocity || 0;
    if (Math.abs(v) > 0.2) {
      currentDirection = v > 0 ? 1 : -1;
    }

    const velocityBoost = Math.min(4.5, Math.abs(v) * 0.28);
    offset -= (baseSpeed + velocityBoost) * currentDirection;

    const halfWidth = track.scrollWidth / 2;
    if (halfWidth > 0) {
      if (offset <= -halfWidth) offset += halfWidth;
      if (offset > 0) offset -= halfWidth;
    }

    track.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
    requestAnimationFrame(animateTicker);
  }

  requestAnimationFrame(animateTicker);
}

/* ---- 7. Lenis Scroll-Scrubbed Hardware Speed & Range Comparator ---- */
function initSpeedComparator(lenis) {
  const section = document.getElementById('speed-comparator');
  const rows = document.querySelectorAll('#speed-bars-stack .speed-tier-row');
  const modeBtns = document.querySelectorAll('.ev-vehicle-btn');

  if (!section || !rows.length) return;

  let currentMode = 'suv';
  let lastProgressFactor = 0.25;
  let secTop = 0;

  function cacheSecTop() {
    secTop = section.getBoundingClientRect().top + window.scrollY;
  }
  cacheSecTop();
  window.addEventListener('resize', cacheSecTop);
  window.addEventListener('load', cacheSecTop);

  const currentDisplayedKm = Array.from(rows).map((row) =>
    parseInt(row.getAttribute(`data-km-${currentMode}`) || '40', 10)
  );
  let kmRafId = null;

  function renderBars(progressFactor, animateNumbers = false) {
    lastProgressFactor = progressFactor;
    const targets = [];

    rows.forEach((row, idx) => {
      const modePct = parseFloat(
        row.getAttribute(`data-pct-${currentMode}`) || row.getAttribute('data-base-pct') || '50'
      );
      const kmVal = parseInt(row.getAttribute(`data-km-${currentMode}`) || '40', 10);
      const timeMeta = row.getAttribute(`data-time-${currentMode}`);
      const fillEl = row.querySelector('.speed-bar-fill');
      const kmEl = row.querySelector('.speed-tier-km');
      const metaEl = row.querySelector('.speed-tier-meta');

      const displayWidth = (modePct * progressFactor).toFixed(1);
      const targetKm = Math.round(kmVal * progressFactor);
      targets.push({ kmEl, targetKm, idx });

      if (fillEl) fillEl.style.width = `${displayWidth}%`;
      if (metaEl && timeMeta) metaEl.textContent = timeMeta;

      if (!animateNumbers) {
        currentDisplayedKm[idx] = targetKm;
        if (kmEl) kmEl.textContent = `+${targetKm} km/hr`;
      }
    });

    if (animateNumbers) {
      if (kmRafId) cancelAnimationFrame(kmRafId);
      const startVals = [...currentDisplayedKm];
      const startTime = performance.now();
      const duration = 380;

      function stepKm(now) {
        const t = Math.min(1, (now - startTime) / duration);
        const ease = 1 - Math.pow(1 - t, 3);
        targets.forEach(({ kmEl, targetKm, idx }) => {
          const val = Math.round(startVals[idx] + (targetKm - startVals[idx]) * ease);
          currentDisplayedKm[idx] = val;
          if (kmEl) kmEl.textContent = `+${val} km/hr`;
        });
        if (t < 1) {
          kmRafId = requestAnimationFrame(stepKm);
        }
      }
      kmRafId = requestAnimationFrame(stepKm);
    }
  }

  if (lenis) {
    lenis.on('scroll', ({ scroll }) => {
      const topInView = secTop - scroll;
      const windowH = window.innerHeight;
      const p = clamp((windowH * 0.88 - topInView) / (windowH * 0.52), 0.25, 1);
      renderBars(p, false);
    });
  } else {
    renderBars(1, false);
  }

  modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentMode = btn.getAttribute('data-ev-mode') || 'suv';
      renderBars(Math.max(0.92, lastProgressFactor), true);
    });
  });
}

/* ---- 8. Subtle Magnetic Button Physics ---- */
function initMagneticButtons() {
  if (window.innerWidth <= 1024) return;
  const buttons = document.querySelectorAll('.magnetic-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate3d(${(x * 0.14).toFixed(1)}px, ${(y * 0.18).toFixed(1)}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ---- 9. Scroll Reveal Choreography ---- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale, .bento-utilization-meter'
  );
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.add('is-inview');
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: '60px 0px 60px 0px'
    }
  );

  revealElements.forEach((el) => observer.observe(el));

  // Safety trigger for elements already in or near viewport
  const forceCheckInView = () => {
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 80) {
        el.classList.add('visible', 'is-inview');
      }
    });
  };
  window.addEventListener('scroll', forceCheckInView, { passive: true });
  setTimeout(forceCheckInView, 150);
  setTimeout(forceCheckInView, 600);
}

/* ---- 10. Animated Counters ---- */
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
    { threshold: 0.35 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.counter, 10);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    el.textContent = prefix + current.toLocaleString('en-IN') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ---- 11. Accordion ---- */
function initAccordions() {
  const headers = document.querySelectorAll('.accordion-header');
  if (!headers.length) return;

  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      item.parentElement.querySelectorAll('.accordion-item').forEach((i) => {
        i.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ---- 12. Mobile Menu (Integrated with Lenis stop/start) ---- */
function initMobileMenu(lenis) {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    const isOpen = mobileNav.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (lenis) {
      isOpen ? lenis.stop() : lenis.start();
    }
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    });
  });
}

/* ---- 13. Airbnb-Style Earnings Calculator (Smooth Number Rolling & Filled Sliders) ---- */
function initCalculator() {
  const hoursSlider = document.getElementById('calc-hours');
  const rateSlider = document.getElementById('calc-rate');
  const daysSlider = document.getElementById('calc-days');
  const presetPills = document.querySelectorAll('.preset-pill');

  if (!hoursSlider || !rateSlider || !daysSlider) return;

  const hoursValue = document.getElementById('calc-hours-val');
  const rateValue = document.getElementById('calc-rate-val');
  const daysValue = document.getElementById('calc-days-val');
  const monthlyResult = document.getElementById('monthly-earnings');
  const yearlyResult = document.getElementById('yearly-earnings');
  const summaryText = document.getElementById('estimator-summary-text');
  const annualInline = document.getElementById('estimator-annual-inline');
  const impactBadge = document.getElementById('estimator-impact-badge');

  let displayedMonthly = 4000;
  let calcRafId = null;

  function syncRangeTrack(slider) {
    const min = parseFloat(slider.min || '0');
    const max = parseFloat(slider.max || '100');
    const val = parseFloat(slider.value || '0');
    const pct = clamp(((val - min) / Math.max(1, max - min)) * 100, 0, 100);
    slider.style.setProperty('--range-pct', `${pct.toFixed(1)}%`);
  }

  function getImpactDescription(monthly) {
    if (monthly < 3500) {
      return 'Illustrative gross receipts at chosen hours (before electricity & expenses)';
    }
    if (monthly < 8500) {
      return 'Illustrative gross receipts at regular utilisation (before electricity & expenses)';
    }
    if (monthly < 16000) {
      return 'Illustrative gross receipts at multi-session daily sharing (before expenses)';
    }
    return 'Illustrative high-volume sharing projection (gross receipts before expenses)';
  }

  function animateMonthlyNumber(targetMonthly) {
    if (!monthlyResult) return;
    if (calcRafId) cancelAnimationFrame(calcRafId);
    const startVal = displayedMonthly;
    const startTime = performance.now();
    const duration = 260;

    function tick(now) {
      const t = Math.min(1, (now - startTime) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      displayedMonthly = Math.round(startVal + (targetMonthly - startVal) * ease);
      monthlyResult.textContent = '₹' + displayedMonthly.toLocaleString('en-IN');
      if (t < 1) {
        calcRafId = requestAnimationFrame(tick);
      }
    }
    calcRafId = requestAnimationFrame(tick);
  }

  function calculate(isInitial = false) {
    syncRangeTrack(hoursSlider);
    syncRangeTrack(rateSlider);
    syncRangeTrack(daysSlider);

    const hours = parseInt(hoursSlider.value, 10);
    const rate = parseInt(rateSlider.value, 10);
    const days = parseInt(daysSlider.value, 10);

    if (hoursValue) hoursValue.textContent = hours;
    if (rateValue) rateValue.textContent = '₹' + rate;
    if (daysValue) daysValue.textContent = days;

    const monthly = hours * rate * days * 4;
    const yearly = monthly * 12;

    if (isInitial) {
      displayedMonthly = monthly;
      if (monthlyResult) monthlyResult.textContent = '₹' + monthly.toLocaleString('en-IN');
    } else {
      animateMonthlyNumber(monthly);
    }

    if (yearlyResult) yearlyResult.textContent = '₹' + yearly.toLocaleString('en-IN');
    if (annualInline) annualInline.textContent = `₹${yearly.toLocaleString('en-IN')} / yr`;
    if (impactBadge) impactBadge.textContent = getImpactDescription(monthly);
    if (summaryText) {
      summaryText.innerHTML = `Sharing <strong>${hours} hrs/day</strong> (${days} days/wk) at <strong>₹${rate}/hr</strong> • ₹${yearly.toLocaleString('en-IN')}/yr (Illustrative)`;
    }
  }

  presetPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      presetPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      const presetRate = pill.getAttribute('data-preset-rate');
      if (presetRate) {
        rateSlider.value = presetRate;
        calculate(false);
      }
    });
  });

  hoursSlider.addEventListener('input', () => calculate(false));
  rateSlider.addEventListener('input', () => calculate(false));
  daysSlider.addEventListener('input', () => calculate(false));
  calculate(true);
}

/* ---- 14. Native Lenis scrollTo() for Anchors & Back-to-Top ---- */
function initLenisAnchorScroll(lenis) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();

        // Immediately force any reveal elements inside target to be visible so there is never a blank screen
        target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
          el.classList.add('visible', 'is-inview');
        });
        if (target.classList.contains('reveal')) {
          target.classList.add('visible', 'is-inview');
        }

        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(target, { offset: -72, duration: 1.1, easing: expoOut });
        } else {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  document.querySelectorAll('[data-lenis-top]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(0, { duration: 1.2, easing: expoOut });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}
