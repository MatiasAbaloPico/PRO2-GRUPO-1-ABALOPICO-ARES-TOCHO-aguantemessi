var datos = require("../db/datos");
const registerController ={
    index: function(req, res, next) {
        res.render('register', { title: 'Express' },
        res.render("register", {datos: datos}));
      },
}

module.exports = registerController;