const { Comment, User, BlogPost } = require("../../models");

const getPostComments = async (req, res) => {
  try {
    const postComments = await Comment.findAll({
      where: {
        blogpost_id: req.params.id,
      },
      include: [
        {
          model: BlogPost,
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    res.status(200).json(postComments);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get post comments!" });
  }
};

const addComment = async (req, res) => {};

module.exports = { getPostComments };
