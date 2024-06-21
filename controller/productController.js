const { Association, Op } = require("sequelize");
const db = require("../database/models");
const productController = {
  product: function (req, res, next) {
    let id = req.params.id
    let filtrado = {
      include: [
        {association: "comentarios",
                        include: [{association: "usuarios"}]}
      ]
    };
    db.Producto.findByPk(id, filtrado)
      .then((result) => {
        return res.render("product", { datos: result })
      }).catch((err) => {
        console.log(err);
      });
  },
  searchResults: function (req, res, next) {

    //console.log(req)
    let buscado = req.query.search
    db.Producto.findAll({
      where: {
        [Op.or]: {
          nombreProducto: { [Op.like]:  `%${buscado}%`},
          descripcion: { [Op.like]:  `%${buscado}%`}
        }
      },
      include: [
        {association: "comentarios"},
        {association: "usuario"},
      ],
      order: [["createdAt", "DESC"]],
    })
    .then((result) => {
      console.log(result.map(x => x.get({ plain: true })))
      return res.render("search-results", { productos: result.map(x => x.get({ plain: true })) })
    }).catch((err) => {
      console.log(err);
    });
  },
  productAdd: function (req, res, next) {

    res.render("product-add");
  },
  productEdit: function (req, res, next) {
    let id = req.params.id
    db.Producto.findByPk(id)
      .then((result) => {
        res.render("product-edit", { datos: result});
      }).catch((err) => {
        console.log(err);
      });
    
  },
}

module.exports = productController;

/* product add, product y search results */