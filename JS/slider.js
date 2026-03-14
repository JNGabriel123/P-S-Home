//* Carrossel de imagens da section turismo
function iniciarSlider() {

const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const next = document.querySelector(".direita");
const prev = document.querySelector(".esquerda");

let index = 0;
let tempo = 4000;
let autoplay;

function mostrarSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function proximo() {
  index++;

  if (index >= slide.length) {
    index = 0;
  }

  mostrarSlide();
}

function anterior() {
  index--;

  if (index < 0) {
    index = slide.length - 1;
  }

  mostrarSlide();
}

function iniciarAuto() {
  autoplay = setInterval(proximo, tempo);
}

function resetAuto() {
  clearInterval(autoplay);
  iniciarAuto();
}

next.addEventListener("click", () => {
  proximo();
  resetAuto();
});

prev.addEventListener("click", () => {
  anterior();
  resetAuto();
});

iniciarAuto();

}