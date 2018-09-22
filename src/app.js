'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//concta ao banco
mongoose.connect('mongodb://edison:edison1@ds018258.mlab.com:18258/ec-nodestr');

//carrega modulos
const Product = require('./models/product');

//carregando rotas
const indexRoute = require('./router/index');
const productRoute = require('./router/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;