
var express = require('express');
var router = express.Router();
const productAddController = require("../controller/product-addController")

/* GET home page. */
router.get('/', productAddController.index);

module.exports = router;