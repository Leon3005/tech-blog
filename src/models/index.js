const User = require("./user");
const BlogPost = require("./blogPost");
const Comment = require("./comment");

User.hasMany(BlogPost, {
  foreignKey: "user_id",
});

BlogPost.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = { User, BlogPost, Comment };
