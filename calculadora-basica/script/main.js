var valor1;
var valor2;
var escolha;
var soma;
var subtracao;
var multiplicacao;
var divisao;

valor1 = parseFloat(prompt("Digite o primeiro valor: "));

escolha = parseInt(prompt("Escolha o valor correspondente ao tipo de operação (Soma = 1, Subtração = 2, Multiplicação = 3 ou Divisão = 4): "));

while (escolha >= 5) {
  escolha = parseInt(prompt("Atenção! Use apenas os valores correspondentes aos tipos de operação. Escolha o valor correspondente ao tipo de operação (Soma = 1, Subtração = 2, Multiplicação = 3 ou Divisão = 4): "));

  escolha++;
}

valor2 = parseFloat(prompt("Digite o segundo valor: "));

switch(escolha) {
  case 1:
    soma = valor1 + valor2;

    document.write("O resultado é: " + soma);
    break;
  case 2:
    subtracao = valor1 - valor2;

    document.write("O resultado é: " + subtracao + ". (Ignorar sinal de negativo).");
    break;
  case 3:
    multiplicacao = valor1 * valor2;

    document.write("O resultado é: " + multiplicacao);
    break;
  default:
    divisao = valor1 / valor2;

    document.write("O resultado é: " + divisao);
    break;
}