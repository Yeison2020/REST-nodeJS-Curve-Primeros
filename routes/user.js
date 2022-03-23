const { Router } = require("express");

// Controllers functions
const {
  userGet,
  userPut,
  userPatch,
  userPost,
  userDelete,
} = require("../controllers/user");

const router = Router();

// Home route will be replace for my middleware public I need to add api tp have another route

// GET USING MMY CONTROLLER userGet function
router.get("/", userGet);

//

router.put("/:id", userPut);

//
router.delete("/:id", userDelete);

//

router.post("/", userPost);

//
router.patch("/:id", userPatch);

module.exports = router;
