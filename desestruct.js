const pessoa = {
  nome: 'LF',
  sobrenome: 'Vicentin',
  idade: 28,
  profissão: 'Desenvolvedor'
};

console.log(pessoa);

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome
// let idade = pessoa.idade
// let profissão = pessoa.profissão

let { nome, sobrenome, idade, profissão } = pessoa;

console.log(nome, sobrenome, idade, profissão);
