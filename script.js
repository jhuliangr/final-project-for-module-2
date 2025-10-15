/**
 * Mobile Navigation Toggle
 * Handles the opening and closing of the mobile navigation menu
 */

(function () {
  "use strict";

  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      this.setAttribute("aria-expanded", !isExpanded);
      mainNav.classList.toggle("active");
    });

    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mainNav.classList.remove("active");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
        mobileMenuToggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (
        mainNav.classList.contains("active") &&
        !mainNav.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
      ) {
        mainNav.classList.remove("active");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /**
   * Smooth scroll enhancement for anchor links
   */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href === "#" || href === "#start") {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  //==========================================================================================
  // handmade JS:
  //==========================================================================================
  const pictures = [
    "https://img.freepik.com/foto-gratis/estilo-vintage-playa-paraiso-tropical_53876-14481.jpg",
    "https://img.freepik.com/foto-gratis/fondo-vintage-diseno-nube-grunge_1048-4187.jpg",
    "https://img.freepik.com/foto-gratis/fondo-estilo-grunge-nubes-cielo_1048-2903.jpg",
    "https://img.freepik.com/foto-gratis/detallado-fondo-textura-estilo-grunge_1048-6236.jpg",
    "https://img.freepik.com/foto-gratis/hermoso-fondo-cobre-oxidado-verdigris_24837-103.jpg",
    "https://img.freepik.com/foto-gratis/musica-antigua_1048-3366.jpg",
  ];
  document.getElementById("images-container").innerHTML = pictures
    .map((p, i) => {
      return `<img src="${p}" alt="picture_${i}" class="picture">`;
    })
    .join("");

  const FAQsArray = [1, 2, 3, 4, 5, 6];
  document.getElementById("faqs").innerHTML = FAQsArray.map((i) => {
    return `<div class="faq-element">
        <div class="faq-element-question">
            <div class="faq-elemet-question-text">
                Question text goes here
            </div>
            <div class="faq-elemet-question-plus" id="plus-${i}">
                +
            </div>
        </div>
        <p class="answer collapsed" id="faq-${i}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus pulvinar urna. Quisque
            commodo ante vel odio elementum, quis sagittis dolor efficitur.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec rhoncus pulvinar urna. Quisque commodo ante vel odio
            elementum
        </p>
    </div>`;
  }).join("");

  FAQsArray.map((i) => {
    document.getElementById(`plus-${i}`).addEventListener("click", function () {
      let visibility = document.getElementById(`faq-${i}`).style.display;
      const faqElement = document.getElementById(`faq-${i}`);
      const plusElement = document.getElementById(`plus-${i}`);

      if (visibility && visibility === "block") {
        faqElement.classList.remove("expanded");
        faqElement.classList.add("collapsed");
        faqElement.style.display = "none";
        plusElement.textContent = "+";
      } else {
        faqElement.classList.add("expanded");
        faqElement.classList.remove("collapsed");
        faqElement.style.display = "block";
        plusElement.textContent = "-";
      }
    });
  });
  // for the cards
  const observerCallback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.3,
  });

  const elements = document.querySelectorAll(".feature-card");
  elements.forEach((el) => observer.observe(el));

  // For the pictures
  const observerCallback1 = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in-picture");
        observer.unobserve(entry.target);
      }
    });
  };
  const observer1 = new IntersectionObserver(observerCallback1, {
    threshold: 0.3,
  });

  const elements1 = document.querySelectorAll(".picture");
  elements1.forEach((el) => observer1.observe(el));

  // for the FAQs
  const observerCallback2 = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in-faq");
        observer.unobserve(entry.target);
      }
    });
  };
  const observer2 = new IntersectionObserver(observerCallback2, {
    threshold: 0.3,
  });

  const elements2 = document.querySelectorAll(".faq-element");
  elements2.forEach((el) => observer2.observe(el));

  const observerCallback3 = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  };
  const observer3 = new IntersectionObserver(observerCallback3, {
    threshold: 0.3,
  });

  const elements3 = document.querySelectorAll(".appear");
  elements3.forEach((el) => observer3.observe(el));

  const observerCallback4 = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  };
  const observer4 = new IntersectionObserver(observerCallback4, {
    threshold: 0.3,
  });
  const element4 = document.querySelectorAll("#picture");
  element4.forEach((el) => observer4.observe(el));
})();
