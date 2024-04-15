
var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController")

/* GET home page. */
router.get('/', indexController.index);
router.get('/product', indexController.product);
router.get('/profile', indexController.profile);
router.get('/register', indexController.register);

module.exports = router;
