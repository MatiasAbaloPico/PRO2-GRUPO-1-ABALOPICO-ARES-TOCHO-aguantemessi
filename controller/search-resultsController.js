var datos = require("../db/datos");
const searchresultsController ={
    index: function(req, res, next) {
        res.render('search-results', { title: 'Express' },
        res.render("search-results", {datos: datos}));
      },
  }
  
  module.exports = searchresultsController;