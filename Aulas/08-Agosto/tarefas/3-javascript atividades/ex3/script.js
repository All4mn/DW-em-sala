function custoViagem() {
  let inputDistancia = document.getElementById("distancia");
  let inputAutonomia = document.getElementById("autonomia");
  let inputPedagio = document.getElementById("pedagio");
  let divViagem = document.getElementById("viagem");

  let distancia = Number(inputDistancia.value);
  let autonomia = Number(inputAutonomia.value);
  let pedagio = Number(inputPedagio.value);

  let viagem = (distancia / autonomia) * 5 + pedagio;

  divViagem.innerText = viagem;
}
