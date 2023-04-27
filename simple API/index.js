// API = application programming interface
//  it allows softwares to communicate with each other
//  it is like a service that allows us to request a data

const http = require('http')
const fs = require('fs')
const { json } = require('stream/consumers')

const server = http.createServer((req, res)=>{
    const data = fs.readFileSync(`${__dirname}/index.json`, 'utf-8');
    const orgData = JSON.parse(data)

    if(req.url == '/'){
        res.end("Welcome to the homePage")
    }else if(req.url == '/userapi'){
        res.writeHead(200, {"content-type": "application/json"})
            res.end(orgData[1].title);
    }
}) 

server.listen(8000 , ()=>{
    console.log("code working just fine");
}) 