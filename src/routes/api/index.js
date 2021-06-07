const { Router } = require("express");

const blogPostsRoutes = require("./blogPosts");
const userRoutes = require("./user");

const router = Router();

router.use("/blogposts", blogPostsRoutes);
router.use("/user", userRoutes);

module.exports = router;
