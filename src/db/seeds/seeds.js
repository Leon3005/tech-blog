const sequelize = require("../../config/connection");
const blogPost = require("../../models/blogPost");
const user = require("../../models/user");
const comment = require("../../models/comment");
const blogPosts = require("./blogPosts.json");
const users = require("./users.json");
const comments = require("./comments.json");

const seed = async () => {
  await sequelize.sync({ force: true });

  await user.bulkCreate(users);

  console.log("Seeded users");

  await blogPost.bulkCreate(blogPosts);

  console.log("Seeded blog posts");

  await comment.bulkCreate(comments);

  console.log("Seeded comments");

  process.exit(0);
};

seed();
