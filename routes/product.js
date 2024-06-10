var express = require('express');
var router = express.Router();
const productController = require("../controller/productController");

/* GET home page. */
router.get('/product/:id', productController.product);
router.get('/search-results', productController.searchResults);
router.get('/product-add', productController.productAdd);

module.exports = router;