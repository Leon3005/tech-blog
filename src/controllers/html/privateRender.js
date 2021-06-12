const { BlogPost, User } = require("../../models");

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

const renderNewPost = async (req, res) => {
  try {
    res.render("newPost");
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

module.exports = { renderDashboard, renderNewPost };
