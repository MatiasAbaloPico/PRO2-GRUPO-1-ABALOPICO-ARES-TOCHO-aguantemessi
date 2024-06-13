var datos = require("../db/datos");
const db = require("../database/models")
const usersController = {
  profile: function (req, res, next) {
    let id = req.params.id
    db.Usuario.findByPk(id)
      .then((result) => {
        res.render("profile", { datos: result });
      }).catch((err) => {
        console.log(err);
      });
  },
  profileEdit: function (req, res, next) {
    
    res.render("profile-edit", { datos: datos });
  },
}

module.exports = usersController;


/* profile y profile-edit */