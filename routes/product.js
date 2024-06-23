var express = require('express');
var router = express.Router();
const productController = require("../controller/productController");

const { body } = require("express-validator");

const validacionesAdd = [
    body("img").notEmpty().withMessage("Debes completar el campo imagen"),
    body("prod").notEmpty().withMessage("Debes completar el campo nombre"),
    body("desc").notEmpty().withMessage("Debes completar el campo descripcion"),
];

const validacionComentario= [
    body("comentario")
    .notEmpty().withMessage("Debe completar el campo")
    .bail()
    .isLength({ min: 3 }).withMessage("Su comentario debe tener como mínimo menos 3 caracteres"),
];

/* GET home page. */
router.get('/search-results', productController.searchResults);
router.get('/product-add/', productController.productAdd);
router.get('/product/:id/', productController.product);
router.get('/product-edit/:id/', productController.productEdit);


/* POST */
router.post("/product-add/", validacionesAdd , productController.almacenar)
router.post("/:id/", validacionComentario, productController.comentario);
/* DELETE */
router.post('/product-delete/:id/', productController.productDelete);

module.exports = router;