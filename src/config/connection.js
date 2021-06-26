require("dotenv").config();
const sequelize = require("sequelize");

const dbOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
  logging: false,
};

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PW;

let connection;

if (process.env.JAWSDB_URL) {
  // connection for heroku
  connection = new sequelize(process.env.JAWSDB_URL);
} else {
  // connection for local development
  connection = new sequelize(dbName, dbUser, dbPassword, dbOptions);
}
module.exports = connection;
