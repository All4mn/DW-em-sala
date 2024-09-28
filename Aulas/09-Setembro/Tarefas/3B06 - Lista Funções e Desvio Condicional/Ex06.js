function anoBissexto(ano) {
  if (ano % 400 == 0) {
    return console.log(`O ano ${ano} é bissexto`);
  } else {
    return console.log(`O ano ${ano} NÃO é bissexto`);
  }
}

anoBissexto(400);
anoBissexto(1814);
anoBissexto(2000);
anoBissexto(2480);
