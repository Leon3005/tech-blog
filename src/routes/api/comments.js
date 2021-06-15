const { Router } = require("express");

const {
  getPostComments,
  addComment,
} = require("../../controllers/api/comments");

const router = Router();

router.get("/:id", getPostComments);
router.post("/:id", addComment);
// router.post("/", createBlogPost);

module.exports = router;
