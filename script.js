// Mini Garments — Interactivity (no external images)

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }

  // Header scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Add to cart demo
  let cartCount = 0;
  const cartCountEl = document.querySelector('.cart-count');
  const addButtons = document.querySelectorAll('.btn-add');

  addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      if (cartCountEl) {
        cartCountEl.textContent = cartCount;
        cartCountEl.style.transform = 'scale(1.4)';
        setTimeout(() => {
          cartCountEl.style.transform = 'scale(1)';
        }, 220);
      }

      const original = btn.textContent;
      btn.textContent = 'Added ✓';
      btn.style.background = '#7ED6C1';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
      }, 1300);
    });
  });

  // Newsletter
  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (input.value.trim()) {
        input.value = '';
        input.placeholder = 'Thanks for joining! 💛';
        setTimeout(() => {
          input.placeholder = 'Your email';
        }, 3000);
      }
    });
  }
});
