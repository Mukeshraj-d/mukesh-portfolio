// Typing effect
const typingElement = document.querySelector(".typing");
const texts = ["B.Tech IT Student", "Aspiring Software Engineer", "Web Developer", "Tech Enthusiast"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  let current = texts[i];
  if (isDeleting) {
    typingElement.textContent = current.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  } else {
    typingElement.textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });

faders.forEach(fader => appearOnScroll.observe(fader));
