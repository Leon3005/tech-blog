const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

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

const hooks = {
  beforeCreate: async (newUser) => {
    newUser.password = await bcrypt.hash(newUser.password, 10);
    console.log(newUser.password);
    return newUser;
  },
  beforeUpdate: async (updatedUser) => {
    updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
    return updatedUser;
  },
  beforeBulkCreate: async (users) => {
    const promises = users.map((user) => {
      return bcrypt.hash(user.password, 10);
    });

    const passwords = await Promise.all(promises);

    passwords.forEach((password, index) => {
      users[index].password = password;
    });
  },
};

const options = {
  hooks,
  sequelize,
  modelName: "user",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

class User extends Model {
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

User.init(schema, options);

module.exports = User;
