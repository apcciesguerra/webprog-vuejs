window.addEventListener('scroll', () => {
    const body = document.body;
    body.classList.toggle('scrolled', window.scrollY > 20);
  });
  