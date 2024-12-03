// importing the dotenv and configuring to use it 
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const app = express()
const connectToDb = require('./db/databaseConnect')
const userRoutes = require('./routes/user.routes')
const cookieParser = require("cookie-parser")
const captainRoutes = require('./routes/captain.routes')

// calling the function to connect the mongodb database
connectToDb();

// allwing the different origin requests
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get("/",(req,res,next)=>{
    res.send("Hello World")
})
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/captains",captainRoutes)


module.exports = app