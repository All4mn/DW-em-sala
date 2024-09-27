function ehTriangulo(lado1, lado2, lado3) {
  let va1 = Math.abs(lado2 - lado3);

  if (lado1 < lado2 + lado3 && lado1 > va1) {
    return true;
  }
}

// PROGRAMA PRINCIPAL

let l1 = 20;
let l2 = 15;
let l3 = 5;

if (ehTriangulo(l1, l2, l3)) {
  console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo`);
} else {
  console.log(`Os lados ${l1}, ${l2} e ${l3} NÃO formam um triângulo`);
}
// -------------------------------------------
