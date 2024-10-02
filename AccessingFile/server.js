const http = require('http')
const server = http.createServer((req,res)=>{
    
    console.log("res");
    
    res.end("Hellow from node js server")
})
server.listen(3000);