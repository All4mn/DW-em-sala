//ex1
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
}

//ex2
console.log (carro["marca"])
carro["ano"] = 2021

//ex3
carro["cor"] = "preto"
delete carro["modelo"]

console.log (carro)