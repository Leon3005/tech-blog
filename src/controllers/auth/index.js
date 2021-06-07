const User = require("../../models/user");

const login = async (req, res) => {
  /*
      {
        email:"leon.wheeler@email.com",
        password:"password987"
      }
  */

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !user.checkPassword(password)) {
      console.log("invalid entry");
    }

    if (user.checkPassword(password)) {
      console.log(password);
      req.session.save(() => {
        req.session.isLoggedIn = true;
        return res.send("logged in");
      });
      console.log("correct pass");
    }

    console.log(user);
  } catch (err) {
    console.error(err);
  }
};
const logout = (req, res) => {
  res.send("logout");
};

module.exports = { login, logout };
