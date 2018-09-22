'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, resp, next) => {
    var product = new Product(req.body);
    product.save()
        .then(x => {
            resp.status(201).send({
                message: 'Produto cadastrado com sucesso'
            });
        }).catch(e => {
            resp.status(400).send({
                message: 'Falha ao cadastrar produto',
                data: e
            });
        })
};

exports.put = (req, resp, next) => {
    const id = req.param.id;
    resp.status(201).send({
        id: id,
        item: req.body  
    });
}

exports.delete = (req, resp, next) => {
    resp.status(200).send(req.body);
}