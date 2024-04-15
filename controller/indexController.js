var datos = require("../db/datos");
const indexController ={
  index: function(req, res, next) {
      res.render('index', { title: 'Express' },
      res.render("index", {datos: datos}));
    },
}

module.exports = indexController;
