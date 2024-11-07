// ### Exercício 8: Retornar Elementos Pares

// Escreva uma função `getEvenNumbers(arr)` que receba um array de números e retorne um novo array contendo apenas os números pares.

function getEvenNumbers(arr){
    let x = arr
    let y = [] 
    for(let i of x) if (i%2 == 0) y.push(i)
    return y
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]