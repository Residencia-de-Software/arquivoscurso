const mongoose = require('mongoose');
const Aluno = mongoose.model('Aluno');

module.exports = {
    async show(req,res){
        const aluno = await Aluno.find();

        return res.json(aluno);
    },
    async insert(req,res){
        const aluno = await Aluno.create(req.body);

        return res.json(aluno);
    }
}