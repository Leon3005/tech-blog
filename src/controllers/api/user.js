const { Router } = require("express");

const User = require("../../models/user");

const router = Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      (req.session.userId = newUser.id),
        (req.session.username = newUser.username),
        (req.session.isLoggedIn = true),
        res.status(201).json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
