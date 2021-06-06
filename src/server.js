const express = require("express");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const connection = require("./config/connection");
const routes = require("./controllers");

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
