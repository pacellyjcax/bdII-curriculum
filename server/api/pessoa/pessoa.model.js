'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pessoa', {
    id: {
      type:  DataTypes.INTEGER ,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING
  },{
    timestamps: true,
    underscored: true,
    freezeTableName:true,
    tableName:'pessoas'

  });
};
