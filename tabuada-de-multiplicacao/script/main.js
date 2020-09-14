var numero;

do {
  numero = parseInt(prompt("Digite um número entre 0 e 10: "));

  if (numero <= 10) {
    console.log("A tabuada no número " + numero + " é:");
  } else {
    while (numero > 10) {
      console.log("Observação:");
      console.log("Só é permitido um número entre 0 e 10. Tente novamente!")

      numero = parseInt(prompt("Digite um número entre 0 e 10: "));

      numero = numero + 0;
    }

    console.log("A tabuada do número " + numero + " é:");
  }

  for (var contador = 0; contador <= 10; contador++) {
    console.log(numero + " * " + contador + " = " + (numero * contador));
  }
} while (numero <= 10);