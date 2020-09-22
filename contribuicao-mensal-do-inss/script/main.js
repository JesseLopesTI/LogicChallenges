var salarioDeContribuicao;
var contribuicaoMensal;
var categoria;

salarioDeContribuicao = parseFloat(prompt("Informe o seu salário: "));

categoria = parseInt(prompt("Categorias:\n" + "\n1. Empregado" + "\n2. Empregado doméstico" + "\n3. Trabalhador avulso" + "\n4. Contribuinte individual" + "\n5. Facultativo\n" + "\nDigite o código da categorias em que se enquadra: "));

if (categoria <= 3 && salarioDeContribuicao <= 1045.00) {
  document.write("<strong>Alíquota para recolhimento:</strong> 7,5%" + "<br><strong>Parcela a deduzir do INSS:</strong> R$ " + (contribuicaoMensal = (7.5 * salarioDeContribuicao) / 100) + "<br><strong>Contribuição anual:</strong> R$ " + contribuicaoMensal * 12);
} else if (categoria <= 3 && salarioDeContribuicao >= 1045.01 && salarioDeContribuicao <= 2089.60) {
  document.write("<strong>Alíquota para recolhimento:</strong> 9%" + "<br><strong>Parcela a deduzir do INSS:</strong> R$ " + (contribuicaoMensal = (9 * salarioDeContribuicao) / 100) + "<br><strong>Contribuição anual:</strong> R$ " + contribuicaoMensal * 12);
} else if (categoria <= 3 && salarioDeContribuicao >= 2089.61 && salarioDeContribuicao <= 3134.40) {
  document.write("<strong>Alíquota para recolhimento:</strong> 12%" + "<br><strong>Parcela a deduzir do INSS:</strong> R$ " + (contribuicaoMensal = (12 * salarioDeContribuicao) / 100) + "<br><strong>Contribuição anual:</strong> R$ " + contribuicaoMensal * 12);
} else if (categoria <= 3 && salarioDeContribuicao >= 3134.41 && salarioDeContribuicao <= 6101.06) {
  document.write("<strong>Alíquota para recolhimento:</strong> 14%" + "<br><strong>Parcela a deduzir do INSS:</strong> R$ " + (contribuicaoMensal = (14 * salarioDeContribuicao) / 100) + "<br><strong>Contribuição anual:</strong> R$ " + contribuicaoMensal * 12);
} else if (categoria >= 4 && salarioDeContribuicao <= 1045.00) {
  document.write("<strong>Alíquota para recolhimento:</strong> 5% (Não da direito a aposentadoria por tempo de contribuição e certidão de tempo contribuição)" + "<br><strong>Parcela a deduzir do INSS:</strong> R$ " + (contribuicaoMensal = (7.5 * salarioDeContribuicao) / 100) + "<br><strong>Contribuição anual:</strong> R$ " + contribuicaoMensal * 12);
} else if (categoria >= 4 && salarioDeContribuicao <= 1045.00) {
  document.write("<strong>Alíquota para recolhimento:</strong> 11% (Não da direito a aposentadoria por tempo de contribuição e certidão de tempo contribuição)" + "<br><strong>Parcela a deduzir do INSS:</strong> R$ " + (contribuicaoMensal = (9 * salarioDeContribuicao) / 100) + "<br><strong>Contribuição anual:</strong> R$ " + contribuicaoMensal * 12);
} else if (categoria >= 4 && salarioDeContribuicao >= 1045.00 && salarioDeContribuicao <= 6101.06) {
  document.write("<strong>Alíquota para recolhimento:</strong> 20%" + "<br><strong>Parcela a deduzir do INSS:</strong> R$ " + (contribuicaoMensal = (12 * salarioDeContribuicao) / 100) + "<br><strong>Contribuição anual:</strong> R$ " + contribuicaoMensal * 12);
}