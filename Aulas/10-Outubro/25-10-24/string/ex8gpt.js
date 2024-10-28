// **Exercício 8: Remover Espaços Extras**

// Crie uma função trimSpaces(str) que remova todos os espaços extras no início e no final da string e deixe apenas um espaço entre as palavras.

//Auxilio do ChatGPT

function trimSpaces(str) {
  // Remove espaços do início e do final da string
  let s = str.trim();

  // Substitui múltiplos espaços por um único espaço
  s = s.replace(/\s+/g, " ");

  return s;
}

// Exemplos de uso
console.log(trimSpaces("   JavaScript    é     divertido    ")); // Deve exibir: "JavaScript é divertido"
console.log(trimSpaces("   Programação     é   interessante  ")); // Deve exibir: "Programação é interessante"

// A expressão regular /\s+/g é uma ferramenta poderosa em programação que permite identificar e manipular padrões específicos em strings. Vamos detalhar cada parte dessa expressão:

// Componentes da Expressão Regular:

// /: As barras (/) são usadas para delimitar o início e o fim da expressão regular.

// \s: Este símbolo representa qualquer caractere de espaço em branco. Isso inclui:

// Espaços ( )
// Quebras de linha (\n)
// Tabulações (\t)
// Retornos de carro (\r)
// Outros tipos de espaço em branco (dependendo do contexto e da implementação da regex)

// +: O sinal de mais (+) significa que o caractere anterior (neste caso, \s) deve aparecer uma ou mais vezes. Portanto, \s+ corresponde a uma sequência de um ou mais caracteres de espaço em branco.

// g: Esta é uma bandeira (flag) que significa global. Quando essa flag está presente, a busca não para na primeira ocorrência; em vez disso, continua até o final da string, encontrando todas as ocorrências do padrão especificado
