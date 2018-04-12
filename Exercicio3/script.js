let senha = '1234';

let entrada = document.querySelector("input");
let botao = document.querySelector("button");

botao.onclick = function(){
    let resultado = document.createElement("p");
    if(senha == entrada.value){
        resultado.innerHTML = "Acertou!";
        resultado.style = "color: green";
    }
    else{
        resultado.innerHTML = "Errou!";
    }
    let divResposta = document.querySelector("#resposta");
    divResposta.appendChild(resultado);
}