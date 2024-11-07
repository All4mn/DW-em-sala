// ### Exercício 2: Encontrar o Maior Número

// Escreva uma função `findMax(arr)` que receba um array de números e retorne o maior número do array.

function findMax(arr) {
  let x = arr;
  let y = 0;
  for (let i = 0; i < x.length; i++) if (y <= x[i]) y = x[i];
  return y;
}
console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10
