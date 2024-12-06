const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model') 

module.exports.registerUser = async(req,res,next)=>{
    // getting the result of the validation 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({error:true,message:errors.array()})
    }
    // requiring the data coming from the frontend from the req.body 

    // console.log(req.body)
    const {fullname:{firstname,lastname},email,password} = req.body

    // to check whether the user already exists or not 
    const isUserAlreadyExists = await userModel.findOne({email})

    if (isUserAlreadyExists) {
        return res.status(400).json({error:true,message:"User Already registered with the email"})
    }
    // hashing the password 
    const hashPassword = await userModel.hashPassword(password)

    // calling the createuser method in the userService file
    const user = await userService.createUser({
        firstname,
        lastname,
        email,
        password: hashPassword
    })

    // generating the unique token for authentication 
    const token = user.generateAuthToken();

    res.status(201).json({
        token,
        error:false,
        message:"User Registered Successfully ",
        data:user
    })
}


module.exports.loginUser = async(req,res,next) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email ,password} = req.body
    const user = await userModel.findOne({email}).select('+password')

    if(!user){
        return res.status(401).json({error:true,message:"Invalid email or password"})
    }

    const isMatch = await user.comparePassword(password)

    if(!isMatch){
        return res.status(401).json({error:true,message:"Invalid Password "})
    }

    const token = user.generateAuthToken()

    res.cookie('token',token)

    res.status(200).json({
        token,
        error:false,
        message:"User Logged In Successfully",
        data:user
    })

}


module.exports.getUserProfile = async(req,res,next) =>{
    res.status(200).json(req.user)   
}

module.exports.logoutUser = async(req,res,next)=>{
    // res.clearCookie('token')
    // const token = req.cookies.token || req.headers.authorization.split('')[1];

    // await blacklistTokenModel.create({token})

    // res.status(200).json({message: 'Logged Out'})

    res.clearCookie('token');

    // Extract the token from cookies or Authorization header
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(400).json({ error: true, message: "No token provided" });
    }

    // Add the token to the blacklist
    await blacklistTokenModel.create({ token });

    res.status(200).json({ message: "Logged Out" });
}