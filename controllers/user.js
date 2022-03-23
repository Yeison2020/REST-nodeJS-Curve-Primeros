const { response } = require("express");

// I will create functions to handle all my users http requests
const userGet = (req, res = response) => {
  const params = req.query;
  console.log(params);
  res.json({
    mgs: "Get Api - Controller Yeison C",
  });
};

const userPut = (req, res = response) => {
  //  req.params.id the last name id come from the name I gave inside of the router
  const id = req.params.id;
  console.log(id);
  res.status(400).json({
    message: "Put Api",
    id,
  });
};

const userDelete = (req, res = response) => {
  res.json({
    message: "Delete Api",
  });
};

const userPost = (req, res = response) => {
  // Here the data gets extracted from body in controllers
  const body = req.body;
  const { name, age } = body;

  console.log(body);
  res.status(201).json({
    message: "post Api",
    name,
    age,
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
