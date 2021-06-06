const sequelize = require("../../config/connection");
const blogPost = require("../../models/blogPost");
const user = require("../../models/user");
const blogPosts = require("./blogPosts.json");
const users = require("./users.json");

const seed = async () => {
  await sequelize.sync({ force: true });

  await user.bulkCreate(users);

  console.log("Seeded users");

  await blogPost.bulkCreate(blogPosts);

  console.log("Seeded blog posts");

  process.exit(0);
};

seed();
