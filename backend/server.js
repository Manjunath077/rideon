const http = require('http')
const app = require('./index')
const port = process.env.PORT || 5000

// creating the server using the http.createserver method 
const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`Server Running on port : ${port}`)
})