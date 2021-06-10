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

    if (!user) {
      console.log("wrong user");
      return res.status(401).json({ error: "Failed Login" });
    }

    const validPassword = await user.checkPassword(password);

    if (!validPassword) {
      console.log("wrong pass");
      return res.status(401).json({ error: "Failed Login" });
    }

    req.session.save(() => {
      (req.session.isLoggedIn = true),
        (req.session.username = user.username),
        (req.session.email = user.email),
        (req.session.userId = user.id);
      res.status(200).json(user);
    });
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

const signup = (req, res) => {
  /*
      {
        "username":"cheesetoast"
        "email":"cheese@email.com",
        "password":"password123"
      }
  */
  try {
    const { username, email, password } = req.body;

    const newUser = User.create({
      username,
      email,
      password,
    });

    req.session.save(() => {
      (req.session.userId = newUser.id),
        (req.session.username = newUser.username),
        (req.session.isLoggedIn = true),
        res.status(201).json({ success: "User has been created!" });
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports = { login, logout, signup };
