const { Router } = require("express");

const {
  getUserBlogPosts,
  getAllBlogPosts,
  deleteBlogPost,
} = require("../../controllers/api/blogPosts");
const authenticate = require("../../middleware/authenticate");

const router = Router();

router.get("/", getAllBlogPosts);
router.get("/:user_id", authenticate, getUserBlogPosts);
router.delete("/:id", authenticate, deleteBlogPost);

module.exports = router;
