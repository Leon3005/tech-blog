const renderDashboard = (req, res) => {
  try {
    const { isLoggedIn } = req.session;
    res.render("dashboard", { isLoggedIn });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

module.exports = { renderDashboard };
