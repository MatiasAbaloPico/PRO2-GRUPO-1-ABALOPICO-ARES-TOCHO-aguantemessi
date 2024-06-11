module.exports = function (sequelize, dataTypes) {
    /* Alias */
    let alias = "Comentario";

    /* Columnas */
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idPost: {
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        textoComentario: {
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
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    }

    /* define Modelo */
    let Comentario = sequelize.define(alias, cols, config);

    /* hacemos las relaciones */
    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "idUsuario"
        })
        Comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "idPost"
        })
    }

    return Comentario;
};