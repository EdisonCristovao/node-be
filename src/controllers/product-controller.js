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

exports.get = (req, resp, next) => {
    //find only register true and bring back title and price
    Product.find({
        active: true
            }, 'title price slug' )
        .then(data => {
            resp.status(200).send(data);
        }).catch(e => {
            resp.status(400).send({
                message: 'Falha ao cadastrar produto',
                data: e
            });
        })
};

exports.getBySlug = (req, resp, next) => {
    //find only register true and bring back title and price
    Product.findOne({
        slug: req.params.slug
            }, 'title price slug')
        .then(data => {
            resp.status(200).send(data);
        }).catch(e => {
            resp.status(400).send({
                message: 'Falha ao cadastrar produto',
                data: e
            });
        })
};


exports.getById = (req, resp, next) => {
    //find only register true and bring back title and price
    Product.findById(req.params.id)
        .then(data => {
            resp.status(200).send(data);
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