const userModel = require('../models/user.model')
const captainModel = require('../models/captain.model')
const blackListTokenModel = require('../models/blacklistToken.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.authUser = async (req,res,next)=>{
    //  req.cookies.token: Looks for the token in the cookies sent by the client.
    //  req.headers.authorization: Looks for the token in the Authorization header.
    //      If found, the split(' ')[1] extracts the token after the word Bearer. 
    //      For example, if the header is Bearer <token>, it gets <token>.

    const token = req.cookies.token || req.headers.authorization?.split('')[1];

    if (!token) {
        return res.status(401).json({error:true,message:"Unauthorized Access token"})
    }

    const isBlackListed = await blackListTokenModel.findOne({token : token})
    if (isBlackListed) {
        return res.status(401).json({error :true,message:"Unauthorised blacklisted"})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)

        req.user = user

        return next()
    } catch (error) {
        res.status(401).json({error:true, message:"unauthorized User Access"})
    }
}

module.exports.authCaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split('')[1];

    if (!token) {
        return res.status(401).json({error:true,message:"Unauthorised Captain token"})
    }

    const isBlackListed = await blackListTokenModel.findOne({token:token})

    if (isBlackListed) {
        return res.status(401).json({error:true,message:"Unauthorised Captain token blacklisted"})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain
        return next()
    } catch (error) {
        res.status(401).json({error:true,message:"Unauthorised"})
    }
}