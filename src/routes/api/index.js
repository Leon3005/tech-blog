const { Router } = require("express");

const blogPosts = require("./blogPosts");

const router = Router();

router.use("/blogposts", blogPosts);

module.exports = router;
