function initUmCarousel(sliderContainer) {
  if (!sliderContainer) return;

  const slidesWrapper = sliderContainer.querySelector('.slides');
  const slides = sliderContainer.querySelectorAll('.slide');
  const btnNext = sliderContainer.querySelector('.direita');
  const btnPrev = sliderContainer.querySelector('.esquerda');

  // Se faltar algum elemento essencial → ignora silenciosamente
  if (!slidesWrapper || slides.length === 0 || !btnNext || !btnPrev) {
    console.warn("Carrossel incompleto neste container:", sliderContainer);
    
    return;
    
  }

  let currentIndex = 0;
  let autoplayTimer;

  function showSlide() {
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide();
  }

  function startAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, 4000); // 4 segundos
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  // Remove listeners antigos para evitar duplicação
  btnNext.removeEventListener('click', nextSlide);
  btnPrev.removeEventListener('click', prevSlide);

  btnNext.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });

  btnPrev.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });

  // Inicia
  showSlide();
  startAutoplay();

  // Retorna função para limpar o timer (útil quando fecha a seção)
  return () => clearInterval(autoplayTimer);
}