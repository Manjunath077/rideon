const blacklistTokenModel = require('../models/blacklistToken.model')
const captainModel = require('../models/captain.model')
const captainService = require('../services/captain.service')
const {validationResult} = require('express-validator')

module.exports.registerCaptain = async(req,res,next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({error: errors.array()})
    }

    const {fullname:{firstname,lastname},email,password,vehicle:{color,plate,capacity,vehicleType}} = req.body

    // to check whether the captain already exists or not 
    const isCaptainAlreadyExists = await captainModel.findOne({email})
    if (isCaptainAlreadyExists) {
        return res.status(400).json({error:true,message:"Captain Already registered with the email"})
    }
    const hashedPassword = await captainModel.hashPassword(password)
    
    const captain = await captainService.createCaptain({
        firstname,
        lastname,
        email,  
        password:hashedPassword,
        color,
        plate,
        capacity,
        vehicleType
    })

    const token = await captain.generateAuthToken()

    return res.status(201).json({token,error:false,message:"Captain Registered Successfully",data:captain})
}


module.exports.loginCaptain = async(req,res,next)=>{
    const errors = validationResult(req)

    if (!errors) {
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password} = req.body
    const captain = await captainModel.findOne({email}).select('+password')

    if(!captain){
        return res.status(401).json({error:true,message:"Invalid email or password"})
    }

    const isMatch = await captain.comparePassword(password)

    if (!isMatch) {
        return res.status(401).json({error:true,message:"Invalid password"})
    }

    const token = captain.generateAuthToken();

    res.cookie('token',token)

    res.status(200).json({token,error:false,captain})
}


module.exports.getCaptainProfile = async(req,res,next)=>{
    res.status(200).json({error:false,message:"Profile fetched successfully",captain: req.captain})
}


module.exports.logoutCaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split('')[1];
    await blacklistTokenModel.create({token});
    res.clearCookie('token')
    res.status(200).json({error:false,message:"Logged Out Successfully"})
}