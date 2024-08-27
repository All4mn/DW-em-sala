function calcularJuros() {
  //Captura
  let inputCapital = document.getElementById("capital");
  let inputTaxa = document.getElementById("taxa");
  let inputPeriodo = document.getElementById("periodo");
  let divSaida = document.getElementById("saida");

  //Entrada
  let Capital = Number(inputCapital.value);
  let Taxa = Number(inputTaxa.value);
  let Periodo = Number(inputPeriodo.value);

  //Processamento
  let Montante = (Capital * (1 + Taxa)) ^ Periodo;

  //Saida
  divSaida.innerText = Montante;
}
