const { Router } = require("express");

const apiRoutes = "./api/index.js";

const router = Router();

router.use("/api", apiRoutes);

module.exports = router;
