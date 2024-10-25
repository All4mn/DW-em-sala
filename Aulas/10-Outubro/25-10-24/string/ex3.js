// **Exercício 3: Verificar Palíndromo**

// Escreva uma função isPalindrome(str) que verifique se uma string é um palíndromo (ou seja, se ela é a mesma quando lida de trás para frente).

function isPalindrome(str){
    let s = str.toLowerCase()
    let y = ""
    for(let x = str.length-1; x>=0; x--) y += s[x]
    if (y == s) return true
    return false
}
console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false
console.log(isPalindrome("Subinoonibus"));