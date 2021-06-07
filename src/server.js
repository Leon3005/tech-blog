const express = require("express");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const handlebars = require("express-handlebars");

const connection = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3005;

const server = express();

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: connection,
  }),
};

server.engine("handlebars", handlebars());
server.set("view engine", "handlebars");

server.use(session(sessionOptions));
server.use(cors());
server.use(express.json({ extended: true }));
server.use(express.urlencoded({ extended: true }));
server.use(routes);

const init = async () => {
  try {
    await connection.sync();
    server.listen(PORT, () => {
      console.log(`server is listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

init();
