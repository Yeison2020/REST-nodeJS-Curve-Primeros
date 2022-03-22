const { response } = require("express");

// I will create functions to handle all my users http requests
const userGet = (req, res = response) => {
  res.json({
    mgs: "Get Api - Controller Yeison C",
  });
};

module.exports = {
  userGet,
};
