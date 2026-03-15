// ─────────────────────────────────────────────
// Área NOVA para Apartamentos (independente)
// ─────────────────────────────────────────────
const iconesApartamentos = document.querySelectorAll(".item-icone-apto"); // nova classe
const areaExpansivelApto = document.getElementById("areaExpansivelApto");

let aptoAtual = null;

// Objeto com os conteúdos dos apartamentos (exemplo)
const conteudosApto = {
  apt01: `
  <section class="sect-apts-01-slides">
      <img src="Icons/icon-apt-101.png" alt="" class="img-icon-slider" />
      <div class="cont-apts-slides">
        <div class="slider">
          <button class="seta esquerda"><p>&#10094;</p></button>
          <div class="slides">
            <img
              src="Imagens/Carrossel-apts/IMG_2341-apt1.jpeg"
              class="slide active"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2346-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2351-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2354-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2357-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2359-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2362-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2366-apt1.jpeg"
              class="slide"
            />

            <img
              src="Imagens/Carrossel-apts/IMG_2371-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2375-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2406-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2409-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2411-apt1.jpeg"
              class="slide"
            />
          </div>
          <button class="seta direita"><p>&#10095;</p></button>
        </div>
        <div class="cont-itens-info-apt">
          <div class="sub-cont-info-apt">
            <div class="itens-info-apt">
              <img src="Icons/icon-01-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt">
                <span>Apt. mobilhado</span>
                <br />
                <span>e climatizado</span>
              </div>
            </div>
            <div class="itens-info-apt info-02">
              <img src="Icons/icon-02-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt itens-info-02-apt">
                <span>Cozinha</span>
                <br />
                <span>completa</span>
              </div>
            </div>
            <div class="itens-info-apt">
              <img src="Icons/icon-03-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt itens-info-03-apt">
                <span>Wi-Fi</span>
              </div>
            </div>
            <div class="itens-info-apt">
              <img src="Icons/icon-04-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt">
                <span>Roupas de</span>
                <br />
                <span>cama e banho</span>
              </div>
            </div>
            <div class="itens-info-apt">
              <img src="Icons/icon-05-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt">
                <span>Campo Novo</span>
                <br />
                <span>do Parecis-mt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  apt02: `
  <section class="sect-apts-01-slides">
      <img src="Icons/icon-apt-102.png" alt="" class="img-icon-slider" />
      <div class="cont-apts-slides">
        <div class="slider">
          <button class="seta esquerda"><p>&#10094;</p></button>
          <div class="slides">
            <img
              src="Imagens/Carrossel-apts/IMG_2377-apt1.jpeg"
              class="slide active"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2382-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2385-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2386-apt1.jpeg"
              class="slide"
            />
            <img src="Imagens/Carrossel-apts/IMG_2390-apt1.jpeg" class="slide" />
            <img src="Imagens/Carrossel-apts/IMG_2395-apt1.jpeg" class="slide" />
            <img
              src="Imagens/Carrossel-apts/IMG_2396-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2403-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2406-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2409-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2411-apt1.jpeg"
              class="slide"
            />
          </div>
          <button class="seta direita"><p>&#10095;</p></button>
        </div>
        <div class="cont-itens-info-apt">
          <div class="sub-cont-info-apt">
            <div class="itens-info-apt">
              <img src="Icons/icon-01-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt">
                <span>Apt. mobilhado</span>
                <br />
                <span>e climatizado</span>
              </div>
            </div>
            <div class="itens-info-apt info-02">
              <img src="Icons/icon-02-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt itens-info-02-apt">
                <span>Cozinha</span>
                <br />
                <span>completa</span>
              </div>
            </div>
            <div class="itens-info-apt">
              <img src="Icons/icon-03-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt itens-info-03-apt">
                <span>Wi-Fi</span>
              </div>
            </div>
            <div class="itens-info-apt">
              <img src="Icons/icon-04-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt">
                <span>Roupas de</span>
                <br />
                <span>cama e banho</span>
              </div>
            </div>
            <div class="itens-info-apt">
              <img src="Icons/icon-05-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt">
                <span>Campo Novo</span>
                <br />
                <span>do Parecis-mt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  apt03: `
  <section class="sect-apts-01-slides">
      <img src="Icons/icon-apt-103.png" alt="" class="img-icon-slider" />
      <div class="cont-apts-slides">
        <div class="slider">
          <button class="seta esquerda"><p>&#10094;</p></button>
          <div class="slides">
            <img
              src="Imagens/Carrossel-apts/IMG_2414-apt1.jpeg"
              class="slide active"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2420-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2424-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2426-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2429-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2432-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2436-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2437-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2446-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2439-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2440-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2447-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2451-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2458-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2406-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2409-apt1.jpeg"
              class="slide"
            />
            <img
              src="Imagens/Carrossel-apts/IMG_2411-apt1.jpeg"
              class="slide"
            />
          </div>
          <button class="seta direita"><p>&#10095;</p></button>
        </div>
        <div class="cont-itens-info-apt">
          <div class="sub-cont-info-apt">
            <div class="itens-info-apt">
              <img src="Icons/icon-01-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt">
                <span>Apt. mobilhado</span>
                <br />
                <span>e climatizado</span>
              </div>
            </div>
            <div class="itens-info-apt info-02">
              <img src="Icons/icon-02-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt itens-info-02-apt">
                <span>Cozinha</span>
                <br />
                <span>completa</span>
              </div>
            </div>
            <div class="itens-info-apt">
              <img src="Icons/icon-03-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt itens-info-03-apt">
                <span>Wi-Fi</span>
              </div>
            </div>
            <div class="itens-info-apt">
              <img src="Icons/icon-04-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt">
                <span>Roupas de</span>
                <br />
                <span>cama e banho</span>
              </div>
            </div>
            <div class="itens-info-apt">
              <img src="Icons/icon-05-blocoBaixo.png" alt="" />
              <div class="text-cont-info-apt">
                <span>Campo Novo</span>
                <br />
                <span>do Parecis-mt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};

function mostrarApto(nomeApto) {
  // Fecha se clicar no mesmo
  if (
    aptoAtual === nomeApto &&
    areaExpansivelApto.classList.contains("aberto")
  ) {
    areaExpansivelApto.classList.remove("aberto");
    areaExpansivelApto.style.maxHeight = "0px";
    aptoAtual = null;
    return;
  }

  // Insere conteúdo
  if (conteudosApto[nomeApto]) {
    areaExpansivelApto.innerHTML = conteudosApto[nomeApto];
  } else {
    areaExpansivelApto.innerHTML = "<p>Apartamento não encontrado</p>";
  }

  // Expande
  areaExpansivelApto.classList.add("aberto");
  const altura = areaExpansivelApto.scrollHeight + 60;
  areaExpansivelApto.style.maxHeight = altura + "px";

  aptoAtual = nomeApto;

  // Scroll suave até a área do apartamento
  setTimeout(() => {
    areaExpansivelApto.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 300);

  // Inicializa carrossel(s) depois de inserir
  setTimeout(() => {
    const sliders = areaExpansivelApto.querySelectorAll(".slider");
    sliders.forEach((slider) => initUmCarousel(slider)); // sua função do carrossel
  }, 200);
}

// Adiciona os eventos nos boxes de apartamentos
iconesApartamentos.forEach((icone) => {
  icone.addEventListener("click", () => {
    const nomeApto = icone.getAttribute("data-apto");
    mostrarApto(nomeApto);
  });
});
