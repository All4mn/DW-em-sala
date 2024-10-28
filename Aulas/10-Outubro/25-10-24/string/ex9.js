// **Exercício 9: Substituir Caractere em String**

// Escreva uma função replaceChar(str, oldChar, newChar) que substitua todas as ocorrências de um caractere específico em uma string por outro caractere.

function replaceChar(str, oldChar, newChar) {
  let s = str;
  let oc = oldChar;
  let nc = newChar;
  for (let x = 0; x <= str.length; x++) if (s[x] == oc) s = s.replace(s[x], nc);
  return s;
}

console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")); // Deve exibir: "bonono"
