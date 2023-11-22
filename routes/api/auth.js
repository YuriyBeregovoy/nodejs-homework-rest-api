const express = require("express");
const router = express.Router();
const { schemas } = require("../../models/user");
const isValidId = require("../../middlewares/isValidId")


const ctrl = require("../../controllers/authControll");

router.post("/register",isValidId, schemas.registerSchema, ctrl.register);

module.exports = router; 
