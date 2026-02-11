const mongoose = require("mongoose");
const User = require("../models/user.js");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const userController = require("../controllers/user.js");


router
 .route("/signup")
 .get(userController.renderSignupForm)   //signup form                
 .post(wrapAsync(userController.signup));  //register user


router
 .route("/login")
 .get(userController.renderLoginForm)    //login form
 .post(savedRedirectUrl,                //login user
    passport.authenticate("local", {failureRedirect: "/login",failureFlash: true}), 
    wrapAsync(userController.login)
);     


//logout user
router.get("/logout", userController.logout);



module.exports = router;