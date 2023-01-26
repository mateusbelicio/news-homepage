'use strict';

const menuButton = document.querySelector('.btn--menu');
const menuNavigation = document.querySelector('.header__navigation');

const toggleMenu = () => {
  menuButton.dataset.checked === 'true'
    ? menuButton.setAttribute('data-checked', false)
    : menuButton.setAttribute('data-checked', true);
};

menuButton.addEventListener('click', toggleMenu);
menuNavigation.addEventListener('click', (e) => {
  if (!e.target.closest('.header__link')) return;
  menuButton.setAttribute('data-checked', false);
});

window.addEventListener('keydown', (e) => {
  e.key === 'Escape' && menuButton.setAttribute('data-checked', false);
});
