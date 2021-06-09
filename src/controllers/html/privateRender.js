const renderDashboard = (req, res) => {
  try {
    res.render("dashboard");
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

module.exports = { renderDashboard };
