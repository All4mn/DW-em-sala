// ### Exercício 6: Encontrar a Média dos Elementos

// Desenvolva uma função `average(arr)` que receba um array de números e retorne a média dos elementos.

function average(arr){
    let x = arr
    let y = x.length
    let s = 0
    for( let i of x)s += i
    let r = s/y
    return r
}
console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
console.log(average([10, 20, 30])); // Deve exibir: 20