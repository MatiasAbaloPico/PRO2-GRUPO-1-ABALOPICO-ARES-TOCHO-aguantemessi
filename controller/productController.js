var datos = require("../db/datos");
const productController ={
    index: function(req, res, next) {
        res.render('product', { title: 'Express' },
        res.render("product", {datos: datos}));
      },
}

module.exports = productController;