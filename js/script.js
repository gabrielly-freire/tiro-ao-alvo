//CRONOMETRO
const miliseg = document.getElementById('milissegundos');
const seg = document.getElementById('segundos');
const min = document.getElementById('minutos');

let miliNum = 0;
let segNum = 0;
let minNum = 0;
let INTERVALO;

function milissegundos() {
  miliNum++;
  if (miliNum < 10) {
    miliseg.innerHTML = '0' + miliNum;
  } else {
    miliseg.innerHTML = miliNum;
  }

  if (miliNum == 99) {
    miliNum = 0;
    segundos();
  }
}

function segundos() {
  segNum++;
  if (segNum < 10) {
    seg.innerHTML = '0' + segNum;
  } else {
    seg.innerHTML = segNum;
  }

  if (segNum == 59) {
    segNum = 0;
    minutos();
  }
}

function minutos() {
  minNum++;
  if (minNum < 10) {
    min.innerHTML = '0' + minNum;
  } else {
    min.innerHTML = minNum;
  }
}

function iniciar() {
  clearInterval(INTERVALO);
  INTERVALO = setInterval(() => {
    milissegundos();
  }, 10)

  //MOVIMENTAÇÃO DO INVASOR
  setInterval(() => {
    invasor.style.position = "relative";

    invasor.style.top = (Math.floor(Math.random() * (400 - 10 + 1)) + 10) + "px";
    invasor.style.left = (Math.floor(Math.random() * (400 - 10 + 1)) + 10) + "px";
  },1000)

}

function parar() {
  clearInterval(INTERVALO);

  let nome = prompt("Digite seu nome:");

  //HISTÓRICO
  let lista = document.querySelector('#jogadores');
  let li = document.createElement('li');
  li.innerHTML = nome +' ' +document.getElementById('a').innerHTML +'/' + document.getElementById('t').innerHTML + ' ' + 
  document.getElementById('minutos').innerHTML + ':'+document.getElementById('segundos').innerHTML + ':'+document.getElementById('milissegundos').innerHTML;
  ;
  lista.appendChild(li);

  // ZERAR CRONO, TENTATIVA E ACERTOS
  document.getElementById('a').innerHTML = 0;
  document.getElementById('t').innerHTML = 0;

  miliNum = 0;
  segNum = 0;
  minNum = 0;
  miliseg.innerHTML = '00';
  seg.innerHTML = '00';
  min.innerHTML = '00';

  
}

//CONTADORES DE CLICK
function contadorAcerto() {
  document.getElementById('a').innerHTML = parseInt(document.getElementById('a').innerHTML) + 1;
}
function contadorTentativa() {
  document.getElementById('t').innerHTML = parseInt(document.getElementById('t').innerHTML) + 1;
}