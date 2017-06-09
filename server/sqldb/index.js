/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize: Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Models
db.TipoExperiencia = db.sequelize.import('../api/tipo_experiencia/tipo_experiencia.model');
db.Experiencia = db.sequelize.import('../api/experiencia/experiencia.model');
db.Curriculo = db.sequelize.import('../api/curriculo/curriculo.model');
db.Pessoa = db.sequelize.import('../api/pessoa/pessoa.model');

//Relations
db.Pessoa.hasOne(db.Curriculo,{as : 'curriculo', foreignKey:'fk_pessoa'})
db.Experiencia.belongsTo(db.Curriculo,{as : 'curriculo', foreignKey:'fk_curriculo'})
db.Experiencia.hasOne(db.TipoExperiencia,{as : 'TipoExperiencia', foreignKey:'fk_tipo_experiencia'})

module.exports = db;
