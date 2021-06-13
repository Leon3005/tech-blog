const { Router } = require("express");

const {
  renderDashboard,
  renderNewBlogPost,
  renderBlogPost,
} = require("../../controllers/html/privateRender");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/:id", renderBlogPost);
router.get("/newpost", renderNewBlogPost);

module.exports = router;
