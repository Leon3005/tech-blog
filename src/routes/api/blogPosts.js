const { Router } = require("express");

const {
  getUserBlogPosts,
  getAllBlogPosts,
  deleteBlogPost,
  createBlogPost,
} = require("../../controllers/api/blogPosts");
const authenticate = require("../../middleware/authenticate");

const router = Router();

router.get("/", getAllBlogPosts);
router.get("/:user_id", authenticate, getUserBlogPosts);
router.post("/", createBlogPost);
router.delete("/:id", authenticate, deleteBlogPost);

module.exports = router;
