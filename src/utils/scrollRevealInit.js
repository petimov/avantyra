import ScrollReveal from 'scrollreveal';

export function initScrollReveal() {
  ScrollReveal().clean('.about-img, .cover-img, .fade-in');

  const options = {
    distance: "150px",
    origin: "bottom",
    duration: 1000,
    easing: "ease",
    reset: false,
    cleanup: true,
  };

  ScrollReveal().reveal('.about-img, .cover-img, .fade-in', options);
}