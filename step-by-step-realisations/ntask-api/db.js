const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const { DataTypes } = require('sequelize');

let db = null;

module.exports = app => {
  if (db === null) {
    const config = app.libs.config;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
    db = {
      sequelize,
      Sequelize,
      models: {}
    };
    const dir = path.join(__dirname, 'models');
    fs.readdirSync(dir).forEach(async file => {
      const modelDir = path.join(dir, file);
      const moduleFuction =require(modelDir);
      const model = moduleFuction(sequelize,DataTypes);
      db.models[model.name] = model;
    });

    Object.keys(db.models).forEach(key => {
      db.models[key].associate(db.models);
    });
  }
  return db;
}