const { Router } = require("express");

const {
  getUserBlogPosts,
  getAllBlogPosts,
} = require("../../controllers/api/blogPosts");
const authenticate = require("../../middleware/authenticate");

const router = Router();

router.get("/", getAllBlogPosts);
router.get("/:user_id", getUserBlogPosts);

module.exports = router;
