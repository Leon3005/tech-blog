const renderDashboard = (req, res) => {
  try {
    const { isLoggedIn, username, email, userId } = req.session;
    res.render("dashboard", { isLoggedIn, username, email, userId });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

module.exports = { renderDashboard };
