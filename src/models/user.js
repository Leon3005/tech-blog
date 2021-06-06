const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 30],
      unique: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      unique: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 20],
    },
  },
};

const options = {
  sequelize,
  modelName: "user",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

class User extends Model {}

User.init(schema, options);

module.exports = User;
