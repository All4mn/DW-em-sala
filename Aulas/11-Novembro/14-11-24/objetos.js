//objetos = dicionario(python)

//maneira 1
const pessoa1 = {
    //chave: valor
    nome: "Maria",
    idade: 25,
    profissao: "Engenheira"
}

//maneira 2
const pessoa2 = Object.create({
    nome: "Maria",
    idade: 25,
    profissao: "Engenheira"
})

//alterando um objeto

const pessoa = {
    nome: "Ana",
    idade: 25
};

// Adicionando uma nova propriedade
pessoa.cidade = "São Paulo";
pessoa["celular"] = "44 91234-12345"

// Modificando uma propriedade existente
pessoa.idade = 26;
pessoa["nome"] = "Ana Maria"

console.log(pessoa);

//

//funções em objetos 

//ex1
const pessoa = {
    nome: "João",
    cumprimentar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};
pessoa.cumprimentar();

//ex2
const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    }
};
console.log(calculadora.somar(5, 3));     // Saída: 8
console.log(calculadora.subtrair(5, 3));  // Saída: 2

//usando for...in
for (let chave in aluno){
    console.log(chave)
}