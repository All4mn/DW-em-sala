// meu
let inputMax = document.getElementById("velMax")
let inputCar = document.getElementById("velCar")
let divSaida = document.getElementById("saida")
let button = document.getElementById("calcular")

function calcularVel(max,car){
    if (car <= max) return divSaida.innerText = `Você está dentro do limite de velocidade`;
    
    let result = car - max

    let percent = (result/max) * 100

    if( percent <= 20 ){
        return divSaida.innerText = `Você excedeu ${percent} % a velocidade máxima.Sua multa é de R$130,16`
    }
    else if( 20 < percent <= 50 ){
        return divSaida.innerText = `Você excedeu ${percent} % a velocidade máxima.Sua multa é de R$195,23`
    }
    else if( percent > 50 ){
        return divSaida.innerText = `Você excedeu ${percent} % a velocidade máxima.Sua multa é de R$880,41`
    }
}

function handleCalcular(){
    calcularVel(Number(inputMax.value),Number(inputCar.value))
}

button.onclick = handleCalcular


