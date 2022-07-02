// obtém referência para o objeto que deve ser movido
const invasor = document.querySelector("#invasor");

// Valores da posição inicial
invasor.style.left = 0;
invasor.style.top = 0;

function aleatorio(a, b){
    return Math.floor(Math.random()*(b-a+1))+a;
}

function move(x , y){
    // Valores atuais do pontinho
    let left = parseInt(invasor.style.left);
    let top = parseInt(invasor.style.top);
    
    // Atualiza a posição do pontinho
    x=aleatorio(0,600);
    y=aleatorio(0,600)

    invasor.style.top = x + "px";
    invasor.style.left = y + "px";

}

