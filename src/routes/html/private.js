const { Router } = require("express");

const {
  renderDashboard,
  renderNewPost,
} = require("../../controllers/html/privateRender");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/newpost", renderNewPost);

module.exports = router;
