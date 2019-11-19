//**********************************************
//
//**********************************************
const express = require('express');

const Sequelize = require('sequelize');

const bodyParser = require('body-parser');

const app = express();

//**********************************************
//
//**********************************************

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

//Conexão com o banco
const sequelize = new Sequelize(`posts`, 'postgres', `rsc140506`, {
    host: `localhost`,
    port: `5432`,
    dialect: `postgres`
})

//**********************************************************************
//cria a tabela posts
//**********************************************************************

//cria a tabela posts
const Post = sequelize.define(`posts`, {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})

//**********************************************************************
//cria a tabela users
//**********************************************************************


const User = sequelize.define(`users`, {
    firstName: {
        type: Sequelize.STRING,
        require: true,
    },
    lastName: {
        type: Sequelize.STRING,
        require: true,
    },
    age: {
        type: Sequelize.INTEGER,
        require: true,
    },
    email: {
        type: Sequelize.STRING,
        require: true,
    }
})

//**********************************************************************
//Força a criação das tabelas, apaga toda informação caso force for true
//**********************************************************************

Post.sync({ force: false });

User.sync({ force: false });

//Cria novos registros 
/*
Post.create({
    "title":"Sarah",
    "content":"Bolada"
})

User.create({
    "firstName":"Sarah",
    "lastName":"Carius",
    "age":18,
    "email":"sarah@sarah.com.br",
})
*/

//*******************************************************
//Funções de busca
//*******************************************************

app.get('/list/users/:id',
    async (req, res) => {
        const user = await User.findByPk(req.params.id);

        return res.json(user);
    })

//
app.get('/list/users/',
    async (req, res) => {
        const user = await User.findAll({});

        return res.json(user);
    })

app.get(`/list/posts/`,
    async (req, res) => {
        const post = await Post.findAll({});

        return res.json(post);
    })

//
app.get(`/list/posts/:id`,
    async (req, res) => {
        const post = await Post.findByPk(req.params.id);

        return res.json(post);
    }
)

//*******************************************************
//Funções de inserção
//*******************************************************

app.post(`/register/post`,
    async (req, res) => {
        const post = await Post.create(req.body);

        return res.json(post);
    }
)

app.post(`/register/user`,
    async (req, res) => {
        const user = await Post.create(req.body);

        return res.json(user);
    }
)

//*******************************************************
//Funções de atualização
//*******************************************************

app.put('/update/user/:id',
    async (req, res) => {
        const user = await Post.findByPk(req.params.id);

        await user.update(req.body);

        return res.json(user);
    })

app.put('/update/post/:id',
    async (req, res) => {
        const post = await Post.findByPk(req.params.id);

        await post.update(req.body);

        return res.json(post);
    })

//*******************************************************
//Funções de exclusão
//*******************************************************

app.delete('/delete/post/:id',
    async (req, res) => {
        const post = await Post.findByPk(req.params.id);

        await post.destroy();

        return res.send();
    })

app.delete('/delete/user/:id',
    async (req, res) => {
        const user = await User.findByPk(req.params.id);

        await user.destroy();

        return res.send();
    })

    app.listen(3006);