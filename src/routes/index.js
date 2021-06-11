const { Router } = require("express");

const apiRoutes = require("./api");
const authRoutes = require("./auth");
const htmlRoutes = require("./html");

const authenticate = require("../middleware/authenticate");

const router = Router();

router.use("/auth", authRoutes);
router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;
