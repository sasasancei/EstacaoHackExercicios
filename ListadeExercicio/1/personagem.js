let Personagem = function() {
    this.nome = "Naruto",
    this.idade = "13 a 14 anos",
    this.estilo = "Ninja";
    return this;
};

let Naruto = Personagem();

console.log("O meu personagem e" +Naruto.nome + "ele e um" +Naruto.estilo + "e tem na temporada classica" +Naruto.idade );
