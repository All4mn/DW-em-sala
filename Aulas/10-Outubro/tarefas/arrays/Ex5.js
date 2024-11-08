// ### Exercício 5: Remover Duplicatas

// Crie uma função `removeDuplicates(arr)` que remova todos os elementos duplicados do array e retorne um novo array com apenas elementos únicos.

function removeDuplicates(arr) {
  let x = arr;
  let y = [];
  let r = [];
  for (let i = 0; i < x.length; i++) {
    if (!r[x[i]]) {
      y.push(x[i]);
      r[x[i]] = "verificado";
    }
  }
  return y;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
