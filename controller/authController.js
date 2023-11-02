const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const models = require('../models/index')
const secret = 'onthelock'

exports.login = async (req, res, next) =>{
    const { email, password } = req.body
    const [user] = await models.User.findAll({
        where: { email: email },
        raw: true
    });
    if(!user){
        return res.status(400).send({ message: 'Invalid email or password' })
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        return res.status(400).send({ message: 'Invalid email or password' })
    }
    const token = jwt.sign({ email }, secret, { expiresIn: '15min' })
    res.cookie('token', token, {
        maxAge: 15*60*1000,
        secure: true,
        httpOnly: true,
        path: '/'
        //sameSite: "none",
    })
    res.send({ message: 'Login successful' })
}