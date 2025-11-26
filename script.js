document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoes = document.getElementById('opcoes-acessibilidade');
  const aumentar = document.getElementById('aumentar-fonte');
  const diminuir = document.getElementById('diminuir-fonte');
  const contraste = document.getElementById('alterna-contraste');

  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoes.classList.toggle('apresenta-lista');
  });

  let tamanho = 1;

  aumentar.addEventListener('click', () => {
    tamanho += 0.1;
    document.body.style.fontSize = `${tamanho}rem`;
  });

  diminuir.addEventListener('click', () => {
    tamanho -= 0.1;
    document.body.style.fontSize = `${tamanho}rem`;
  });

  contraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });

  ScrollReveal().reveal('#inicio', { delay: 300 });
  ScrollReveal().reveal('#galeria', { delay: 300 });
  ScrollReveal().reveal('#contato', { delay: 300 });
});
