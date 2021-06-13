const { Router } = require("express");

const {
  renderDashboard,
  renderNewBlogPost,
  renderBlogPost,
} = require("../../controllers/html/privateRender");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/blogposts/:id", renderBlogPost);
router.get("/newblogpost", renderNewBlogPost);

module.exports = router;
