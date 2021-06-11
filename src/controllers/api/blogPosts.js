const { User, BlogPost } = require("../../models");

const getUserBlogPosts = async (req, res) => {
  try {
    const userBlogPosts = await BlogPost.findAll({
      where: {
        user_id: req.params.user_id,
      },
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(200).json(userBlogPosts);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get Blog Posts!" });
  }
};

const getAllBlogPosts = async (req, res) => {
  try {
    const allBlogPosts = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    res.status(200).json(allBlogPosts);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get Blog Posts!" });
  }
};

const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await BlogPost.destroy({
      where: {
        id,
      },
    });

    if (!data) {
      return res.stats(404).json({ error: "Blog Post does not exist!" });
    }

    res.status(200).json({ data: "Delete successful" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete Blog Post!" });
  }
};

module.exports = { getUserBlogPosts, getAllBlogPosts, deleteBlogPost };
