// Loading page with percentage counter - Auto hide after 3 seconds
window.addEventListener('load', () => {
  const loadingPage = document.getElementById('loading-page');
  const percentageCounter = document.getElementById('percentage-counter');
  
  if (loadingPage && percentageCounter) {
    let percentage = 0;
    const duration = 3000; // 3 seconds
    const increment = 100 / (duration / 50); // Update every 50ms
    
    const percentageInterval = setInterval(() => {
      if (percentage < 100) {
        percentage = Math.min(percentage + increment, 100);
        percentageCounter.textContent = Math.floor(percentage) + '%';
      } else {
        clearInterval(percentageInterval);
      }
    }, 50);
    
    setTimeout(() => {
      loadingPage.classList.add('fade-out');
      setTimeout(() => {
        loadingPage.style.display = 'none';
      }, 600);
    }, 3000);
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
