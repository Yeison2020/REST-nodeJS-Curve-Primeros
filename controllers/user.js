const { response } = require("express");

const userGet = (req, res = response) => {
  res.json({
    mgs: "Get Api - Controller",
  });
};

module.exports = {
  userGet,
};
