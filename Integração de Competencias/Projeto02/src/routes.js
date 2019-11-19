const express = require('express');
const routes = express.Router();
const alunoController = require('./controller/alunoController');

routes.post('/alunos/inserir',alunoController.insert);

routes.get('/alunos/exibir',alunoController.show);

module.exports = routes;

