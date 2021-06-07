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

    const validPassword = await user.checkPassword(password);

    if (!user) {
      console.log("invalid user");
      return res.send("invalid user");
    }

    if (!validPassword) {
      console.log(password);
      return res.send("invalid password");
    }

    console.log(password);
    req.session.save(() => {
      req.session.isLoggedIn = true;
      return res.send("logged in");
    });
    console.log("correct pass");
  } catch (err) {
    console.error(err);
  }
};
const logout = (req, res) => {
  res.send("logout");
};

module.exports = { login, logout };
