var datos = require("../db/datos");
const productAddController ={
    index: function(req, res, next) {
        res.render('product-add', { title: 'Express' },
        res.render("product-add", {datos: datos}));
      },
  }
  
  module.exports = productAddController;