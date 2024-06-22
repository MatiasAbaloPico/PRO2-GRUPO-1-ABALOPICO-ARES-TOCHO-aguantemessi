var express = require('express');
var router = express.Router();
const productController = require("../controller/productController");

const { body } = require("express-validator");

const validacionesP = [
    body("nombre").notEmpty().withMessage("Debes completar el campo nombre"),
    body("descripcion").notEmpty().withMessage("Debes completar el campo descripcion"),
]

/* GET home page. */
router.get('/product/:id/', productController.product);
router.get('/search-results/', productController.searchResults);
router.get('/product-edit/:id/', productController.productEdit);
router.get('/product-add/', productController.productAdd);

/* POST */
router.post('/product-save/', validacionesP, productController.productSave);
router.post("/:id", productController.comentario);
/* DELETE */
router.post('/product-delete/:id/', productController.productDelete);

module.exports = router;