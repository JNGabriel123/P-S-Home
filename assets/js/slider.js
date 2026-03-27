function initUmCarousel(sliderContainer) {
	if (!sliderContainer) return;

	const slidesWrapper = sliderContainer.querySelector(".slides");
	const slidesWrapperApto = sliderContainer.querySelector(".slidesApto");
	const slides = sliderContainer.querySelectorAll(".slide");
	const aptoSlides = sliderContainer.querySelectorAll(".slide-apto"); // renomeei para ficar mais claro
	const btnNext = sliderContainer.querySelector(".direita");
	const btnPrev = sliderContainer.querySelector(".esquerda");

	// Se não tiver nenhum tipo de slide, não faz nada
	if (slides.length === 0 && aptoSlides.length === 0) {
		console.info("Container sem slides:", sliderContainer);
		return;
	}

	// Se tiver apenas 1 slide (de qualquer tipo), desabilita navegação automática
	const totalSlides = Math.max(slides.length, aptoSlides.length);
	if (totalSlides <= 1) {
		console.info(
			`Carrossel com apenas ${totalSlides} slide(s) - navegação desabilitada`,
		);
		if (btnNext) btnNext.style.display = "none";
		if (btnPrev) btnPrev.style.display = "none";
		return;
	}

	let currentIndex = 0;
	let currentIndexApto = 0;
	let autoplayTimer;

	function showSlide() {
		if (slidesWrapper && slides.length > 0) {
			slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
		}
	}

	function showSlideApto() {
		if (slidesWrapperApto && aptoSlides.length > 0) {
			slidesWrapperApto.style.transform = `translateX(-${currentIndexApto * 100}%)`;
		}
	}

	function nextSlide() {
		if (slides.length > 0) {
			currentIndex = (currentIndex + 1) % slides.length;
		}
		if (aptoSlides.length > 0) {
			currentIndexApto = (currentIndexApto + 1) % aptoSlides.length;
		}
		showSlide();
		showSlideApto();
	}

	function prevSlide() {
		if (slides.length > 0) {
			currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		}
		if (aptoSlides.length > 0) {
			currentIndexApto =
				(currentIndexApto - 1 + aptoSlides.length) % aptoSlides.length;
		}
		showSlide();
		showSlideApto();
	}

	function startAutoplay() {
		if (autoplayTimer) clearInterval(autoplayTimer);
		autoplayTimer = setInterval(nextSlide, 4000);
	}

	function resetAutoplay() {
		if (autoplayTimer) clearInterval(autoplayTimer);
		startAutoplay();
	}

	// Só adiciona eventos se os botões existirem
	if (btnNext) {
		btnNext.removeEventListener("click", nextSlide);
		btnNext.addEventListener("click", () => {
			nextSlide();
			resetAutoplay();
		});
	}

	if (btnPrev) {
		btnPrev.removeEventListener("click", prevSlide);
		btnPrev.addEventListener("click", () => {
			prevSlide();
			resetAutoplay();
		});
	}

	// Inicia
	showSlide();
	showSlideApto();

	// Só inicia autoplay se houver mais de 1 slide
	if (totalSlides > 1) {
		startAutoplay();
	}

	// Retorna função para limpar (boa prática)
	return () => {
		if (autoplayTimer) clearInterval(autoplayTimer);
	};
}
