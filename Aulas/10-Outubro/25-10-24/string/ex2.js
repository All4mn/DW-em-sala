// **Exercício 2: Contar Vogais**

// Crie uma função countVowels(str) que conte o número de vogais (a, e, i, o, u) em uma string e retorne esse valor.

function countVowels(str){
    let s = str.toLowerCase()
    let y = ""
    let z = 0
    for(let x = str.length-1; x>=0; x--){
        y = s[x]
        if (y.includes("a") || y.includes("e") || y.includes("i") || y.includes("o") || y.includes("u")) z +=1
    }
    return z
}
console.log(countVowels("OpenAI")); // Deve exibir: 3 (4)
console.log(countVowels("JavaScript")); // Deve exibir: 3