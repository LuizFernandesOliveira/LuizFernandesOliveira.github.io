// ===== TYPING ANIMATION =====
const typingText = document.getElementById('typing-text');
const phrases = [
  'Desenvolvedor Full-Stack',
  'Entusiasta em InfoSec',
  'Estudante na Trybe',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingText.textContent = current.slice(0, charIndex);

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    delay = 400;
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  setTimeout(type, delay);
}

type();

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== ACTIVE NAV LINK =====
const navLinkEls = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('section[id]').forEach(section => sectionObserver.observe(section));

// ===== RENDER PROJECTS =====
const projects = [
  {
    title: 'Leasson Learned',
    link:  'projects/trybe/p_01_trybe_leasson_learned/index.html',
    image: 'projects/trybe/p_01_trybe_leasson_learned/leasson-learned.png',
    tags:  ['HTML', 'CSS'],
  },
  {
    title: 'Meme Generator',
    link:  'projects/trybe/p_02_trybe-meme-generator/index.html',
    image: 'projects/trybe/p_02_trybe-meme-generator/meme-generator.png',
    tags:  ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Pixel Art',
    link:  'projects/trybe/p_03_trybe_pixel_art/index.html',
    image: 'projects/trybe/p_03_trybe_pixel_art/pixel-art.png',
    tags:  ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Todo List',
    link:  'projects/trybe/p_04_trybe_todo_list/index.html',
    image: 'projects/trybe/p_04_trybe_todo_list/todo-list.png',
    tags:  ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Clone UI Facebook',
    link:  'projects/trybe/p_05_trybe_cloneUI_facebook/index.html',
    image: 'projects/trybe/p_05_trybe_cloneUI_facebook/facebook.png',
    tags:  ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Shopping Cart',
    link:  'projects/trybe/p_06_trybe_shopping-cart/index.html',
    image: 'projects/trybe/p_06_trybe_shopping-cart/shopping-cart.png',
    tags:  ['HTML', 'CSS', 'JavaScript', 'API'],
  },
];

const grid = document.getElementById('projects-grid');

grid.innerHTML = projects.map(p => `
  <div class="project-card">
    <img class="project-thumb" src="${p.image}" alt="${p.title}" onerror="this.style.display='none'">
    <div class="project-body">
      <h3>${p.title}</h3>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
      <a href="${p.link}" target="_blank" class="project-link">Ver projeto →</a>
    </div>
  </div>
`).join('');
