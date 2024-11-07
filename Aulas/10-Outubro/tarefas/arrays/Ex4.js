// ### Exercício 4: Verificar se Todos os Elementos São Iguais

// Escreva uma função `allEquals(arr)` que verifique se todos os elementos de um array são iguais. Retorne `true` se forem e `false` caso contrário.

function allEquals(arr){
    let x = arr
    let y = false
    let j
    let r = 0
    for (let i = 0; i < x.length;i++){
        j = i++
        if (i != x.length){
            if (x[i] == x[j]){
                r += 2
            }else r += 1
        }
    }

    if (r%2 == 0){
        y = true
    }
        
    return y
}
console.log(allEquals([1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false