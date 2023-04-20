// the http.createServer() method includes request and response parameters which is supplied by node.js

// the request object can be used to get information about the current http request
//e.g., url, request header and data

// the resposnse object can be used to send a response for a current http reques

// if the response from the HTTP server is supposed to be displayed as HTML,
// you should include an http header with the correct content type;

// Creating a server

const http = require('http')

const server = http.createServer((req , res)=>{
    res.end('hello from the other side');
});


server.listen(8000, ()=>{
    console.log("code is working");
});
