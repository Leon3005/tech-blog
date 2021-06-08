const renderDashboard = (req, res) => {
  try {
    res.send("dashboard");
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

module.exports = { renderDashboard };
