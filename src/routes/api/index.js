const { Router } = require("express");

const blogPostsRoutes = require("./blogPosts");
const commentsRoutes = require("./comments");
const authenticate = require("../../middleware/authenticate");

const router = Router();

router.use("/blogposts", blogPostsRoutes);
router.use("/comments", authenticate, commentsRoutes);

module.exports = router;
