const { Router } = require("express");

const {
  renderDashboard,
  renderNewBlogPost,
} = require("../../controllers/html/privateRender");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/newpost", renderNewBlogPost);

module.exports = router;
