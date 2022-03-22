const { response } = require("express");

// I will create functions to handle all my users http requests
const userGet = (req, res = response) => {
  res.json({
    mgs: "Get Api - Controller Yeison C",
  });
};

const userPut = (req, res = response) => {
  res.status(400).json({
    message: "Put Api",
  });
};

const userDelete = (req, res = response) => {
  res.json({
    message: "Delete Api",
  });
};

const userPost = (req, res = response) => {
  res.status(201).json({
    message: "post Api",
  });
};

const userPatch = (req, res = response) => {
  res.json({
    mgs: "Patch Api - Controller Yeison C",
  });
};

module.exports = {
  userGet,
  userPut,
  userPatch,
  userPost,
  userDelete,
};
