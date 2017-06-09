'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Experiencia', {
    id: {
      type:  DataTypes.INTEGER ,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: DataTypes.STRING,
    data_inicio: DataTypes.DATE,
    data_conclusao: DataTypes.DATE,
    local: DataTypes.STRING    
  },{
    timestamps: true,
    underscored: true,
    freezeTableName:true,
    tableName:'experiencias'

  });
};
