const express = require("express");
const router = express.Router();
const { registerSchema } = require("../../models/user");
// const isValidId = require("../../middlewares/isValidId")

const { register} = require("../../controllers/authControll");

router.post("/register", registerSchema, register);

module.exports = router; 
