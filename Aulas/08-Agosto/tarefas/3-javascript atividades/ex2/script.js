function troco() {
  let inputTroco = document.getElementById("troco");
  let divCedulas20 = document.getElementById("cedulas20");
  let divCedulas10 = document.getElementById("cedulas10");
  let divMoedas1 = document.getElementById("moedas1");

  let troco = Number(inputTroco.value);
  let c20 = troco / 20;
  let resto = troco % 20;
  let c10 = resto / 10;
  let m1 = resto % 10;

  divCedulas20.innerText = c20;
  divCedulas10.innerText = c10;
  divMoedas1.innerText = m1;
}
