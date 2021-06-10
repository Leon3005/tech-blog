const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const handlebars = require("express-handlebars");

const connection = require("./config/connection");
const routes = require("./routes");
const { formatDate } = require("./helpers");

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

const handlebarsOptions = {
  helpers: {
    formatDate,
  },
};

const hbs = handlebars.create(handlebarsOptions);

server.engine("handlebars", hbs.engine);
server.set("view engine", "handlebars");

server.use(session(sessionOptions));
server.use(cors());
server.use(express.static(path.join(__dirname, "../", "public")));
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
