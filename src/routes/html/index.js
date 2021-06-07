const { Router } = require("express");

const publicRoutes = require("./public");
const privateRoutes = require("./private");

const router = Router();

router.use(publicRoutes);

module.exports = router;
