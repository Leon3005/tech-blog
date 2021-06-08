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
      return res.redirect("/login");
    }

    if (!validPassword) {
      return res.redirect("/login");
    }

    console.log(password);
    req.session.save(() => {
      req.session.isLoggedIn = true;
    });
    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
  }
};
const logout = (req, res) => {
  res.send("logout");
};

module.exports = { login, logout };
