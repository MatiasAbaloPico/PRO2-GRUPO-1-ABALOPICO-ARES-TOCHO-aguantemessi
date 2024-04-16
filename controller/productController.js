var datos = require("../db/datos");
const productController ={
    product: function(req, res, next) {
        res.render('product', { title: 'Express' },
        res.render("product", {datos: datos}));
      },
      searchResults: function(req, res, next) {
        res.render('search-results', { title: 'Express' },
        res.render("search-results", {datos: datos}));
      },
      productAdd: function(req, res, next) {
        res.render('product-add', { title: 'Express' },
        res.render("product-add", {datos: datos}));
      },
  }
  
  module.exports = productController;

  /* product add, product y search results */