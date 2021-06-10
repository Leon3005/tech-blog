const moment = require("moment");

const formatDate = (date) => {
  return moment(date).format("DD MM YYYY - hh:mm");
};

module.exports = { formatDate };
