const mongoose = require('mongoose');
const express = require('express');
const requireDir = require('require-dir');
const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true });

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/',(req,res)=>{
    Product.create({
        title:'Android',
        description: 'Celular',
        url: 'https://scdn.slashgear.com/wp-content/uploads/2019/08/androidlogo_2019_transparent_white_png.jpg'
    });
    return res.send("Pagina inical node.api!");
})

app.listen('3001');