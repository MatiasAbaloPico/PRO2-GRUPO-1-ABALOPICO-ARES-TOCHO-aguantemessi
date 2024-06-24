var express = require('express');
var router = express.Router();
const productController = require("../controller/productController");

const { body } = require("express-validator");

const validacionesAdd = [
    body("img").notEmpty().withMessage("Debes completar el campo imagen")
    .isLength({ max: 250 }).withMessage("La imagen debe tener menos de 250 caracteres"),
    body("prod").notEmpty().withMessage("Debes completar el campo nombre")
    .isLength({ max: 250 }).withMessage("El nombre debe tener menos de 250 caracteres"),
    body("desc").notEmpty().withMessage("Debes completar el campo descripcion")
    .isLength({ max: 250 }).withMessage("La descripcion debe tener menos de 250 caracteres"),
];

const validacionesSave = [
    body("prod").notEmpty().withMessage("Debes completar el campo nombre")
    .isLength({ max: 250 }).withMessage("El nombre debe tener menos de 250 caracteres")
    .custom(function (value) {
        return db.Producto.findOne({
            where: { prod: value },
        })
            .then(function (user) {
                if (user) {
                    throw new Error("El producto ingresado ya existe, prueba con otro distinto.")
                }})}),
    body("desc").notEmpty().withMessage("Debes completar el campo descripcion")
    .isLength({ max: 250 }).withMessage("La descripcion debe tener menos de 250 caracteres"),
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
router.post('/product-edit', validacionesSave, productController.save)

module.exports = router;