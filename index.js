// Dropdowns
document.addEventListener('click', (e) => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]');
  if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
  }

  document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  });
});

// Mobile menu
const mobileNav = document.querySelector('.mobile-nav');
const navToggle = document.querySelector('.mobile-menu-toggle');
const navOverlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
  const visibility = mobileNav.getAttribute('data-visible');

  if (visibility === 'false') {
    mobileNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    navOverlay.style.opacity = '1';
  } else {
    mobileNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navOverlay.style.opacity = '0';
  }
});
