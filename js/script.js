// TEMPORIZADOR
const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')

let miliNum = 0
let segNum = 0
let minNum = 0
let INTERVALO
let tempo

function milissegundos() {
  miliNum++
  if (miliNum < 10) {
    miliseg.innerHTML = '0' + miliNum
  } else {
    miliseg.innerHTML = miliNum
  }

  if (miliNum == 99) {
    miliNum = 0
    segundos()
  }
}

function segundos() {
  segNum++
  if (segNum < 10) {
    seg.innerHTML = '0' + segNum
  } else {
    seg.innerHTML = segNum
  }

  if (segNum == 59) {
    segNum = 0
    minutos()
  }
}

function minutos() {
  minNum++
  if (minNum < 10) {
    min.innerHTML = '0' + minNum
  } else {
    min.innerHTML = minNum
  }
}

function iniciar() {
  clearInterval(INTERVALO)
  INTERVALO = setInterval(() => {
    milissegundos()
  }, 10)
}

function parar() {
  clearInterval(INTERVALO)

  /*miliNum = 0
  segNum = 0
  minNum = 0
  miliseg.innerHTML = '00'
  seg.innerHTML = '00'
  min.innerHTML = '00'*/
}


// JOGO
const playArea = document.querySelector('#area');
const aliensImg = 'img/monster.png';
const startButton = document.querySelector('iniciar');
let alienInterval;

//inicio do jogo
startButton.addEventListener('click', (event) => {
  playGame();
})

function playGame() {
  startButton.style.display = 'none';
  instructionsText.style.display = 'none';
  window.addEventListener('keydown', flyShip);
  alienInterval = setInterval(() => {
    createAliens();
  }, 2000);
}
//click na img
function contadorAcerto() {
  document.getElementById('a').innerHTML = parseInt(document.getElementById('a').innerHTML) + 1;
}
function contadorTentativa() {
  document.getElementById('t').innerHTML = parseInt(document.getElementById('t').innerHTML) + 1;
}

// HISTORICO
function historico() {
  document.getElementById('parte').innerHTML = parseInt(document.getElementById('parte').innerHTML) + 1;
  document.getElementById('tudo').innerHTML = parseInt(document.getElementById('tudo').innerHTML) + 1;
}