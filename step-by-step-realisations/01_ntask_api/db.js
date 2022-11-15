const { Sequelize } = require('sequelize');
const config = require('./libs/config.js');
let sequalize = null;

module.exports = () => {
  if (sequalize === null) {
    sequalize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
  }
  return sequalize;
};