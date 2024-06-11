module.exports = function (sequelize, dataTypes) {
    /* Alias */
    let alias = "Usuario";

    /* Columnas */
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        mail: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fechaNacimiento: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto: {
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
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }

    /* define Modelo */
    let Usuario = sequelize.define(alias, cols, config);

    /* hacemos las relaciones */
    Usuario.associate = function (models) {
        Usuario.hasMany(models.Comentario, {
            as: "comentados",
            foreignKey: "idUsuario"
        }),
            Usuario.hasMany(models.Producto, {
                as: "productos",
                foreignKey: "idUsuario"
            })
    }




    return Usuario;
};