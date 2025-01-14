window.addEventListener('scroll', () => {
    const body = document.body;
    
  // Check if the user has scrolled past the splash screen
  const scrollThreshold = window.innerHeight / 2; // Adjust if needed
  body.classList.toggle('scrolled', window.scrollY > scrollThreshold);
});
