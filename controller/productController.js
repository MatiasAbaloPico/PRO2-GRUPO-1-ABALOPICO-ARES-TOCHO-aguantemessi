
const db = require("../database/models")
const productController = {
  product: function (req, res, next) {
    let id = req.params.id
    db.Producto.findByPk(id)
      .then((result) => {
        return res.render("product", { datos: result })
      }).catch((err) => {
        console.log(err);
      });

      db.Producto.findAll( {
        include: [
          {association: "usuario"},
          {association: "producto"},
          {association: "comentario"}
        ] 
      })
        .then((result) => {
          return res.render("product", { datos: result })
        }).catch((err) => {
          console.log(err);
        });

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