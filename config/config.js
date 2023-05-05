const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
