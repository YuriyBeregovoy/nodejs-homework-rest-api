const express = require("express");
const router = express.Router();
const { schemas } = require("../../models/user");

const ctrl = require("../../controllers/authControll");

router.post("/user/register", schemas.registerSchema, ctrl.register);

module.exports = router; 
