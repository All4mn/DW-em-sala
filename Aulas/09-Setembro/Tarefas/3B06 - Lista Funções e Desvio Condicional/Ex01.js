function AtletaIdade(idade) {
  let idadeNumero = Number(idade);
  if (idadeNumero <= 7) {
    console.log("infantil A");
  } else if (8 <= idadeNumero && idadeNumero <= 10) {
    console.log("infantil B");
  } else if (11 <= idadeNumero && idadeNumero <= 13) {
    console.log("juvenil A");
  } else if (14 <= idadeNumero && idadeNumero <= 18) {
    console.log("juvenil B");
  } else if (idadeNumero > 18) {
    console.log("adulto");
  }
}

AtletaIdade(6);
AtletaIdade(8);
AtletaIdade(11);
AtletaIdade(17);
AtletaIdade(21);
