const carouselEl = document.querySelector('#carouselAyuda');

if (carouselEl) {
  const carousel = new bootstrap.Carousel(carouselEl, {
    interval: 4500,
    ride: 'carousel',
    pause: false,
    wrap: true
  });

  let userInteracted = false;

  // Pausa en hover
  carouselEl.addEventListener('mouseenter', () => {
    carousel.pause();
  });

  carouselEl.addEventListener('mouseleave', () => {
    if (!userInteracted) carousel.cycle();
  });

  // Detectar interacción
  carouselEl.addEventListener('click', () => {
    userInteracted = true;
    carousel.pause();
  });

  carouselEl.addEventListener('touchstart', () => {
    userInteracted = true;
    carousel.pause();
  });

  // Reanudar después de inactividad
  setInterval(() => {
    if (userInteracted) {
      userInteracted = false;
      carousel.cycle();
    }
  }, 8000);
}