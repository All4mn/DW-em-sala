
function calculaImc(){ 
    //Captura
    let inputPeso = document.getElementById("peso")
    let inputAltura = document.getElementById("altura")
    let divSaida = document.getElementById("saida")

    //Entrada
    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)
    
    //Processamento
    let imc = peso/(altura*altura)

    //Saida
    divSaida.innerText = imc
}
