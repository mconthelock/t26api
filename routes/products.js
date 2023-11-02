const express = require('express');
const router = express.Router();
const auth = require('../middleware/authToken')
const prod = require('../controller/productController')

//Check Authentication
router.all('*', auth.authenticateToken)

router.get('/', prod.index);
router.get('/:id', prod.getdata);
router.post('/', prod.creat);
router.put('/:id', prod.modify);
router.put('/status/:id', prod.disable);
module.exports = router;