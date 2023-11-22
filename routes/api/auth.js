const express = require("express");
const router = express.Router();
const {schemas} = require("../../models/user")


router.post("/register", schemas.registerSchema);

module.exports = router; 
