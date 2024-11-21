const pessoa = {
    nome: "João",
    idade:"19",
}
pessoa[ "cumprimentar"] = function() {console.log(`Olá, meu nome é ${this.nome}`)}
pessoa.cumprimentar()