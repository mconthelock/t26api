//const { response } = require('express');
const bcrypt = require('bcrypt')
const models = require('../models/index')

exports.index = async (req, res, next) =>{
    const users = await models.User.findAll();
    res.status(200).json({data: users});
}

exports.creat = async (req, res, next) =>{
    try {
        const data = req.body
        const hash = await bcrypt.hash(data.password, 10)
        data.password = hash
        const user = await models.User.create(data)
        res.status(200).json({data: user});
    }catch (err) {
        res.json({
            message: 'something went wrong',
            error: err //.errors.map(e => e.message)
        })
    }
}