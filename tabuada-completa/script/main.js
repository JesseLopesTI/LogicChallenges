var numero;

do {
  numero = parseInt(prompt("Digite um número entre 0 e 10: "));

  while (numero > 10) {
    console.log("Observação:" + "\n" + "Só é permitido um número entre 0 e 10. Tente novamente!");
    numero = parseInt(prompt("Digite um número entre 0 e 10: "));

    numero = numero + 0;
  }

  console.log("\n" + "A tabuada de soma do número " + numero + " é:");

  for (var contador = 0; contador <= 10; contador++) {
    console.log(numero + " + " + contador + " = " + (numero + contador));
  }

  console.log("A tabuada de subtração do número " + numero + " é:");

  for (var contador = 0; contador <= 10; contador++) {
    console.log(numero + " - " + contador + " = " + (numero - contador));
  }

  console.log("A tabuada de multiplicação do número " + numero + " é:");

  for (var contador = 0; contador <= 10; contador++) {
    console.log(numero + " * " + contador + " = " + (numero * contador));
  }

  switch(numero) {
    case 1:
      console.log("A tabuada de divisão do número " + numero + " é:");

      for (var contador = 0; contador <= 10; contador++) {
        console.log(contador + " / " + numero + " = " + contador / numero);
      }

      break;
    case 2:
      console.log("A tabuada de divisão do número " + numero + " é:");

      for (var contador = 0; contador <= 20; contador = contador + 2) {
        console.log(contador + " / " + numero + " = " + contador / numero);
      }

      break;
    case 3:
      console.log("A tabuada de divisão do número " + numero + " é:");

      for (var contador = 0; contador <= 30; contador = contador + 3) {
        console.log(contador + " / " + numero + " = " + contador / numero);
      }

      break;
    case 4:
      console.log("A tabuada de divisão do número " + numero + " é:");

      for (var contador = 0; contador <= 40; contador = contador + 4) {
        console.log(contador + " / " + numero + " = " + contador / numero);
      }

      break;
    case 5:
      console.log("A tabuada de divisão do número " + numero + " é:");

      for (var contador = 0; contador <= 50; contador = contador + 5) {
        console.log(contador + " / " + numero + " = " + contador / numero);
      }

      break;
    case 6:
      console.log("A tabuada de divisão do número " + numero + " é:");

      for (var contador = 0; contador <= 60; contador = contador + 6) {
        console.log(contador + " / " + numero + " = " + contador / numero);
      }

      break;
    case 7:
      console.log("A tabuada de divisão do número " + numero + " é:");

      for (var contador = 0; contador <= 70; contador = contador + 7) {
        console.log(contador + " / " + numero + " = " + contador / numero);
      }

      break;
    case 8:
      console.log("A tabuada de divisão do número " + numero + " é:");

      for (var contador = 0; contador <= 80; contador = contador + 8) {
        console.log(contador + " / " + numero + " = " + contador / numero);
      }

      break;
    case 9:
      console.log("A tabuada de divisão do número " + numero + " é:");

      for (var contador = 0; contador <= 90; contador = contador + 9) {
        console.log(contador + " / " + numero + " = " + contador / numero);
      }

      break;
    default:
      console.log("A tabuada de divisão do número " + numero + " é:");

      for (var contador = 0; contador <= 100; contador = contador + 10) {
        console.log(contador + " / " + numero + " = " + contador / numero);
      }

      break;
  }
} while (numero <= 10);