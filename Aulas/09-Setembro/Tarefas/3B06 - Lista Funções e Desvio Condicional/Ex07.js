function analisePreco(vlrAlcool, vlrGasolina) {
  if (vlrAlcool < (70 * vlrGasolina) / 100) {
    return true;
  } else {
    return false;
  }
}
console.log(analisePreco(3.7, 5.8));
