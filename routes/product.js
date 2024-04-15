var express = require('express');
var router = express.Router();
const productController = require("../controller/productController");

/* GET home page. */
router.get('/', productController.product);


module.exports = router;