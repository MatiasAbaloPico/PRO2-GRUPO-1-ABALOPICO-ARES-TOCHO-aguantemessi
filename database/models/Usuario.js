module.exports = function(sequelize, dataTypes){
    /* Alias */
    let alias = "Usuario";

    /* Columnas */
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }
    }

    /* Tablas */
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }

    /* define Modelo */
    let Usuario = sequelize.define(alias, cols, config)

    return Usuario;
};