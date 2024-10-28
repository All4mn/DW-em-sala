// **Exercício 7: Primeira Letra Maiúscula de Cada Palavra**

// Desenvolva uma função capitalizeWords(str) que transforme a primeira letra de cada palavra em uma frase para maiúscula.

//Auxilio do ChatGPT

function capitalizeWords(str) {
  // Divide a string em palavras usando o espaço como delimitador
  let s = str.split(" ");

  // Mapeia cada palavra, capitalizando a primeira letra
  s = s.map((p) => {
    // Verifica se a palavra não está vazia
    if (p.length > 0) {
      // Retorna a palavra com a primeira letra em maiúscula e o restante em minúscula
      return p[0].toUpperCase() + p.slice(1).toLowerCase();
    }
    return p; // Retorna a palavra original caso esteja vazia
  });

  // Junta as palavras de volta em uma string
  return s.join(" ");
}

console.log(capitalizeWords("hello world")); // Deve exibir: "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // Deve exibir: "Javascript Is Awesome"

//A função map() é um método muito útil disponível em arrays em JavaScript. Ela permite criar um novo array a partir de um array existente, aplicando uma função a cada elemento desse array.

// array.map(function(element, index, array) {
//     // Retorna o novo valor que substituirá o elemento atual
// });

// array: O array original sobre o qual o map() é chamado.
// function: Uma função callback que é executada para cada elemento do array.
// element: O elemento atual que está sendo processado.
// index (opcional): O índice do elemento atual no array.
// array (opcional): O array original em si.

// O map() itera sobre cada elemento do array e aplica a função fornecida a esse elemento.
// Ele retorna um novo array contendo os resultados da função para cada elemento do array original.
// O array original não é modificado

// O símbolo => é utilizado para definir funções de seta (ou arrow functions) em JavaScript. As funções de seta são uma forma mais concisa de escrever funções, introduzidas no ECMAScript 6 (ES6).

// const nomeDaFuncao = (parametros) => {
//     corpo da função
// };
