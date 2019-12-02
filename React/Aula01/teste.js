let pessoas = [
  { nome: "João", idade: 23 },
  { nome: "Pedro", idade: 17 },
  { nome: "Maria", idade: 20 },
  { nome: "Maria", idade: 15 }
];

const pessoasMenores = [];

pessoas.forEach(pessoa => {
  if (pessoa.idade <= 17) pessoasMenores.push(pessoa);
});

const pessoasMaiores = [];

pessoasMaiores = pessoas.filter(pessoa => {
  return pessoa.idade <= 17;
});

const frases = pessoasMenores.map(pessoasMenores => {
  return pessoa.nome + "é menor de idade";
});

const frases = pessoasMaiores
  .filter(pessoa => {
    return pessoa.idade <= 17;
  })
  .map(pessoa => {
    return pessoa.nome + "é maior de idade";
  });

console.log(pessoasMenores);
console.log(pessoasMaiores);
