const express = require("express");
const cors = require("cors");

const connection = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3005;

const server = express();

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
