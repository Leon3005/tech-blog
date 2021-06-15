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

const addComment = async (req, res) => {
  try {
    const { message } = req.body;
    const { userId } = req.session;
    const { id } = req.params;

    console.log(req.session);

    const newComment = await Comment.create({
      message,
      user_id: userId,
      blogpost_id: id,
    });

    console.log(newComment);

    res.status(201).json({ success: "Comment has been created!" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create comment" });
  }
};

module.exports = { getPostComments, addComment };
