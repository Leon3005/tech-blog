const { Router } = require("express");

const { getUserBlogPosts } = require("../../controllers/api/blogPosts");

const router = Router();

router.get("/", getUserBlogPosts);

module.exports = router;
