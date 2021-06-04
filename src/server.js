const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3005;

const server = express();

server.use(cors());
server.use(express.json({ extended: true }));
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
