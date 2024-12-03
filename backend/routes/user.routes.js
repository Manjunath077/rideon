const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

// requiring the entire user controller 
const userController = require("../controllers/user.controller")

// requiring the middleware to check whether the user is logged in or not 
const authMiddelware = require('../middlewares/auth.middleware')


router.post("/register",[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage("Firstname must be atleast 5 characters"),
    body('password').isLength({min: 8}).withMessage("Password must be atleast 8 characters")
],userController.registerUser)


router.post("/login",[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 8}).withMessage("Password must be atleast 8 characters")
],userController.loginUser)


// here we use the "authMiddleware.authUser" to check whether the user is logged in or not to show the profile details 
router.get("/profile",authMiddelware.authUser,userController.getUserProfile)

router.get('/logout', authMiddelware.authUser,userController.logoutUser)

module.exports = router