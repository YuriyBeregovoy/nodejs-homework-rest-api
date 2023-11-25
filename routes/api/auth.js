const express = require("express");
const router = express.Router();

const { register, login, getCurrent} = require("../../controllers/authControll");
const authenticate = require("../../middlewares/authenticate");

router.post("/register", register);

router.post("/login", login);

router.get('/current', authenticate, getCurrent);

module.exports = router; 



