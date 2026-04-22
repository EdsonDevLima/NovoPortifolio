// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .about-grid, .contact-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Header background on scroll
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.background = 'rgba(10, 10, 15, 0.95)';
    header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.background = 'rgba(10, 10, 15, 0.8)';
    header.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Cursor follower effect (optional enhancement)
const cursor = document.createElement('div');
cursor.className = 'cursor-follower';
document.body.appendChild(cursor);

const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
  .cursor-follower {
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.2s ease, opacity 0.2s ease;
    opacity: 0;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .cursor-follower {
      opacity: 0.5;
    }
  }
`;
document.head.appendChild(cursorStyle);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  const delay = 0.1;
  
  cursorX += (mouseX - cursorX) * delay;
  cursorY += (mouseY - cursorY) * delay;
  
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  
  requestAnimationFrame(animateCursor);
}

animateCursor();

// Hover effects for interactive elements
document.querySelectorAll('a, button, .skill-tag, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.5)';
    cursor.style.borderColor = 'var(--secondary)';
  });
  
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.borderColor = 'var(--primary)';
  });
});

// Parallax effect for gradient orbs
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const orbs = document.querySelectorAll('.gradient-orb');
  
  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 0.3;
    orb.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Add typing effect to hero title (optional)
const heroName = document.querySelector('.hero-name');
if (heroName) {
  const text = heroName.textContent;
  heroName.textContent = '';
  heroName.style.opacity = '1';
  
  let i = 0;
  const typeSpeed = 100;
  
  setTimeout(() => {
    function typeWriter() {
      if (i < text.length) {
        heroName.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, typeSpeed);
      }
    }
    typeWriter();
  }, 1000);
}
console.log('%c👋 Olá! Obrigado por visitar meu portfólio!', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%c🚀 Interessado em trabalhar juntos? Entre em contato!', 'color: #ff006e; font-size: 14px;');