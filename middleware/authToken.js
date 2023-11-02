const jwt = require('jsonwebtoken')

exports.authenticateToken = (req, res, next) => {
    const secret = 'onthelock'
    const token = req.cookies.token
    if (token == null) return res.sendStatus(401).send({ message: 'Invalid email or password' })
    try {
        const user = jwt.verify(token, secret)
        req.user = user
        const email = req.user.email
        const newtoken = jwt.sign({ email }, secret, { expiresIn: '15min' })
        res.cookie('token', newtoken, {
            maxAge: 15*60*1000,
            secure: true,
            httpOnly: true,
            path: '/'
            //sameSite: "none",
        })

        next()
    } catch (error) {
        return res.sendStatus(403)
    }
}