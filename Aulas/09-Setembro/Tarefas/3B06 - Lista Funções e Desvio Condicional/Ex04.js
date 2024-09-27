function dosagem(idade, peso) {
  if (idade > 12 && peso >= 60) {
    gotas = (1000 / 500) * 20;
    return console.log(
      `você deve tomar ${gotas} gotas do medicamento por dose`
    );
  } else if (idade > 12 && peso < 60) {
    gotas = (850 / 500) * 20;
    return console.log(
      `você deve tomar ${gotas} gotas do medicamento por dose`
    );
  } else if (idade <= 12) {
    if (5 <= peso && peso <= 9) {
      gotas = (125 / 500) * 20;
      return console.log(
        `você deve tomar ${gotas} gotas do medicamento por dose`
      );
    } else if (5 <= peso && peso <= 9) {
      gotas = (125 / 500) * 20;
      return console.log(
        `você deve tomar ${gotas} gotas do medicamento por dose`
      );
    } else if (9.1 <= peso && peso <= 16) {
      gotas = (250 / 500) * 20;
      return console.log(
        `você deve tomar ${gotas} gotas do medicamento por dose`
      );
    } else if (16.1 <= peso && peso <= 24) {
      gotas = (500 / 500) * 20;
      return console.log(
        `você deve tomar ${gotas} gotas do medicamento por dose`
      );
    } else if (peso > 24) {
      gotas = (125 / 500) * 20;
      return console.log(
        `você deve tomar ${gotas} gotas do medicamento por dose`
      );
    }
  }
}

dosagem(13, 60);
dosagem(17, 53);
dosagem(10, 7);
