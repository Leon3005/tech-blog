const { Router } = require("express");

const {
  renderDashboard,
  renderCreateNewPost,
} = require("../../controllers/html/privateRender");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/newpost", renderCreateNewPost);

module.exports = router;
