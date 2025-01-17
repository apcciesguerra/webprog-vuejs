window.addEventListener('scroll', () => {
  const body = document.body;
    
  // Check if the user has scrolled past the splash screen
  const scrollThreshold = window.innerHeight / 2; // Adjust if needed
  body.classList.toggle('scrolled', window.scrollY > scrollThreshold);
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
              observer.unobserve(entry.target); // Stop observing once shown
          }
      });
  }, {
      threshold: 0.1, // Trigger when 10% of the card is visible
  });

  cards.forEach((card) => observer.observe(card));
});
