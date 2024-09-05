//observação professor
let inputMax = document.getElementById("velMax")
let inputCar = document.getElementById("velCar")
let divSaida = document.getElementById("saida")
let button = document.getElementById("calcular")

function calcularVel(max,car){
    if (car <= max) return 0;

    let result = car - max
    let percent = (result/max) * 100
    
    if( percent <= 20 ){
        return 130.16
    } else if( 20 < percent <= 50 ){
        divSaida.innerText = `Você excedeu ${percent} % a velocidade máxima.Sua multa é de R$195,23`
        return 195.23
    }
    else if( percent > 50 ){
        divSaida.innerText = `Você excedeu ${percent} % a velocidade máxima.Sua multa é de R$880,41`
        return 880.41
    }
}




function handleCalcular(){
    
    let multa = calcularVel(Number(inputMax.value),Number(inputCar.value))
    if (multa > 0){
        divSaida.innerText = `Sua multa é de ${multa}`
    }
}

button.onclick = handleCalcular


