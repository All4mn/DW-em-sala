function nPrimos(n) {
  for (let i = n - 1; i >= 1; i--) {
    let p = n - i;

    if (p > 1) {
      if (p == 2) {
        console.log(p);
      } else if (p == 3) {
        console.log(p);
      } else if (p % 2 != 0 && p % 3 != 0) {
        console.log(p);
      }
    }
  }
}

nPrimos(10);
