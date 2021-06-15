const { Router } = require("express");

const {
  renderDashboard,
  renderNewBlogPost,
  renderBlogPost,
  renderEditBlogPost,
} = require("../../controllers/html/privateRender");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/blogposts/:id", renderBlogPost);
router.get("/newblogpost", renderNewBlogPost);
router.get("/dashboard/edit/:id", renderEditBlogPost);

module.exports = router;
