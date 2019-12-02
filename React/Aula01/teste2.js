let pessoas = [
  { nome: "João", idade: 23, autorizado: false },
  { nome: "Pedro", idade: 17, autorizado: false },
  { nome: "Maria", idade: 20, autorizado: false },
  { nome: "Joana", idade: 15, autorizado: false }
];

function preencheAutorizacao(pessoas) {
  return pessoas.map(pessoa => {
    pessoa.autorizado = pessoa.idade > 18;
    return pessoa;
  });
}

let pessoas2 = preencheAutorizacao(pessoas);

console.log(pessoas2);
