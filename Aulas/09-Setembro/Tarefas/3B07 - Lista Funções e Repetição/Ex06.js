function fatorial(n) {
  let m = n;
  for (let i = n - 1; i > 0; i--) {
    m = m * i;
  }
  return m;
}

console.log(fatorial(4));
console.log(fatorial(5));
