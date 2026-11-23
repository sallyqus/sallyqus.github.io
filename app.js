(() => {
  const toggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#mobile-nav');
  const closeMenu = () => { nav.hidden = true; toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => { nav.hidden = !nav.hidden; toggle.setAttribute('aria-expanded', String(!nav.hidden)); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !nav.hidden) { closeMenu(); toggle.focus(); } });
  window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
})();
