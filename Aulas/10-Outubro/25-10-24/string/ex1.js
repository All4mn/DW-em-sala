// **Exercício 1: Reverter uma String**

// Crie uma função reverseString(str) que receba uma string como parâmetro e retorne a string invertida.

function reverseString(str){
    let s = str
    let y = ""
    for(let x = str.length-1; x>=0; x--) y += s[x]
    return y
}
console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"