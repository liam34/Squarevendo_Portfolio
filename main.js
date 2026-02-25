// Loading page - Auto hide after 2 seconds with percentage counter
window.addEventListener('load', () => {
  const loadingPage = document.getElementById('loading-page');
  const percentageElement = document.getElementById('loading-percentage');
  const loadingBarWrapper = document.querySelector('.loading-bar-wrapper');
  
  if (loadingPage && percentageElement && loadingBarWrapper) {
    let currentPercent = 0;
    const targetPercent = 100;
    const duration = 2000; // 2 seconds in milliseconds
    const startTime = Date.now();
    const maxBarWidth = 200; // Maximum width in pixels
    
    // Animate percentage counter and loading bar
    const animatePercentage = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      currentPercent = Math.floor(progress * targetPercent);
      percentageElement.textContent = currentPercent + '%';
      
      // Update loading bar width to grow from center
      const barWidth = (currentPercent / 100) * maxBarWidth;
      loadingBarWrapper.style.width = barWidth + 'px';
      
      if (progress < 1) {
        requestAnimationFrame(animatePercentage);
      } else {
        // After 2 seconds, fade out the loading page
        setTimeout(() => {
          loadingPage.classList.add('fade-out');
          setTimeout(() => {
            loadingPage.style.display = 'none';
          }, 600);
        }, 100);
      }
    };
    
    animatePercentage();
  }
});

// Mobile menu toggle (Art Studio pattern)
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    if (menuBtnIcon) {
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-4-line");
    }
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      if (menuBtnIcon) {
        menuBtnIcon.setAttribute("class", "ri-menu-4-line");
      }
    }
  });
}

// Scroll Reveal for hero (when ScrollReveal is loaded)
if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 800,
  };

  ScrollReveal().reveal(".hero__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".hero__content h2", {
    ...scrollRevealOption,
    delay: 200,
  });
  ScrollReveal().reveal(".hero__content h1", {
    ...scrollRevealOption,
    delay: 400,
  });
  ScrollReveal().reveal(".hero__content p", {
    ...scrollRevealOption,
    delay: 600,
  });
  ScrollReveal().reveal(".hero__btn", {
    ...scrollRevealOption,
    delay: 800,
  });
  ScrollReveal().reveal(".hero__socials a", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 100,
  });
}

// Project filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.style.backgroundColor = "";
    });
    button.classList.add("active");
    button.style.backgroundColor = "";

    const filter = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
