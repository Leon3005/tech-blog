const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
    onDelete: "CASCADE",
  },
  blogpost_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "blogpost",
      key: "id",
    },
    onDelete: "CASCADE",
  },
};

const options = {
  sequelize,
  modelName: "comment",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

class BlogPost extends Model {}

BlogPost.init(schema, options);

module.exports = BlogPost;
