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

  regrasCasa: `
    <section class="sect-regrasCasa">
      <div class="cont-sect-regrasCasa">
        <div class="cont-hCckin-ckout">
          <div class="box-check">
            <p>check-in</p>
            <span style="background-color: rgb(0, 183, 219); padding: 10px 14px;">15:00h</span>
          </div>
          <div class="box-check">
            <p>check-out</p>
            <span style="background-color: rgb(0, 52, 136); padding: 10px 14px;">12:00h</span>
          </div>
          <div class="box-check max-pess">
            <p>máximo</p>
            <span style="background-color: rgb(0, 156, 8); padding: 10px 14px;">
              <img src="Icons/icon-pess-regrasCasa.png" alt="" />
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
    areaExpansivel.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 400);
}

// Eventos dos ícones principais
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
