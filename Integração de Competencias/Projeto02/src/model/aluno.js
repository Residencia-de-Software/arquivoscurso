const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    nome:{
        type:String,
        require:true
    },
    matricula:{
        type:String,
        require:true
    }
})

mongoose.model('Aluno',AlunoSchema);