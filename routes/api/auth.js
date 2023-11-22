const express = require("express");
const router = express.Router();
const { registerSchema } = require("../../models/user");

const {register } = require("../../controllers/authControll");

router.post("/user/register", registerSchema, register);

module.exports = router; 
