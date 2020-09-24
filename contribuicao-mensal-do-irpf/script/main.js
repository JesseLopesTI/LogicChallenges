var salario;
var contribuicaoMensal;

salario = parseFloat(prompt("Informe o seu salário: "));

if (salario <= 1903.98) {
  document.write("<strong>Alíquota:</strong> isento" + "<br>" + "<strong>Parcela a deduzir do IRPF:</strong> R$ 0,00" + "<br>" + "<strong>Contribuição anual:</strong> R$ 0,00");
} else if (salario >= 1903.99 && salario <= 2826.65) {
  document.write("<br>" + "<strong>Alíquota:</strong> 7,5%" + "<br>" + "<strong>Parcela a deduzir do IRPF:</strong> R$ " + (contribuicaoMensal = (7.5 * salario) / 100) + "<br>" + "<strong>Contribuição anual:</strong> R$ " + contribuicaoMensal * 12);
} else if (salario >= 2826.66 && salario <= 3751.05) {
  document.write("<br>" + "<strong>Alíquota:</strong> 15%" + "<br>" + "<strong>Parcela a deduzir do IRPF:</strong> R$ " + (contribuicaoMensal = (15 * salario) / 100) + "<br>" + "<strong>Contribuição anual:</strong> R$ " + contribuicaoMensal * 12);
} else if (salario >= 3751.06 && salario <= 4664.68) {
  document.write("<br>" + "<strong>Alíquota:</strong> 22,5%" + "<br>" + "<strong>Parcela a deduzir do IRPF:</strong> R$ " + (contribuicaoMensal = (22.5 * salario) / 100) + "<br>" + "<strong>Contribuição anual:</strong> R$ " + contribuicaoMensal * 12);
} else {
  document.write("<br>" + "<strong>Alíquota:</strong> 27,5" + "<br>" + "<strong>Parcela a deduzir do IRPF:</strong> R$ " + (contribuicaoMensal = (27.5 * salario) / 100) + "<br>" + "<strong>Contribuição anual:</strong> R$ " + contribuicaoMensal * 12);
}