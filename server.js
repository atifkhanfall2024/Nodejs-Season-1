// creating an http server  so we require to import a module 

const http = require("http")

  const server= http.createServer((req,res)=>{

    if(req.url ==="/getuserdata"){
        res.end("Hi  , Atif how are you ")
    }
  
    res.end("This is my first server of node js")
})


server.listen(3000)