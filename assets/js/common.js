(function () {
  'use strict';

  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  // Colour theme: follow the system until the visitor picks one. Picking the mode that matches the
  // system clears the saved choice so the site goes back to following the system.
  var themeButton = document.getElementById('theme-toggle');

  function effectiveTheme() {
    var forced = root.getAttribute('data-theme');
    return forced ? forced : (media.matches ? 'dark' : 'light');
  }

  function syncThemeButton() {
    var current = effectiveTheme();
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme-effective', current);
    if (themeButton) {
      themeButton.setAttribute('aria-label', 'Switch to ' + next + ' theme');
      themeButton.setAttribute('title', 'Switch to ' + next + ' theme');
    }
  }

  if (themeButton) {
    themeButton.addEventListener('click', function () {
      var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      var system = media.matches ? 'dark' : 'light';
      try {
        if (next === system) {
          root.removeAttribute('data-theme');
          localStorage.removeItem('theme');
        } else {
          root.setAttribute('data-theme', next);
          localStorage.setItem('theme', next);
        }
      } catch (e) {
        root.setAttribute('data-theme', next);
      }
      syncThemeButton();
    });
  }

  media.addEventListener('change', syncThemeButton);
  syncThemeButton();

  // Mobile navigation
  var navButton = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');

  function setNav(open) {
    navButton.setAttribute('aria-expanded', String(open));
    navButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
  }

  if (navButton && nav) {
    navButton.addEventListener('click', function () {
      setNav(navButton.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setNav(false);
        navButton.focus();
      }
    });
    document.addEventListener('click', function (event) {
      if (nav.classList.contains('is-open') && !nav.contains(event.target) && !navButton.contains(event.target)) {
        setNav(false);
      }
    });
  }

  // Top bar gets a divider once the page scrolls
  var bar = document.getElementById('top-bar');
  if (bar) {
    var onScroll = function () { bar.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Publication abstracts
  document.querySelectorAll('[data-abstract-toggle]').forEach(function (button) {
    button.addEventListener('click', function () {
      var panel = document.getElementById(button.getAttribute('aria-controls'));
      var open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      if (panel) panel.hidden = !open;
    });
  });
})();
