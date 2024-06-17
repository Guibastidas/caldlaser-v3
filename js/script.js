// Ativar links ativos
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);


document.addEventListener("DOMContentLoaded", function() {
  var caixasMissao = document.querySelector(".caixa_missao");
  var caixasVisao = document.querySelector(".caixa_visao");
  var caixasValores = document.querySelector(".caixa_valores");

  window.addEventListener("scroll", function() {
    var scrollTop = window.scrollX;
    var windowHeight = window.innerHeight;

    // Função para verificar se a caixa está visível
    function isElementInViewport(element) {
      var bounding = element.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.top + bounding.height <= windowHeight
      );
    }

    // Adicionar a classe "visivel" quando as caixas estiverem visíveis
    if (isElementInViewport(caixasMissao)) {
      caixasMissao.classList.add("visivel");
    }

    if (isElementInViewport(caixasVisao)) {
      caixasVisao.classList.add("visivel");
    }

    if (isElementInViewport(caixasValores)) {
      caixasValores.classList.add("visivel");
    }
  });
});



