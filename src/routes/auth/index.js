const { Router } = require("express");

const {login, logout}

const router = Router();

router.post("/login", login);
router.post("/logout", logouts);

module.exports = router;
