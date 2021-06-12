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
router.delete("/:id", authenticate, deleteBlogPost);
router.post("/", createBlogPost);

module.exports = router;
