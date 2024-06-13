const { Association } = require("sequelize");
const db = require("../database/models")
const productController = {
  product: function (req, res, next) {
    let id = req.params.id
    let filtrado = {
      include: [
        {association: "comentarios"},
      ]
    }
    db.Producto.findByPk(id, filtrado)
      .then((result) => {
        return res.render("product", { datos: result })
      }).catch((err) => {
        console.log(err);
      });
  },
  searchResults: function (req, res, next) {
    res.render("search-results", { datos: datos});
  },
  productAdd: function (req, res, next) {

    res.render("product-add", { datos: datos});
  },
  productEdit: function (req, res, next) {
    let id = req.params.id
    db.Producto.findByPk(id)
      .then((result) => {
        res.render("product-edit", { datos: result});
      }).catch((err) => {
        console.log(err);
      });
    
  },
}

module.exports = productController;

/* product add, product y search results */