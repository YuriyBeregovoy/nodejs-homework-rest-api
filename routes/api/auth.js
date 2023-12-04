const express = require("express");
const router = express.Router();

const { register, login, getCurrent, logout, updateAvatar, verifyEmail} = require("../../controllers/authControll");
const authenticate = require("../../middlewares/authenticate");
const upload = require("../../middlewares/upload")

router.post("/register", register);

router.get('/verify/:verificationToken', verifyEmail);

router.post("/login", login);

router.get('/current', authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar );

module.exports = router; 



