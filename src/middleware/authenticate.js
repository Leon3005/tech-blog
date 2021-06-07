const authenticate = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
    console.log("logged in");
  } else {
    console.log("not logged in");
    res.status(401).json({ error: "User not logged in." });
  }
};

module.exports = authenticate;
