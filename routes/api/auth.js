const express = require("express");
const router = express.Router();
// const isValidId = require("../../middlewares/isValidId")

const { register} = require("../../controllers/authControll");

router.post("/user/register", register);

module.exports = router; 
