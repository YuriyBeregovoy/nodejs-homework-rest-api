const express = require("express");
const router = express.Router();
// const isValidId = require("../../middlewares/isValidId")

const { register} = require("../../controllers/authControll");

router.post("/register", register);

module.exports = router; 


// http://localhost:3000/api/auth/register

// {
//     "email": "bogdan@gmail.com",
//     "password": "123456"
// }