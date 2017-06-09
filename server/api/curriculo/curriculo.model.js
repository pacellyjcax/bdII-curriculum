'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Curriculo', {
    id: {
      type:  DataTypes.INTEGER ,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    data_atualizacao: DataTypes.DATE,
    idioma: DataTypes.STRING
  },{
    timestamps: true,
    underscored: true,
    freezeTableName:true,
    tableName:'curriculos'

  });
};
