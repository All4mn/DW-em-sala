// **Exercício 4: Contar Ocorrências de uma Letra**

// Crie uma função countOccurrences(str, char) que receba uma string e um caractere, e conte quantas vezes esse caractere aparece na string.

function countOccurrences(str, char) {
  let s = str;
  let c = char;
  let r = 0;
  for (let x = str.length - 1; x >= 0; x--) if (s[x] == c) r++;
  return r;
}
console.log(countOccurrences("banana", "a")); // Deve exibir: 3
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3
