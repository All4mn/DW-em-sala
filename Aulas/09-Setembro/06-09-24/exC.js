let condicao1 = false;
let condicao2 = false;
let condicao3 = false;
let condicao4 = true;

console.log("1");
console.log("2");
if (condicao1 == true) {
  console.log("A");
} else if (condicao2 == true) {
  if (condicao3 == true) {
    console.log("B");
  } else {
    console.log("C");
  }
} else if (condicao4 == true) {
  console.log("D");
} else {
  console.log("E");
}
console.log("3");
console.log("4");
