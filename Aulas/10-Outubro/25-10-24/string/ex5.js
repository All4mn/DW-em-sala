// **Exercício 5: Extrair Iniciais**

// Escreva uma função getInitials(name) que receba o nome completo de uma pessoa e retorne suas iniciais em maiúsculas.

function getInitials(name) {
  let n = name;
  let y = n[0];
  for (let x = 0; x <= name.length; x++) if (n[x] == " ") y += n[x + 1];
  return y;
}
console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"
console.log(getInitials("Maria Oliveira Ferraz"));
