const mongoose = require('mongoose');
const express = require('express');
const requireDir = require('require-dir');
const app = express();
const cors = require('cors');

//
app.use(express.json());

//inserir as retrições de ip, dominio, etc
app.use(cors());

//Conecta ao banco mongo
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useUnifiedTopology: true, useNewUrlParser: true });

//importa os modelos criados
requireDir('./src/models');

//Altera o a rota para /api
app.use('/api', require('./src/routes'));

//monitora a porta 3001
app.listen('3001');