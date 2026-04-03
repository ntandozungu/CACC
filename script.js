// ===========================
// CACC Church Website Scripts
// ===========================

document.addEventListener('DOMContentLoaded', function() {
  // ===========================
  // Mobile Navigation Toggle
  // ===========================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // ===========================
  // Navbar Scroll Effect
  // ===========================
  const navbar = document.getElementById('navbar');
  
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on page load

  // ===========================
  // Active Navigation Link
  // ===========================
  const sections = document.querySelectorAll('section[id]');
  
  function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');

      if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
        navLink.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();

  // ===========================
  // Smooth Scroll for Anchor Links
  // ===========================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===========================
  // Back to Top Button
  // ===========================
  const backToTopButton = document.getElementById('backToTop');

  function toggleBackToTop() {
    if (window.scrollY > 500) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleBackToTop);

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ===========================
  // Scroll Animations
  // ===========================
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(function(element) {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on page load

  // ===========================
  // Scripture Slider
  // ===========================
  const slides = document.querySelectorAll('.scripture-slide');
  const dotsContainer = document.getElementById('scriptureDots');
  let currentSlide = 0;
  let slideInterval;

  // Create dots
  slides.forEach(function(_, index) {
    const dot = document.createElement('button');
    dot.classList.add('scripture-dot');
    dot.setAttribute('aria-label', 'Go to scripture ' + (index + 1));
    if (index === 0) dot.classList.add('active');
    
    dot.addEventListener('click', function() {
      goToSlide(index);
      resetInterval();
    });
    
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.scripture-dot');

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  startInterval();

  // Pause on hover
  const scriptureSlider = document.getElementById('scriptureSlider');
  scriptureSlider.addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
  });
  
  scriptureSlider.addEventListener('mouseleave', function() {
    startInterval();
  });

  // ===========================
  // Intersection Observer for Better Performance
  // ===========================
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    animatedElements.forEach(function(element) {
      observer.observe(element);
    });
  }
});
