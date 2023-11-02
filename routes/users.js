const express = require('express');
const router = express.Router();
const models = require('../models/index')
const auth = require('../middleware/authToken')
const usersController = require('../controller/usersController')

/* GET users listing. */
router.get('/', auth.authenticateToken, usersController.index);
router.post('/', usersController.creat);
module.exports = router;
