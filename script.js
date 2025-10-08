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
      if (visibility && visibility === "block") {
        document.getElementById(`faq-${i}`).classList.remove("expanded");
        document.getElementById(`faq-${i}`).classList.add("collapsed");
        document.getElementById(`faq-${i}`).style.display = "none";
        document.getElementById(`plus-${i}`).textContent = "+";
      } else {
        document.getElementById(`faq-${i}`).classList.add("expanded");
        document.getElementById(`faq-${i}`).classList.remove("collapsed");
        document.getElementById(`faq-${i}`).style.display = "block";
        document.getElementById(`plus-${i}`).textContent = "-";
      }
    });
  });
})();
