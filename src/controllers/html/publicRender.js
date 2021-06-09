const renderLogin = (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

const renderSignup = (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

const renderHomepage = (req, res) => {
  try {
    const { isLoggedIn } = req.session;
    res.render("homepage", { isLoggedIn });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

module.exports = { renderLogin, renderSignup, renderHomepage };
