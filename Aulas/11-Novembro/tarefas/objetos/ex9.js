const estoque = [
    produto1 = {
        id: 1,
        nome: "Caneta",
        quantidade: 10
    },
    produto2 = {
        id: 2,
        nome: "Caderno",
        quantidade: 15
    }
];

function atualizarQuantidade(id, quantidade) { 
    for (let i in estoque) if (estoque[i].id == id)estoque[i].quantidade = quantidade;
    console.log(estoque);
}

atualizarQuantidade(2, 30);
