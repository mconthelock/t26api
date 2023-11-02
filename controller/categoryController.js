const models = require('../models/index')

exports.index = async (req, res, next) =>{
    const category = await models.Category.findAll();
    res.status(200).json({data: category});
}

exports.getStatus = async (req, res, next) =>{
    const status = req.params.status
    const category = await models.Category.findAll({
        where: {
            status: status
        }
    });
    res.status(200).json({data: category});
}

exports.creat = async(req, res, next) => {
    try {
        const data = req.body
        const category = await models.Category.create(data)
        res.status(200).json({data: category});
    }catch (err) {
        res.json({
            message: 'Something went wrong',
            error: err //.errors.map(e => e.message)
        })
    }
}

exports.modify= async(req, res, next) => {
    try {
        const data = req.body
        const id = req.params.id
        const category = await models.Category.update({
            desc: data.desc,
            status: data.status
        }, {
            where: { id: id }
        })
        res.status(200).json({data: category});
    }catch (err) {
        res.json({
            message: 'Something went wrong',
            error: err //.errors.map(e => e.message)
        })
    }
}