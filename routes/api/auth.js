const express = require("express");
const router = express.Router();

const { register, login, getCurrent, logout} = require("../../controllers/authControll");
const authenticate = require("../../middlewares/authenticate");

router.post("/users/register", register);

router.post("/login", login);

router.get('/current', authenticate, getCurrent);

router.post("/logout", authenticate, logout);

module.exports = router; 



