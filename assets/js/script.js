function fecharTudo() {
	// Fecha área principal (turismo, ao redor, regras, contatos...)
	if (areaExpansivel.classList.contains("aberto")) {
		areaExpansivel.classList.remove("aberto");
		areaExpansivel.style.maxHeight = "0px";
	}

	// Fecha qualquer sub-seção de "Ao Redor"
	document
		.querySelectorAll('[class^="sub-secao-aoRedor-"].ativo')
		.forEach((el) => {
			el.classList.remove("ativo");
		});

	// Fecha área de apartamentos
	if (areaExpansivelApto && areaExpansivelApto.classList.contains("aberto")) {
		areaExpansivelApto.classList.remove("aberto");
		areaExpansivelApto.style.maxHeight = "0px";
	}

	// Reseta variáveis de controle
	conteudoPrincipalAtual = null;
	subsecaoAtual = null;
	aptoAtual = null;
}

// =============================================
// Variáveis principais
// =============================================
const iconesPrincipais = document.querySelectorAll(".item-icone");
const areaExpansivel = document.getElementById("areaExpansivel");

let conteudoPrincipalAtual = null; // qual seção principal está aberta
let subsecaoAtual = null; // qual sub-seção de "Ao Redor" está aberta

// Conteúdos (você coloca o HTML real de cada um aqui)
const conteudos = {
	turismo: `
  <section class="secao-turismo">
    <img src="assets/img/icons/icons-sect02-02.png" alt="" class="img-icon-slider" />
    <div class="slider">
      <button class="seta esquerda"><p>&#10094;</p></button>

      <div class="slides">
        <img
          src="assets/img/img-carrosselSect1/4 CACHOEIRAS 4.png"
          class="slide active" />
        <img src="assets/img/img-carrosselSect1/SALTO BELO 1.png" class="slide" />
        <img
          src="assets/img/img-carrosselSect1/SALTO DA MULHER 1.png"
          class="slide" />
        <img
          src="assets/img/img-carrosselSect1/PONTE DE PEDRA 2.png"
          class="slide" />
        <img
          src="assets/img/img-carrosselSect1/PONTE DE PEDRA 4.png"
          class="slide" />
        <img src="assets/img/img-carrosselSect1/4 CACHOEIRAS 2.png" class="slide" />
        <img
          src="assets/img/img-carrosselSect1/ALDEIA 4 CACHOEIRAS.jpg"
          class="slide" />
        <img src="assets/img/img-carrosselSect1/RIO SACRE 1.png" class="slide" />
        <img
          src="assets/img/img-carrosselSect1/CHAPADA AZUL 3.png"
          alt=""
          class="slide" />
        <img
          src="assets/img/img-carrosselSect1/SALTO UTIARITI. 2.png"
          alt=""
          class="slide" />
      </div>

      <button class="seta direita"><p>&#10095;</p></button>
    </div>

    <div id="locaisimg-secao">
      <div class="sub-cont-local">
        <div class="local-cont">
          <div class="sub-cont-itens-local">
            <img src="assets/img/icons/icon-localizacao.png" alt="" />
            <a href="https://maps.app.goo.gl/44NjxtJbuRUyFYMs8" target="_blank"
              >Balneário Rio Verde</a
            >
          </div>
        </div>
        <div class="local-cont">
          <div class="sub-cont-itens-local">
            <img src="assets/img/icons/icon-localizacao.png" alt="" />
            <a href="https://maps.app.goo.gl/fAB3EsrUszgyTmFB6" target="_blank"
              >Aldeia Salto da Mulher</a
            >
          </div>
        </div>
        <div class="local-cont">
          <div class="sub-cont-itens-local">
            <img src="assets/img/icons/icon-localizacao.png" alt="" />
            <a href="https://maps.app.goo.gl/fPo2GaF1dfvCKCAA8" target="_blank"
              >Aldeira Wazzare</a
            >
          </div>
        </div>
        <div class="local-cont">
          <div class="sub-cont-itens-local">
            <img src="assets/img/icons/icon-localizacao.png" alt="" />
            <a href="https://maps.app.goo.gl/zcZL46gjRyqcRHxY7" target="_blank"
              >Cachoeira Salto Belo</a
            >
          </div>
        </div>
        <div class="local-cont">
          <div class="sub-cont-itens-local">
            <img src="assets/img/icons/icon-localizacao.png" alt="" />
            <a href="https://maps.app.goo.gl/yBnNctMfY6fWCdUN9" target="_blank"
              >Aldeira Rio Sacre</a
            >
          </div>
        </div>
        <div class="local-cont">
          <div class="sub-cont-itens-local">
            <img src="assets/img/icons/icon-localizacao.png" alt="" />
            <a href="https://maps.app.goo.gl/sS1MhzFvXdy1ksTS8" target="_blank"
              >Aldeia 4 cachoeiras</a
            >
          </div>
        </div>
        <div class="local-cont">
          <div class="sub-cont-itens-local">
            <img src="assets/img/icons/icon-localizacao.png" alt="" />
            <a href="https://maps.app.goo.gl/V1VUyoiZdmi1MWFo8" target="_blank"
              >Salto Utiariti</a
            >
          </div>
        </div>
        <div class="local-cont">
          <div class="sub-cont-itens-local">
            <img src="assets/img/icons/icon-localizacao.png" alt="" />
            <a href="https://maps.app.goo.gl/z8Yp2MUb7T5UVdb26" target="_blank"
              >Aldeia Ponde de Pedra</a
            >
          </div>
        </div>
        <div class="local-cont">
          <div class="sub-cont-itens-local">
            <img src="assets/img/icons/icon-localizacao.png" alt="" />
            <a href="https://maps.app.goo.gl/7hihmb7g7tc6aKv39" target="_blank"
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
          <img src="assets/img/icons/icon-localiza-aoRedor.png" alt="">
          <h1>Ao Redor</h1>
        </div>
        <div class="sub-cont-aoRedor">
          <div class="caixa-icons-aoRedor sub-icone" data-subsecao="supermercados">
            <img src="assets/img/icons/icon-aoRedor-01.png" alt="" />
            <p>Supermercados</p>
          </div>
          <div class="caixa-icons-aoRedor sub-icone" data-subsecao="restaurantes">
            <img src="assets/img/icons/icon-aoRedor-02.png" alt="" />
            <p>Restaurantes</p>
          </div>
          <div class="caixa-icons-aoRedor sub-icone" data-subsecao="farmacias">
            <img src="assets/img/icons/icon-aoRedor-03.png" alt="" />
            <p>Farmácias</p>
          </div>
          <div class="caixa-icons-aoRedor sub-icone" data-subsecao="postos">
            <img src="assets/img/icons/icon-aoRedor-04.png" alt="" />
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

	regrasCasa: `
    <section class="sect-regrasCasa">
      <div class="cont-sect-regrasCasa">
        <div class="cont-hCckin-ckout">
          <div class="box-check">
            <p>check-in</p>
            <span style="background-color: rgb(0, 183, 219);">15:00h</span>
          </div>
          <div class="box-check">
            <p>check-out</p>
            <span style="background-color: rgb(0, 52, 136);">12:00h</span>
          </div>
          <div class=" max-pess">
            <p>máximo</p>
            <span style="background-color: rgb(0, 156, 8);">
              <img src="assets/img/icons/icon-pess-regrasCasa.png" alt="" />
              06
            </span>
          </div>
        </div>
        <div class="text-sect-regrasCasa">
          <h2>
            Diretrizes estabelecidas para garantir o bom uso do espaço e o
            respeito à vizinhança.
          </h2>
          <div class="box-text-regrasCasa">
            <ol type="1">
              <b>
                <li>Horários e Acesso</li>
              </b>
            </ol>
            <ul>
              <li>
                Check-in e Check-out: Respeite rigorosamente os horários.
                Atrasos no check-out podem gerar cobranças de taxas extras.
              </li>
              <li>
                Silêncio: Geralmente vigora entre 22h e 08h. Evite música alta
                ou barulhos em áreas comuns durante este período
              </li>
            </ul>
          </div>

          <div class="box-text-regrasCasa">
            <ol type="1" start="2">
              <b>
                <li>Uso do Espaço</li>
              </b>
            </ol>
            <ul>
              <li>
                Hóspedes Adicionais: É proibido levar pessoas que não constam na
                reserva sem autorização prévia.
              </li>
              <li>
                Festas e Eventos: O Airbnb possui uma política global que proíbe
                festas e eventos que perturbem a vizinhança.
              </li>
            </ul>
          </div>

          <div class="box-text-regrasCasa">
            <ol type="1" start="3">
              <b>
                <li>Proibições Gerais</li>
              </b>
            </ol>
            <ul>
              <li>
                Fumo: Extremamente proibido fumar em ambientes fechados... se
                detectado resultará em multas para limpeza, conforme regras
                estabelecidas pelo Airbnb.
              </li>
              <li>
                Drogas: O consumo de substâncias ilícitas é estritamente
                proibido.
              </li>
            </ul>
          </div>
           
          <div class="box-text-regrasCasa">
            <ol type="1" start="4">
              <b>
                <li>Limpeza e Organização</li>
              </b>
            </ol>
            <ul>
              <li>
                Lixo: O hóspede deve levar o lixo para os coletores indicados
                pelo anfitrião.
              </li>
              <li>
                Louça: Geralmente espera-se que a louça utilizada seja lavada
                antes da saída.
              </li>
              <li>
                Energia e Água: Apague luzes e desligue o ar-condicionado ao
                sair do imóvel para evitar desperdícios.
              </li>
            </ul>
          </div>
          <div class="box-text-regrasCasa">
            <ol type="1" start="5">
              <b>
                <li>Segurança</li>
              </b>
            </ol>
            <ul>
              <li>
                Chaves e Acesso: Nunca entregue as chaves a terceiros, a não ser
                os indicados pelo anfitrião. Em caso de perda, o custo da troca
                da fechadura será repassado ao hóspede.
              </li>
              <li>Janelas e Portas: Devem ser mantidas trancadas ao sair.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
	contatos: `
  <section class="sect-contat">
      <div class="cont-sect-contat">
        <div class="img-logo-PeS">
          <img src="Imagens/LOGO P&S HOME.png" alt="" />
        </div>
        <div class="cent-textContat">
          <div class="box-textContat">
            <p>atendimento: <b>06h às 22h</b> | <b>Paulo Nogueira</b></p>
          </div>
          <div class="box-textContat links-contat">
            <p>
              <a
                href="https://wa.me/65998090170?text=Ol%C3%A1!%20Quero%20saber%20mais"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir conversa no WhatsApp"
              >
                (65) <b>99809-0170</b></a
              >
              <img src="Icons/whatsappicon.png" alt="Telefone" /> |
              <a href="mailto:paulocnogueira73@gmail.com"
                ><b>paulocnogueira73@gmail.com</b></a
              >
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
};

// =============================================
// Função do accordion PRINCIPAL
// =============================================
function mostrarConteudoPrincipal(nome) {
	// Clicou no mesmo → fecha tudo (principal + qualquer sub)
	if (
		conteudoPrincipalAtual === nome &&
		areaExpansivel.classList.contains("aberto")
	) {
		areaExpansivel.classList.remove("aberto");
		areaExpansivel.style.maxHeight = "0px";

		// Fecha também qualquer sub-seção aberta
		document.querySelectorAll('[class^="sub-secao-aoRedor-"]').forEach((el) => {
			el.classList.remove("ativo");
		});

		conteudoPrincipalAtual = null;
		subsecaoAtual = null;
		return;
	}

	fecharTudo();

	// Carrega o conteúdo
	if (conteudos[nome]) {
		areaExpansivel.innerHTML = conteudos[nome];
	} else {
		areaExpansivel.innerHTML = "<p>Conteúdo não encontrado</p>";
	}

	// Expande
	areaExpansivel.classList.add("aberto");
	const alturaReal = areaExpansivel.scrollHeight + 60;
	areaExpansivel.style.maxHeight = alturaReal + "px";

	conteudoPrincipalAtual = nome;

	// Scroll suave
	setTimeout(() => {
		const todosSliders = areaExpansivel.querySelectorAll(".slider");
		console.log("Número de carrosséis encontrados:", todosSliders.length); // ← para debug
		todosSliders.forEach((container) => {
			initUmCarousel(container);
		});
	}, 200);
}

iconesPrincipais.forEach((icone) => {
	icone.addEventListener("click", () => {
		const nome = icone.getAttribute("data-conteudo");
		mostrarConteudoPrincipal(nome);
	});
});

// =============================================
// Controle dos SUB-ÍCONES dentro de "Ao Redor"
// =============================================
document.addEventListener("click", function (e) {
	const subIcone = e.target.closest(".sub-icone");
	if (!subIcone) return;

	const subsecao = subIcone.dataset.subsecao;
	if (!subsecao) return;

	// Pega a seção alvo
	const secaoAlvo = document.querySelector(`.sub-secao-aoRedor-${subsecao}`);
	if (!secaoAlvo) return;

	// Se já está aberta e é a mesma → fecha apenas essa sub-seção
	if (subsecaoAtual === subsecao && secaoAlvo.classList.contains("ativo")) {
		secaoAlvo.classList.remove("ativo");
		subsecaoAtual = null;
		return;
	}

	// Fecha todas as sub-seções
	document.querySelectorAll('[class^="sub-secao-aoRedor-"]').forEach((el) => {
		el.classList.remove("ativo");
	});

	// Abre a nova
	secaoAlvo.classList.add("ativo");
	subsecaoAtual = subsecao;

	// Scroll suave até ela
	setTimeout(() => {
		secaoAlvo.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}, 150);
});

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
      <img src="assets/img/icons/icon-apt-101.png" alt="" class="img-icon-slider" />
      <div class="cont-apts-slides">
        <div class="slider">
          <button class="seta esquerda"><p>&#10094;</p></button>
          <div class="slides">
            <img
              src="assets/img/img-carrosselApto/IMG_2341-apt1.jpeg"
              class="slide active"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2346-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2351-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2354-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2357-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2359-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2362-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2366-apt1.jpeg"
              class="slide"
            />

            <img
              src="assets/img/img-carrosselApto/IMG_2371-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2375-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2406-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2409-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2411-apt1.jpeg"
              class="slide"
            />
          </div>
          <button class="seta direita"><p>&#10095;</p></button>
        </div>
      </div>
      <div class="cont-itens-info-apt">
        <div class="sub-cont-info-apt">
          <div class="itens-info-apt">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-01-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Apt. mobilhado</p>
              <p>e climatizado</p>
            </span>
          </div>
          <div class="itens-info-apt">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-02-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Cozinha</p>
							<p>completa</p>
            </span>
          </div>
          <div class="itens-info-apt-03">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-03-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Wi-Fi</p>
            </span>
          </div>
          <div class="itens-info-apt">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-04-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Roupas de</p>
							<p>cama e banho</p>
            </span>
          </div>
          <div class="itens-info-apt">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-05-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Campo Novo</p>
							<p>do Parecis-MT</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  `,

	apt02: `
  <section class="sect-apts-01-slides">
      <img src="assets/img/icons/icon-apt-102.png" alt="" class="img-icon-slider" />
      <div class="cont-apts-slides">
        <div class="slider">
          <button class="seta esquerda"><p>&#10094;</p></button>
          <div class="slides">
            <img
              src="assets/img/img-carrosselApto/IMG_2377-apt1.jpeg"
              class="slide active"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2382-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2385-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2386-apt1.jpeg"
              class="slide"
            />
            <img src="assets/img/img-carrosselApto/IMG_2390-apt1.jpeg" class="slide" />
            <img src="assets/img/img-carrosselApto/IMG_2395-apt1.jpeg" class="slide" />
            <img
              src="assets/img/img-carrosselApto/IMG_2396-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2403-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2406-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2409-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/IMG_2411-apt1.jpeg"
              class="slide"
            />
          </div>
          <button class="seta direita"><p>&#10095;</p></button>
        </div>
      </div>
      <div class="cont-itens-info-apt">
        <div class="sub-cont-info-apt">
          <div class="itens-info-apt">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-01-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Apt. mobilhado</p>
              <p>e climatizado</p>
            </span>
          </div>
          <div class="itens-info-apt">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-02-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Cozinha</p>
							<p>completa</p>
            </span>
          </div>
          <div class="itens-info-apt-03">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-03-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Wi-Fi</p>
            </span>
          </div>
          <div class="itens-info-apt">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-04-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Roupas de</p>
							<p>cama e banho</p>
            </span>
          </div>
          <div class="itens-info-apt">
           <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-05-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Campo Novo</p>
							<p>do Parecis-MT</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  `,

	apt03: `
  <section class="sect-apts-01-slides">
      <img src="assets/img/icons/icon-apt-103.png" alt="" class="img-icon-slider" />
      <div class="cont-apts-slides">
        <div class="slider">
          <button class="seta esquerda"><p>&#10094;</p></button>
          <div class="slides">
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2414-apt1.jpeg"
              class="slide active"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2420-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2424-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2426-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2429-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2432-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2436-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2437-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2446-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2439-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2440-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2447-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2451-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2458-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2406-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2409-apt1.jpeg"
              class="slide"
            />
            <img
              src="assets/img/img-carrosselApto/Carrossel-apts/IMG_2411-apt1.jpeg"
              class="slide"
            />
          </div>
          <button class="seta direita"><p>&#10095;</p></button>
        </div>
      </div>
      <div class="cont-itens-info-apt">
        <div class="sub-cont-info-apt">
          <div class="itens-info-apt">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-01-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Apt. mobilhado</p>
              <p>e climatizado</p>
            </span>
          </div>
          <div class="itens-info-apt">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-02-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Cozinha</p>
							<p>completa</p>
            </span>
          </div>
          <div class="itens-info-apt-03">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-03-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Wi-Fi</p>
            </span>
          </div>
          <div class="itens-info-apt">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-04-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Roupas de</p>
							<p>cama e banho</p>
            </span>
          </div>
          <div class="itens-info-apt">
            <div class="grid-itemSct01">
              <img src="assets/img/icons/icon-05-blocoBaixo.png" alt="" />
            </div>
            <span>
              <p>Campo Novo</p>
							<p>do Parecis-MT</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
};

function mostrarApto(nomeApto) {
	fecharTudo();
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
