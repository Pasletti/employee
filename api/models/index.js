'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const Sequelize = require('sequelize');
const writeLog = require("../helpers/writeLog.js");
// const env = process.env.NODE_ENV || '';
// const config = require('../config/config.json');
const db = {};

console.log("AMBIENTE DE EXECUÇÃO: " + process.env.NODE_ENV);

let sequelize;
sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST, 
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    timezone: process.env.DB_TIMEZONE
});

fs.readdirSync(__dirname)
.filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
    //const model = sequelize['import'](path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});
  
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;

console.log("DB MYSQL Connected: " + process.env.NODE_ENV + " (" + process.env.DB_HOST + ")");

module.exports = db;
