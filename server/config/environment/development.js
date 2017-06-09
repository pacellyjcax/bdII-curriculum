'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connecton opions
  sequelize: {
    uri: process.env.MYSQL_URI,
    options:{
      logging: true,
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        max: 10,
        min: 1,
        idle: 10000
      },
      define: {
        timestamps: false
      }
  }
},

  // Seed database on startup
  seedDB: true

};
