
const db = require("../database/models")
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const usersController = {
  profile: function (req, res, next) {
    let id = req.params.id
    let filtrado = {
      include: [
        { association: "productos", }
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
    if (req.session.user == undefined) {
      return res.redirect("/login")
    } else {
      let id = req.params.id
      db.Usuario.findByPk(id)
        .then((result) => {
          if (req.session.user.usuario != result.usuario) {
            return res.redirect("/")
          }
        })
        .then((result) => {
          return res.render("profile-edit", { datos: result });
        }).catch((err) => {
          console.log(err);
        });
    }
  },
  update: function (req, res) {

    let errors = validationResult(req);
    let form = req.body; /* <----- acá guardamos la información del formulario */
    req.session.datosForm = form
    let id = req.session.user.id

    let filtro = {
      where: [{ id : id }]
  };

    let dni = form.dni
    if (dni === '') {
      dni = 0
    }
    let fechaNacimiento = form.fecha_nac
    if (fechaNacimiento === '') {
      fechaNacimiento = 0
    }

    let user = {
      mail: form.mail,
      usuario: form.usuario,
      contrasenia: bcryptjs.hashSync(form.contrasenia, 10), /* <---- acá voy a tener que hacer hash */
      fechaNacimiento: fechaNacimiento,
      dni: dni,
      foto: form.img,
    }

    if (errors.isEmpty()) {

      db.Usuario.update(user, filtro)
        .then(function (result) {
          return res.redirect("/")
        })
        .catch(function (err) {
          return console.log(err);
        })

    } else {
      db.Usuario.findByPk(id)
        .then(function (resultado) {
          return res.render('profile-edit', {
            errors: errors.array(),
            old: req.body,
            lista: resultado
          });

        }).catch(function (errores) {
          return console.log(errores);;
        })
    }


  },
}

module.exports = usersController;


/* profile y profile-edit */