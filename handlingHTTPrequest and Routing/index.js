// handle http request and routing in nodejs

const http = require('http')
const url = require("url")


const server = http.createServer((req, res)=>{
    console.log((req.url)); // prints the requested url (ex _ /about, /contact)
    if(req.url=='/'){
        res.end("Welcome to the home page");
    }else if (req.url =='/about'){
        res.end("know more about us");
    }else if(req.url == '/contact'){
        res.end("contact us to know more!");
    }else{
        res.writeHead(404);
        res.end("<h1>Error 404 ! \n Page doesn't exist <h1/>")
    }
})

server.listen(5000 , ()=>{
    console.log("code working just fine");
})