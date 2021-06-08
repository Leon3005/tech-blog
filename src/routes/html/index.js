const { Router } = require("express");

const publicRoutes = require("./public");
const privateRoutes = require("./private");
const authenticate = require("../../middleware/authenticate");

const router = Router();

router.use(publicRoutes);
router.use(authenticate, privateRoutes);

module.exports = router;
