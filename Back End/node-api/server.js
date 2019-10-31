const mongose = require('mongoose');
const express = require('express');
const app = express();

mongose.connect('mongodb://localhost:27017/nodeapi',{useUnifiedTopology:true,useNewUrlParser:true});

app.get('/',(req,res)=>{
    res.send('Olá mundo!');
});

app.listen('3001');