var datos = require("../db/datos");
const loginController ={
    index: function(req, res, next) {
        res.render('login', { title: 'Express' },
        res.render("login", {datos: datos}));
      },
  }
  
  module.exports = loginController;