// **Exercício 6: Converter para Snake Case**

// Crie uma função toSnakeCase(str) que receba uma string em formato de frase e converta para o formato "snake_case".

function toSnakeCase(str) {
  let s = str;
  for (let x = 0; x <= str.length; x++)
    if (s[x] == " ") s = s.replace(s[x], "_");
  return s;
}
console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"
