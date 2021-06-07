const { Router } = require("express");

const apiRoutes = require("./api");
const authRoutes = require("./auth");
const authenticate = require("../middleware/authenticate");

const router = Router();

router.use("/api", authenticate, apiRoutes);
router.use("/auth", authRoutes);

module.exports = router;
