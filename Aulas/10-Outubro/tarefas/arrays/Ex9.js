// ### Exercício 9: Reverter um Array

// Desenvolva uma função `reverseArray(arr)` que receba um array e retorne um novo array com os elementos em ordem inversa.

function reverseArray(arr){
    let x = arr
    let y = []
    for(let i of x ) y.unshift(i)
    return y
}
console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]