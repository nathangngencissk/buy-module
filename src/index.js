const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session')

const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

const shop = require('./routes/shop');

app.use('/api/shop', shop);

mongoose
    .connect('mongodb://db:27017/buy', {
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(result => {
        console.log('MongoDB Conectado');
    })
    .catch(error => {
        console.log(error);
    });

app.listen(5000, () => console.log('Server ativo na porta 5000'));