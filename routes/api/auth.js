const express = require("express");
const router = express.Router();

const { register, login, getCurrent, logout} = require("../../controllers/authControll");
const authenticate = require("../../middlewares/authenticate");

router.post("/register", register);

router.post("/login", login);

router.get('/current', authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/avatars", authenticate,);

module.exports = router; 



