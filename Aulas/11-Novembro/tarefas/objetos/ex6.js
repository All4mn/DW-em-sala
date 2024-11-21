const biblioteca = [
    livro1 = {
        titulo: "1984",
        autor: "George O.",
        anoPublicado: "1949"
    },
    livro2= {
        titulo: "Diario de um Banana",
        autor: "Jeff K.",
        anoPublicado: "2007"
    },
    livro3 = { 
        titulo: "O Cortiço",
        autor: "Aluísio de A.",
        anoPublicado: "1890"
    }
]
for (let livro of biblioteca){
    for (let chave in livro){ console.log(livro[chave])}
    console.log()
}