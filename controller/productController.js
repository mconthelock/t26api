//const { response } = require('express');
const models = require('../models/index')
models.Category.hasMany(models.Product)
models.Product.belongsTo(models.Category);

exports.index = async (req, res, next) =>{
    const products = await models.Product.findAll({
        include: {
            model: models.Category
        }
    });
    res.status(200).json({data: products});
}

exports.getdata = async (req, res, next) =>{
    const id = req.params.id
    const products = await models.Product.findAll({
        where: {
            id: id
        },
        include: {
            model: models.Category
        }
    });
    res.status(200).json({data: products});
}

exports.creat = async(req, res, next) => {
    try {
        const data = req.body
        const product = await models.Product.create(data)
        res.status(200).json({data: product});
    }catch (err) {
        res.status(406).json({
            message: 'Something went wrong',
            error: err //.errors.map(e => e.message)
        })
    }
}

exports.modify = async(req, res, next) => {
    try {
        const data = req.body
        const id = req.params.id
        const product = await models.Product.update({
            productname: data.productname,
            productdetail:data.productdetail,
            unit: data.unit,
            minqty: data.minqty,
            buyprice: data.buyprice,
            saleprice: data.saleprice,
            vatrate: data.vatrate,
            CategoryId: data.CategoryId
        }, {
            where: { id: id }
        })
        res.status(200).json({data: product});
    }catch (err) {
        res.json({
            message: 'Something went wrong',
            error: err //.errors.map(e => e.message)
        })
    }
}

exports.disable = async(req, res, next) => {
    try {
        const data = req.body
        const id = req.params.id
        const product = await models.Product.update({
            CategoryId: data.CategoryId
        }, {
            where: { id: id }
        })
        res.status(200).json({data: product});
    }catch (err) {
        res.json({
            message: 'Something went wrong',
            error: err //.errors.map(e => e.message)
        })
    }
}