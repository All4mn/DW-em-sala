// ### Exercício 10: Encontrar o Índice de um Elemento

// Crie uma função `findIndex(arr, element)` que receba um array e um elemento, e retorne o índice da primeira ocorrência desse elemento no array. Se o elemento não estiver no array, retorne `-1`.

function findIndex(arr, element){
    let x = arr
    let e = element
    let y 
    for(let i = 0;i <x.length;i++){
        if (x[i] == e) {
            y = x[i]  
            return y
        } else y = -1
    }
    return y
}
console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1