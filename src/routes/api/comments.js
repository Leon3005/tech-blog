const { Router } = require("express");

const { getPostComments } = require("../../controllers/api/comments");

const router = Router();

router.get("/:id", getPostComments);
// router.post("/", createBlogPost);

module.exports = router;
