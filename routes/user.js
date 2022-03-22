const { Router } = require("express");
const { userGet } = require("../controllers/user");

const router = Router();

// Home route will be replace for my middleware public I need to add api tp have another route

// GET USING MMY CONTROLLER userGet function
router.get("/", userGet);

//

router.put("/", function (req, res) {
  res.status(400).json({
    message: "Put Api",
  });
});

//
router.delete("/", function (req, res) {
  res.json({
    message: "Delete Api",
  });
});

//

router.post("/", function (req, res) {
  res.status(201).json({
    message: "post Api",
  });
});

//
router.patch("/", function (req, res) {
  res.json({
    message: "patch Api",
  });
});

module.exports = router;
