var datos = require("../db/datos");
const db = require("../database/models")
const productController = {
  product: function (req, res, next) {

    res.render("product", { datos: datos });
    /*db.Producto.findAll()
    .then(function (result) {
      return res.render("product", {datos: result})
    }).catch(function (err) {
      console.log(err);
    });*/
  },
  searchResults: function (req, res, next) {

    res.render("search-results", { datos: datos });
  },
  productAdd: function (req, res, next) {

    res.render("product-add", { datos: datos });
  },
}

module.exports = productController;

/* product add, product y search results */