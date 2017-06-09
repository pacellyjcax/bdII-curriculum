'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TipoExperiencia', {
    id: {
      type:  DataTypes.INTEGER ,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: DataTypes.STRING,
    funcao: DataTypes.STRING,
    grau_formacao: DataTypes.STRING
  },{
    timestamps: true,
    underscored: true,
    freezeTableName:true,
    tableName:'tipos_experiencias'

  });
};
