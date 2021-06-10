const { User, BlogPost } = require("../../models");

const getUserBlogPosts = async (req, res) => {
  try {
    const userId = req.session.userId;

    const userBlogPosts = await BlogPost.findAll({
      where: {
        user_id: userId,
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

module.exports = { getUserBlogPosts };
