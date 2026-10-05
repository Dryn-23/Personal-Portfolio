

const PROFILE = {
  name:        'Garin, Edrian T.',
  initials:    'GE',
  title:       'Student Developer & Aspiring Software Engineer',
  tagline:     'Building simple solutions to real-world problems.',
  location:    'Marilao, Bulacan',
  email:       'garin.edrian@example.com',
  phone:       '+63 912 345 6789',
  github:      'https://github.com/alexmendoza',
  githubLabel: 'github.com/alexmendoza',
  linkedin:      'https://linkedin.com/in/alexmendoza',
  linkedinLabel: 'linkedin.com/in/alexmendoza',
  school:      'North Valley State University',
  course:      'Bachelor of Science in Information Technology',
  yearLevel:   '3rd Year',
  gradYear:    2028,

  projects: [
    {
      number: '01',
      title:  'ACTIVITY 1',
      desc:   'A web-based pastry and fruit shake ordering and point-of-sale system designed to simplify order management, product management, and sales tracking.',
      tech:   ['HTML', 'CSS'],
      status: 'Completed',
      image:  'images\\Act1.png',
      viewUrl:   '404.html',
      sourceUrl: '#',
    },
    {
      number: '02',
      title:  'ACTIVITY 2',
      desc:   'A desktop-based hotel management application designed to manage rooms, customers, reservations, billing, and staff information through a centralized system.',
      tech:   ['HTML', 'CSS'],
      status: 'Completed',
      image:  'images\\Act2.png',
      viewUrl:   '404.html',
      sourceUrl: '#',
    },
    {
      number: '03',
      title:  'ACTIVITY 3',
      desc:   'A web-based pastry and fruit shake ordering and point-of-sale system designed to simplify order management, product management, and sales tracking.',
      tech:   ['HTML', 'CSS'],
      status: 'Completed',
      image:  'images\\Act3.png',
      viewUrl:   'Projects\\Garin_BSIT31_B_Act3\\Home.html',
      sourceUrl: '#',
    },
    {
      number: '04',
      title:  'ACTIVITY 4',
      desc:   'A responsive personal portfolio website designed to showcase my skills, projects, education, and development journey.',
      tech:   ['HTML', 'CSS'],
      status: 'Ongoing',
      image:  'images\\Act4.png',
      viewUrl:   '404.html',
      sourceUrl: '#',
    },
        {
      number: '05',
      title:  'ACTIVITY 5',
      desc:   'A responsive personal portfolio website designed to showcase my skills, projects, education, and development journey.',
      tech:   ['HTML', 'CSS'],
      status: 'Ongoing',
      image:  'images\\Act5.png',
      viewUrl:   '404.html',
      sourceUrl: '#',
    },
        {
      number: '06',
      title:  'ACTIVITY 6',
      desc:   'A responsive personal portfolio website designed to showcase my skills, projects, education, and development journey.',
      tech:   ['HTML', 'CSS'],
      status: 'Ongoing',
      image:  'images\\Act6.png',
      viewUrl:   'Projects\\Garin_Act6\\LandingPage.html',
      sourceUrl: '#',
    },
  ],
};

/* ================================================================
   App
   ================================================================ */

(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  // ── Render project cards ──────────────────────────────────

  function renderProjects() {
    const list = $('#projectsList');
    if (!list) return;

    list.innerHTML = PROFILE.projects
      .map(
        (p) => `
      <div class="project-card reveal-scale">
        <div class="project-image">
          <img src="${p.image}" alt="${p.title}"
               onerror="this.style.display='none'; this.parentElement.classList.add('placeholder-active');">
          <div class="project-image-placeholder">${p.title}</div>
        </div>
        <div class="project-body">
          <p class="project-number">Project ${p.number}</p>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tech">
            ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <p class="project-status">${p.status}</p>
          <div class="project-links">
            <a href="${p.viewUrl}" class="btn btn-primary btn-sm">View Project</a>
            <a href="${p.sourceUrl}" class="btn btn-outline btn-sm">Source Code</a>
          </div>
        </div>
      </div>
    `
      )
      .join('');
  }

  // ── Navbar scroll state & progress bar ────────────────────

  const navbar = $('#navbar');
  const scrollProgress = $('#scrollProgress');
  const hero = $('#hero');
  const backToTop = $('#backToTop');
  const scrollDownIndicator = $('#scrollDownIndicator');

  function onScroll() {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 20);

    // Update progress bar
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollY / docHeight) * 100;
    scrollProgress.style.width = Math.min(scrolled, 100) + '%';

    // Parallax effect on hero background decoration
    if (hero) {
      const heroHeight = hero.offsetHeight;
      if (scrollY < heroHeight) {
        const parallaxOffset = scrollY * 0.3;
        hero.style.setProperty('--parallax-y', parallaxOffset + 'px');
      }
    }

    // Toggle Back to Top button
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 400);
    }

    // Fade out scroll indicator on hero
    if (scrollDownIndicator) {
      scrollDownIndicator.style.opacity = scrollY > 100 ? '0' : '0.7';
      scrollDownIndicator.style.pointerEvents = scrollY > 100 ? 'none' : 'auto';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Active nav link on scroll ─────────────────────────────

  const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

  function updateActiveLink() {
    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 140) current = id;
    }
    $$('.nav-link').forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + current
      );
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  // ── Mobile menu ───────────────────────────────────────────

  const hamburger = $('#hamburger');
  const navLinks  = $('#navLinks');

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // ── Scroll-reveal (IntersectionObserver) ──────────────────

  function initReveal() {
    const els = $$('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
  }

  // ── Animated counters ──────────────────────────────────────

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 2000; // 2 seconds
    const start = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutExpo)
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeOut * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target; // Ensure final value is exact
      }
    }

    requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = $$('.stat-number');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  // ── Contact form validation ───────────────────────────────

  const form = $('#contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name    = $('#contactName');
    const email   = $('#contactEmail');
    const message = $('#contactMessage');

    // Reset
    [name, email, message].forEach((el) => el.classList.remove('error'));
    $$('.form-error', form).forEach((el) => (el.textContent = ''));

    if (!name.value.trim()) {
      name.classList.add('error');
      $('#nameError').textContent = 'Please enter your name.';
      valid = false;
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('error');
      $('#emailError').textContent = 'Please enter a valid email address.';
      valid = false;
    }

    if (!message.value.trim()) {
      message.classList.add('error');
      $('#messageError').textContent = 'Please enter a message.';
      valid = false;
    }

    if (!valid) return;

    // Simulate submission
    const success = $('#formSuccess');
    success.classList.remove('hidden');
    form.reset();

    setTimeout(() => success.classList.add('hidden'), 5000);
  });

  // ── Keyboard accessibility: Escape closes mobile menu ─────

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      hamburger.focus();
    }
  });

  // ── Init ──────────────────────────────────────────────────

  renderProjects();
  // Slight delay so dynamically inserted .reveal elements are in the DOM.
  requestAnimationFrame(() => {
    initReveal();
    initCounters();
    updateActiveLink();
  });
})();
