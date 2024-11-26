document.addEventListener('scroll', () => {
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

let currentSection = '';
sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
    }
});

navLinks.forEach((link) => {
    link.classList.remove('active');
    if(link.classList.contains(currentSection)) {
        link.classList.add('active');
    }
});
});

document.head.insertAdjacentHTML('beforeend', `
    <style>
      nav ul li a.active {
        border-bottom: 2px solid white;
      }
    </style>
  `);
