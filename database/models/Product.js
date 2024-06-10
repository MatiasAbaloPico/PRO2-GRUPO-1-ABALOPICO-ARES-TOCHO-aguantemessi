module.exports = function (sequelize, dataTypes) {
    /* Alias */
    let alias = "Producto";

    /* Columnas */
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombreProducto: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        imagenProducto: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.TIME
        },
        updatedAt: {
            type: dataTypes.TIME
        },
        deletedAt: {
            type: dataTypes.TIME
        }
    }

    /* Tablas */
    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false
    }

    /* define Modelo */
    let Producto = sequelize.define(alias, cols, config)

    Producto.associate = function (models) {
        /* Acá va el has many de models.Comentario */
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "idUsuario"
        })
    }

    return Producto;
};