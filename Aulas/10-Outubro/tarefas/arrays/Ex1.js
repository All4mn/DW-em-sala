// ### Exercício 1: Somar Elementos do Array

// Crie uma função `sumArray(arr)` que receba um array de números e retorne a soma de todos os elementos.

function sumArray(arr) {
  let x = arr;
  let y = 0;
  for (let i = 0; i < x.length; i++) y += x[i];
  return y;
}
console.log(sumArray([1, 2, 3, 4])); // Deve exibir: 10
console.log(sumArray([10, -10, 10])); // Deve exibir: 10
