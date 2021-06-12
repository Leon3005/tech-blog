const { User, BlogPost } = require("../../models");

const renderLogin = (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

const renderSignup = (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

const renderHomepage = async (req, res) => {
  try {
    const { isLoggedIn } = req.session;

    const getAllBlogPosts = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const formattedAllBlogPosts = getAllBlogPosts.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    console.log(formattedAllBlogPosts);

    res.render("homepage", { isLoggedIn, formattedAllBlogPosts });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

module.exports = { renderLogin, renderSignup, renderHomepage };
