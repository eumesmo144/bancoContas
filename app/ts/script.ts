
const p1 = new Pessoa('Otso Berg', 20, new Date('12/02/2003'));
const pj1 = new PessoaJuridica('Manoel Gomes', 23, new Date('24/10/2000'), '145.362.124-00/143.00');
const pf1 = new PessoaFisica('Gabriel', 23, new Date('21/11/2000'), '123.456.134-00');

console.log('Pessoa: ', p1.name + ', idade: ', p1.idade + 'data de nascimento: ', p1.dataNasc);
console.log('Pessoa física: ', pf1.name, ', idade: ', pf1.idade, 'data de nascimento: ', pf1.dataNasc, 'CPF: ', pf1.cpf);
console.log('Pessoa jurídica : ', pj1.name, ', idade: ', pj1.idade, 'data de nascimento: ', pj1.dataNasc, 'CNPJ', pj1.cnpj);

const contaController = new ContaController();
contaController.listar();