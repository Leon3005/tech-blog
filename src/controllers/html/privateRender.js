const { BlogPost, User, Comment } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    const { isLoggedIn, username, email, userId } = req.session;

    const userBlogPosts = await BlogPost.findAll({
      where: {
        user_id: userId,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    const formattedUserBlogPosts = userBlogPosts.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    res.render("dashboard", {
      isLoggedIn,
      username,
      email,
      userId,
      formattedUserBlogPosts,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

const renderBlogPost = async (req, res) => {
  try {
    const { isLoggedIn } = req.session;
    const { id } = req.params;

    const getBlogPost = await BlogPost.findByPk(id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const getComments = await Comment.findAll({
      where: {
        blogpost_id: id,
      },
      include: {
        model: User,
        attributes: ["username"],
      },
    });

    const formattedBlogPost = getBlogPost.get({ plain: true });
    const formattedComments = getComments.map((comment) =>
      comment.get({ plain: true })
    );

    res.render("extendedBlogPost", {
      isLoggedIn,
      formattedBlogPost,
      formattedComments,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

const renderEditBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.session;

    const data = await BlogPost.findOne({ where: { id, user_id: userId } });

    if (!data) {
      return res.redirect("/dashboard");
    }

    const blogPost = data.get({ plain: true });

    res.render("editBlogPost", blogPost);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

const renderNewBlogPost = async (req, res) => {
  try {
    res.render("newBlogPost");
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

module.exports = {
  renderDashboard,
  renderNewBlogPost,
  renderBlogPost,
  renderEditBlogPost,
};
