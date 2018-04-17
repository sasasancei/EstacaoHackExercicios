let usuarioTeste = '1';
let senhaTeste = '1';
let paginas = document.querySelectorAll("section");
let imagem = document.querySelector("img");

let inputUsuario = document.querySelector("#usuario");
let inputSenha = document.querySelector("#senha");
// let resposta = document.createElement("p");

let botao = document.querySelector("button");

botao.onclick = function valida(){
    resposta.style = "color: red";
    if(inputUsuario.value == "" &&  inputSenha.value == "" ){
        resposta.innerHTML = " Campos em Branco";
    }else if(usuarioTeste != inputUsuario.value && senhaTeste != inputSenha.value){ 
        resposta.innerHTML = "Usuário  e senha inválidos";
    }else if(senhaTeste != inputSenha.value){
        resposta.innerHTML = "Senha inválida ";
    }else if(usuarioTeste != inputUsuario.value) {
        resposta.innerHTML = "Usuário inválido";
    } else if(usuarioTeste == inputUsuario.value && senhaTeste == inputSenha.value){
       paginas[1].style.transform = "translateX(0)";
       setTime(function(){
           let numero = Math.random()*360;
           imagem[0].style.transform = `rotate(${numero}deg)`;
       },2000);
    }
    let divResposta = document.querySelector("#resposta");
    divResposta.appendChild(resposta);

}