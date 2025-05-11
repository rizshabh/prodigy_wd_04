// Responsive navigation menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  navList.classList.toggle('show');
});

// Highlight nav links on scroll
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav-link');

function changeActiveNav() {
  let index = sections.length;

  while(--index && window.scrollY + 52 < sections[index].offsetTop) {} // offset for header height

  navLinks.forEach(link => link.classList.remove('active'));
  if(navLinks[index]) navLinks[index].classList.add('active');
}

window.addEventListener('scroll', changeActiveNav);

// Close nav menu on link click (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if(navList.classList.contains('show')){
      navList.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', false);
    }
  });
});
