function conversaoCm(valor, unidade) {
  let conversor;

  if (unidade == "m") {
    conversor = valor * 100;
  } else if (unidade == "mm") {
    conversor = valor / 10;
  } else if (unidade == "km") {
    conversor = valor * 100000;
  }

  return console.log(
    `A conversão de ${valor} ${unidade} para centímetros será de ${conversor} cm.`
  );
}

conversaoCm(1, "km");
conversaoCm(12, "m");
conversaoCm(550, "mm");
