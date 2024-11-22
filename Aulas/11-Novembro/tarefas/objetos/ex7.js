const carrinho = {
    itens:[ 
        item1 ={  
            nome: "Calça",
            preco: 100
        },
        item2 ={  
            nome: "Camisa",
            preco: 80
        }
    ]
}
carrinho["calcularTotal"] = function() { let total = 0
    for (let i in carrinho.itens) total += carrinho.itens[i].preco
    console.log(total)
}
carrinho.calcularTotal()