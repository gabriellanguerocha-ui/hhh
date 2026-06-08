




const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".tempo-contagem");

function mostrarAba(index) {
  abas.forEach((aba, i) => {
    if (i === index) {
      aba.classList.add('ativa');
      aba.style.display = '';
    } else {
      aba.classList.remove('ativa');
      aba.style.display = 'none';
    }
  });
}

const datasAlvo = [
  new Date(2026, 11, 31, 23, 59, 59), // cursos na Alura
  new Date(2026, 9, 1, 23, 59, 59),   // criar projetos em Javascript
  new Date(2026, 10, 15, 23, 59, 59), // criar um portfolio
  new Date(2026, 8, 30, 23, 59, 59)   // atualizar curriculo
];

function calcularTempoRestante(alvo) {
  const agora = new Date();
  const diferenca = alvo - agora;
  if (diferenca <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  const segundosTotal = Math.floor(diferenca / 1000);
  const dias = Math.floor(segundosTotal / 86400);
  const horas = Math.floor((segundosTotal % 86400) / 3600);
  const minutos = Math.floor((segundosTotal % 3600) / 60);
  const segundos = segundosTotal % 60;

  return { dias, horas, minutos, segundos };
}

function atualizarContagem() {
  contadores.forEach((contador, i) => {
    const tempo = calcularTempoRestante(datasAlvo[i]);
    const texto = `${tempo.dias} dias ${tempo.horas} horas ${tempo.minutos} minutos ${tempo.segundos} segundos`;
    contador.textContent = texto;
  });
}

// determina aba inicial (botão com classe 'ativo' ou 0)
let indexInicial = 0;
botoes.forEach((botao, i) => {
  if (botao.classList.contains('ativo')) indexInicial = i;
  botao.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('ativo'));
    botao.classList.add('ativo');
    mostrarAba(i);
  });
});

// mostrar a aba inicial e iniciar contagem
mostrarAba(indexInicial);
atualizarContagem();
setInterval(atualizarContagem, 1000);
