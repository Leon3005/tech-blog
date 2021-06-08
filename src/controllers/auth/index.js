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
  try {
    if (req.session.isLoggedIn) {
      req.session.destroy(() => {
        return res.status(200).json({ data: "Successfully logged out" });
      });
    } else {
      return res.status(500).json({ error: "Failed to logout" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to logout" });
  }
};

module.exports = { login, logout };
