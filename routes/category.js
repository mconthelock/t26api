const express = require('express');
const router = express.Router();
const auth = require('../middleware/authToken')
const cate = require('../controller/categoryController')

//Check Authentication
router.all('*', auth.authenticateToken)

router.get('/', cate.index);
router.get('/status/:status', cate.getStatus);
router.post('/', cate.creat);
router.put('/:id', cate.modify);
module.exports = router;