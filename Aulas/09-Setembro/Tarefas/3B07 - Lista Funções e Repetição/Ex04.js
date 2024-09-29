function primo(n) {
  if (n > 1) {
    if (n == 2) {
      return true;
    } else if (n == 3) {
      return true;
    } else if (n % 2 != 0 && n % 3 != 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(primo(7));
console.log(primo(13));
console.log(primo(6));
console.log(primo(2));
console.log(primo(9));
