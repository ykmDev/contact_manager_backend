const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController.js");
const validatToken = require("../middleware/validateTokenHandler.js");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validatToken, currentUser);


module.exports = router;