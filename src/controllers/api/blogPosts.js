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
          attributes: ["username"],
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

const createBlogPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { userId } = req.session;

    const newBlogPost = await BlogPost.create({
      title,
      description,
      user_id: userId,
    });

    res.status(201).json({ success: "Post has been created!" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create post" });
  }
};

const updateBlogPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;
    const blogPost = { title, description };

    const updatedBlogPost = await BlogPost.update(blogPost, { where: { id } });

    res.status(201).json({ success: "Post has been updated!" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to update post" });
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

const getBlogPost = async (req, res) => {
  try {
    const chosenBlogPost = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // const chosenBlogPost = userBlogPosts.map((blogPost) =>
    //   blogPost.get({ plain: true })
    // );

    res.status(200).json(chosenBlogPost);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

module.exports = {
  getUserBlogPosts,
  getAllBlogPosts,
  deleteBlogPost,
  createBlogPost,
  getBlogPost,
  updateBlogPost,
};
