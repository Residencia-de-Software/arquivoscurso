const ALUNOS_POR_GRUPO = 6;
const TOTAL_ALUNOS = 36;
const QUANT_GRUPOS = 6;

var alunos = [];
var grupo = [];

criarGrupos();

preeencherAlunos();

for (let i = 0; i < QUANT_GRUPOS; i++) {
    sortearGrupos(grupo[i]);
    console.log(grupo[i]);
}

function criarGrupos() {
    for (let i = 0; i < QUANT_GRUPOS; i++) {
        grupo[i] = [];
    }
}

function preeencherAlunos() {
    for (let i = 0; i < TOTAL_ALUNOS; i++) {
        alunos.push("aluno" + i);
    }
}

function sortearGrupos(grupo) {
    for (let i = 0; i < ALUNOS_POR_GRUPO; i++) {
        let sorteado = Math.round(Math.random() * (alunos.length - 1));
        grupo.push(alunos[sorteado]);
        alunos.splice(sorteado, 1);
    }
}