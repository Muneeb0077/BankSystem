const express=require('express');
const router=express.Router();
const { registerUser, loginUser, getUserDetails, transferMoney } = require("../controllers/userController");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/getUserDetail").post(getUserDetails);

router.route("/transfer").post(transferMoney);

module.exports=router;