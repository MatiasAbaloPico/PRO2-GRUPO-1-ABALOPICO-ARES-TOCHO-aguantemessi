const { Association } = require("sequelize");
const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const indexController = {
  index: function (req, res, next) {

    let filtrado = {
      include: [
        {association: "comentarios"},
        {association: "usuario"},
      ],
      order: [["createdAt", "DESC"]],
    };

    db.Producto.findAll(filtrado)
      .then(function (datos) {
        return res.render("index", { datos: datos })
      }).catch(function (err) {
        return console.log(err);
      });
  },
  register: function (req, res, next) {
      if (req.session.user != undefined) {
       return res.redirect("/");
    } else {
        return res.render("register")
    }
  },
  login: function (req, res, next) {
    res.render("login");
  },
  almacenar: function(req, res){

    let errors = validationResult(req);
    
    if (errors.isEmpty()) {
      
      let form = req.body; /* <----- acá guardamos la información del formulario */
      req.session.datosForm = form
      let dni = form.dni 
      if (dni === ''){
          dni = 0
      }
      let fechaNacimiento = form.fechaNacimiento
      if (fechaNacimiento === ''){
        fechaNacimiento = 0
      }

      let user = {
        mail: form.mail,
        usuario: form.usuario,
        nombre: form.nombre,
        apellido: form.apellido,
        contrasenia: bcryptjs.hashSync(form.contrasenia, 10), /* <---- acá voy a tener que hacer hash */
        fechaNacimiento: fechaNacimiento,
        dni: dni,
        foto: form.foto,
      }
      
      db.Usuario.create(user)
      .then(function (result) {
        return res.redirect("/login")
      })
      .catch(function (err) {
          return console.log(err);
      })

    } else {
      res.render("register", { 
        errors: errors.array(),
        old: req.body 
      });
    }
    
      
  },
  loginUser: (req, res)=>{
    let errors = validationResult(req); /* Tenemos que usar validations para renderizar los errores y sacar el res.send */
    let form = req.body;

    let filtro = {
        where: [{mail: form.mail}]
    };

    db.Usuario.findOne(filtro)
    .then((result) => {

        if (result == null) return res.send("No existe el mail " +  form.mail)


        let check = bcryptjs.compareSync(form.contrasenia, result.contrasenia);
        if (check) {
            req.session.user = result;

            /* que lo guarde en cookie si el usuario lo tildo */
            if (form.rememberme != undefined) {
                res.cookie("idUsuario", result.id, {maxAge: 1000 * 60 * 15});
            }
            return res.redirect("/");
        } else {
            return res.send("La contraseña es incorrecta")
        }



    }).catch((err) => {
        return console.log(err);
    });


  },
  logout: function(req, res) {
    req.session.destroy();
    res.clearCookie("idUsuario")
    return res.redirect("/")
  },
}

module.exports = indexController;

/* index, login y register */