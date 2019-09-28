const NUM_ALUNOS = 10;
var aluno = [];
var maior = new Object();
var menor = new Object();
var media,soma;
soma = 0

//Ler as notas dos alunos
for(let i=0;i<NUM_ALUNOS;i++){
    var newAluno = new Object();
    newAluno.nota = Math.round(Math.random()*10);
    newAluno.nome = "aluno " + i;
    aluno[i]=newAluno;
    soma = soma + aluno[i].nota;
}

media = soma / aluno.length;

maior = aluno[0];
menor = aluno[0];

console.log('A média da turma foi: ' + media);

//Mostra os lunos abaixo da média
console.log('Alunos abaixo da média: ');
for(let i=0;i<NUM_ALUNOS;i++){
    if(aluno[i].nota<media){
        console.log('Nome: ' + aluno[i].nome + '. Nota: ' + aluno[i].nota);
    }
}

//Verifica Menor e Maior
for(let i=0;i<NUM_ALUNOS;i++){
if(aluno[i].nota>maior.nota){
        maior = aluno[i]; 
    }
    else if(aluno[i].nota<menor.nota){
        menor = aluno[i];
    }
}
console.log('O aluno com menor nota foi: ' + menor.nome + ' com a nota foi: ' + menor.nota);
console.log('O aluno com maior nota foi: ' + maior.nome + ' com a nota foi: ' + maior.nota);