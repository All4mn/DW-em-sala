let condicao1 = false;
let condicao2 = false;
let condicao3 = false;
let condicao4 = true;

console.log("1");
console.log("2");

switch (condicao1) {
  case true:
    console.log("A");
  case false:
    switch (condicao2) {
      case true:
        switch (condicao3) {
          case true:
            console.log("B");
          case false:
            console.log("C");
        }
      case false:
        switch (condicao4) {
          case true:
            console.log("D");
          case false:
            console.log("E");
        }
    }
}

console.log("3");
console.log("4");
