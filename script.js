// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Reveal animations
const revealElements = document.querySelectorAll(
  ".hero-copy, .hero-art, .feature-card, .service-row, .work-card, .process-item, .contact-info, .contact-form"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});

// Contact form demo
const form = document.querySelector("#contactForm");
const message = document.querySelector("#formMessage");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    message.textContent =
      "Thanks! Your sweet idea has been received 🍦✨";

    form.reset();
  });
}

// Close mobile menu after clicking a link
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (nav) nav.classList.remove("open");
  });
});
