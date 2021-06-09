const User = require("../../models/user");

const login = async (req, res) => {
  /*
      {
        email:"leon.wheeler@email.com",
        password:"password987"
      }
  */

  try {
    console.log("hi user");
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log("wrong user");
      return res.status(401).json({ error: "Failed Login" });
    }

    const validPassword = await user.checkPassword(password);

    if (!validPassword) {
      console.log("wrong pass");
      return res.status(401).json({ error: "Failed Login" });
    }

    console.log(password);
    req.session.save(() => {
      req.session.isLoggedIn = true;
    });

    console.log(req.session);

    return res.status(200).json({ data: "Login successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to login" });
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
