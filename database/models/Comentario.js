module.exports = function(sequelize, dataTypes){
    /* Alias */
    let alias = "Comentario";

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
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    }

    /* define Modelo */
    let Comentario = sequelize.define(alias, cols, config)

    return Comentario;
};