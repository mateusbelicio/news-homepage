'use strict';

const menuButton = document.querySelector('.btn--menu');
const menuNavigation = document.querySelector('.header__navigation');

const toggleMenu = () => {
  menuButton.getAttribute('aria-selected') === 'true'
    ? menuButton.setAttribute('aria-selected', false)
    : menuButton.setAttribute('aria-selected', true);
};

menuButton.addEventListener('click', toggleMenu);
menuNavigation.addEventListener('click', (e) => {
  if (!e.target.closest('.header__link')) return;
  menuButton.setAttribute('aria-selected', false);
});

window.addEventListener('keydown', (e) => {
  e.key === 'Escape' && menuButton.setAttribute('aria-selected', false);
});
