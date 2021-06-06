const { Router } = require("express");

const blogPostsRoutes = require("./blogPosts");

const router = Router();

router.use("/blogposts", blogPostsRoutes);

module.exports = router;
