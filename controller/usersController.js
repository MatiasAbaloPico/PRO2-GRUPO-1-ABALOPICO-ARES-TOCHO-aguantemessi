
const db = require("../database/models")
const usersController = {
  profile: function (req, res, next) {
    let id = req.params.id
    let filtrado = {
      include: [
        {association: "productos",}
      ]
    };
    db.Usuario.findByPk(id, filtrado)
      .then((result) => {
        return res.render("profile", { datos: result });
      }).catch((err) => {
        console.log(err);
      });
  },
  profileEdit: function (req, res, next) {
    
    res.render("profile-edit");
  },
}

module.exports = usersController;


/* profile y profile-edit */