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
        },
      ],
    });

    const formattedBlogPosts = userBlogPosts.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    res.render("dashboard", {
      isLoggedIn,
      username,
      email,
      userId,
      formattedBlogPosts,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

module.exports = { renderDashboard };
