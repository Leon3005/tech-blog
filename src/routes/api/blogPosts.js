const { Router } = require("express");

const {
  getUserBlogPosts,
  getAllBlogPosts,
  deleteBlogPost,
  createBlogPost,
  getBlogPost,
  updateBlogPost,
} = require("../../controllers/api/blogPosts");

const {
  getPostComments,
  addComment,
} = require("../../controllers/api/comments");

const authenticate = require("../../middleware/authenticate");

const router = Router();

router.get("/", getAllBlogPosts);
router.get("/:user_id", authenticate, getUserBlogPosts);
router.get("/:id", authenticate, getBlogPost);
router.post("/", createBlogPost);
router.put("/:id", authenticate, updateBlogPost);
router.delete("/:id", authenticate, deleteBlogPost);

router.get("/:id/comments", authenticate, getPostComments);
router.post("/:id/comments", authenticate, addComment);

module.exports = router;
