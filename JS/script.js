// Pega todos os ícones clicáveis
const icones = document.querySelectorAll(".item-icone"); // ← mude para sua classe real

// Pega a área que expande
const areaExpansivel = document.getElementById("areaExpansivel");
const subSecaoAoRedorSupermercados = document.getElementById(
	"sub-secao-aoRedor-supermercados",
);

// Guarda qual conteúdo está aberto no momento
let conteudoAtual = null;

// Conteúdos (você coloca o HTML real de cada um aqui)
const conteudos = {
	turismo: `
    <section class="secao-turismo">
      <img src="Icons/icons-sect02-02.png" alt="" class="img-icon-slider" />
      <div class="slider">
        <button class="seta esquerda"><p>&#10094;</p></button>

        <div class="slides">
          <img
            src="Imagens/Carrossel-secao/rioverde.jpeg"
            class="slide active"
          />
          <img src="Imagens/Carrossel-secao/saltobelo.jpeg" class="slide" />
          <img src="Imagens/Carrossel-secao/saltodamulher.jpeg" class="slide" />
          <img
            src="Imagens/Carrossel-secao/saltoultiariti.jpeg"
            class="slide"
          />
          <img src="Imagens/Carrossel-secao/rioverde.jpeg" class="slide" />
          <img src="Imagens/Carrossel-secao/saltobelo.jpeg" class="slide" />
          <img src="Imagens/Carrossel-secao/saltodamulher.jpeg" class="slide" />
          <img
            src="Imagens/Carrossel-secao/saltoultiariti.jpeg"
            class="slide"
          />
        </div>

        <button class="seta direita"><p>&#10095;</p></button>
      </div>

      <div id="locaisimg-secao">
        <div class="sub-cont-local">
          <div class="local-cont">
            <div class="sub-cont-itens-local">
              <img src="Icons/icon-localizacao.png" alt="" />
              <a
                href="https://maps.app.goo.gl/44NjxtJbuRUyFYMs8"
                target="_blank"
                >Balneário Rio Verde</a
              >
            </div>
          </div>
          <div class="local-cont">
            <div class="sub-cont-itens-local">
              <img src="Icons/icon-localizacao.png" alt="" />
              <a
                href="https://maps.app.goo.gl/fAB3EsrUszgyTmFB6"
                target="_blank"
                >Aldeia Salto da Mulher</a
              >
            </div>
          </div>
          <div class="local-cont">
            <div class="sub-cont-itens-local">
              <img src="Icons/icon-localizacao.png" alt="" />
              <a
                href="https://maps.app.goo.gl/fPo2GaF1dfvCKCAA8"
                target="_blank"
                >Aldeira Wazzare</a
              >
            </div>
          </div>
          <br />
          <div class="local-cont">
            <div class="sub-cont-itens-local">
              <img src="Icons/icon-localizacao.png" alt="" />
              <a
                href="https://maps.app.goo.gl/zcZL46gjRyqcRHxY7"
                target="_blank"
                >Cachoeira Salto Belo</a
              >
            </div>
          </div>
          <div class="local-cont">
            <div class="sub-cont-itens-local">
              <img src="Icons/icon-localizacao.png" alt="" />
              <a
                href="https://maps.app.goo.gl/yBnNctMfY6fWCdUN9"
                target="_blank"
                >Aldeira Rio Sacre</a
              >
            </div>
          </div>
          <div class="local-cont">
            <div class="sub-cont-itens-local">
              <img src="Icons/icon-localizacao.png" alt="" />
              <a
                href="https://maps.app.goo.gl/sS1MhzFvXdy1ksTS8"
                target="_blank"
                >Aldeia 4 cachoeiras</a
              >
            </div>
          </div>
          <br />
          <div class="local-cont">
            <div class="sub-cont-itens-local">
              <img src="Icons/icon-localizacao.png" alt="" />
              <a
                href="https://maps.app.goo.gl/V1VUyoiZdmi1MWFo8"
                target="_blank"
                >Salto Utiariti</a
              >
            </div>
          </div>
          <div class="local-cont">
            <div class="sub-cont-itens-local">
              <img src="Icons/icon-localizacao.png" alt="" />
              <a
                href="https://maps.app.goo.gl/z8Yp2MUb7T5UVdb26"
                target="_blank"
                >Aldeia Ponde de Pedra</a
              >
            </div>
          </div>
          <div class="local-cont">
            <div class="sub-cont-itens-local">
              <img src="Icons/icon-localizacao.png" alt="" />
              <a
                href="https://maps.app.goo.gl/7hihmb7g7tc6aKv39"
                target="_blank"
                >Aldeia Chapada Azul</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

	aoredor: `
    <section class="secao-aoRedor">
      <div class="cont-aoRedor">
        <div class="cont-iconLocaliza-aoRedor">
          <img src="Icons/icon-localiza-aoRedor.png" alt="">
          <h1>Ao Redor</h1>
        </div>
        <div class="sub-cont-aoRedor">
          <div class="caixa-icons-aoRedor sub-icone" data-subsecao="supermercados">
            <img src="Icons/icon-aoRedor-01.png" alt="" />
            <p>Supermercados</p>
          </div>
          <div class="caixa-icons-aoRedor sub-icone" data-subsecao="restaurantes">
            <img src="Icons/icon-aoRedor-02.png" alt="" />
            <p>Restaurantes</p>
          </div>
          <div class="caixa-icons-aoRedor sub-icone" data-subsecao="farmacias">
            <img src="Icons/icon-aoRedor-03.png" alt="" />
            <p>Farmácias</p>
          </div>
          <div class="caixa-icons-aoRedor sub-icone" data-subsecao="postos">
            <img src="Icons/icon-aoRedor-04.png" alt="" />
            <p>Postos</p>
          </div>
        </div>

        <div class="cont-text-aoRedor">
          <h3>Sugestões de comércios e serviços próximos</h3>
          <p>
            Para tornar sua estadia ainda mais prática, reunimos sugestões de
            comércios e serviços essenciais localizados próximos ao apartamento.
            Tudo foi pensado para facilitar sua rotina, oferecendo conveniência,
            agilidade e tranquilidade durante sua permanência
          </p>
        </div>
      </div>
    </section>
  `,
};

// Função que abre/troca o conteúdo
function mostrarConteudo(nome) {
	// Se clicou no mesmo ícone que já está aberto → fecha tudo
	if (conteudoAtual === nome && areaExpansivel.classList.contains("aberto")) {
		areaExpansivel.classList.remove("aberto");
		subSecaoAoRedorSupermercados.classList.remove("ativo"); // Esconde a sub-seção de supermercados
		areaExpansivel.style.maxHeight = "0px";
		conteudoAtual = null;
		return;
	}

	// Coloca o conteúdo correspondente
	if (conteudos[nome]) {
		areaExpansivel.innerHTML = conteudos[nome];
	} else {
		areaExpansivel.innerHTML =
			'<div class="conteudo-interno"><p>Conteúdo não encontrado</p></div>';
	}

	// iniciarSlider();

	// Abre / expande
	areaExpansivel.classList.add("aberto");
	const alturaReal = areaExpansivel.scrollHeight + 50; // margem de segurança
	areaExpansivel.style.maxHeight = alturaReal + "px";

	// Marca qual está aberto
	conteudoAtual = nome;

	// ← NOVO: Rola suavemente até o conteúdo ficar visível
	setTimeout(() => {
		areaExpansivel.scrollIntoView({
			behavior: "smooth", // animação suave
			block: "start", // alinha o topo do elemento com o topo da viewport
			inline: "nearest",
		});
	}, 500);
}

// Adiciona o evento de clique em cada ícone
icones.forEach((icone) => {
	icone.addEventListener("click", () => {
		const nome = icone.getAttribute("data-conteudo");
		mostrarConteudo(nome);
	});
});

//* Controle de class expande e contrai para o conteúdo "Ao Redor" *//

// Controle dos sub-ícones dentro de "Ao Redor"
document.addEventListener("click", function (e) {
	const subIcone = e.target.closest(".sub-icone");
	if (!subIcone) return;

	const subsecao = subIcone.dataset.subsecao;
	if (!subsecao) return;

	// Esconde todas as sub-seções
	document.querySelectorAll('[class^="sub-secao-aoRedor-"]').forEach((el) => {
		el.classList.remove("ativo");
	});

	// Mostra a escolhida
	const secaoAlvo = document.querySelector(`.sub-secao-aoRedor-${subsecao}`);
	if (secaoAlvo) {
		secaoAlvo.classList.add("ativo");

		// Scroll suave até a seção que apareceu
		setTimeout(() => {
			secaoAlvo.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}, 100);
	}
});
