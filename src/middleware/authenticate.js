const authenticate = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    res.render("login");
  }
};

module.exports = authenticate;
