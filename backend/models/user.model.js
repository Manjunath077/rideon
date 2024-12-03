const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength: [3 , "First name must be atleast 3 characters"]
        },
        lastname:{
            type:String,
            minlength: [3 , "First name must be atleast 3 characters"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,"Email must be atleast 5 characters"]
    },
    password:{
        type:String,
        required:true,
        // the particular field is excluded in the querying of the database
        minlength:[8,"Email must be atleast 5 characters"],
        select:false
    },
    socketId:{
        type:String
    }
})


// method is used to generate the unique identification token for each user
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id},process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}

// this method is used to compare the password entered by the user with the password stored in the database
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

// this method is used to convert the password in to a unreadable format so that no one can read it 
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}

const userModel = mongoose.model('user',userSchema)

module.exports = userModel