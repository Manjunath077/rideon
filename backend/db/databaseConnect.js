const mongoose = require('mongoose')


const connectToDb = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Mongodb Connected")
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectToDb