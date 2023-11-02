var express = require('express');
var router = express.Router();
const auth = require('../controller/authController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', auth.login);
module.exports = router;
