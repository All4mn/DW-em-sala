function QueTriangulo(lado1, lado2, lado3) {
  let va1 = Math.abs(lado2 - lado3);

  if (lado1 < lado2 + lado3 && lado1 > va1) {
    if ((lado1 == lado2) == lado3) {
      return console.log(
        `Os lados ${lado1}, ${lado2} e ${lado3} formam um triângulo equilátero`
      );
    } else if (lado1 != lado2 && lado2 != lado3) {
      return console.log(
        `Os lados ${lado1}, ${lado2} e ${lado3} formam um triângulo escaleno`
      );
    } else {
      return console.log(
        `Os lados ${lado1}, ${lado2} e ${lado3} formam um triângulo isósceles`
      );
    }
  } else {
    return console.log(
      `Os lados ${lado1}, ${lado2} e ${lado3} NÃO formam um triângulo`
    );
  }
}

QueTriangulo(12, 12, 12);
QueTriangulo(5, 20, 30);
QueTriangulo(10, 20, 15);
QueTriangulo(10, 20, 20);
