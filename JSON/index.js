const fs = require('fs')



// <!-- JSON = JavaScript Object Notation]
// JSON is a lightweight format for storing and transporting 
// JSON is often used when data is sent from the server to a web page. -->

const { fileURLToPath } = require("url")


const bioData ={
    name: "Prince",
    age : 24,
    channel : "The prince"
}

// 1. convert to JSON
// 2. add into another fileURLToPath
// 3. readfile
// 4. again convert back to js obj original 
// 5. console.log(object);



// const jsonData = JSON.stringify(bioData)
// fs.writeFile('json1.json',jsonData, (err)=>{
//     console.log('done');
// })


// API

fs.readFile("json1.json", "utf-8",(err, data)=>{
    const orgData = JSON.parse(data)
    console.log(data); // {"name":"Prince","age":24,"channel":"The prince"}
    console.log(orgData); // { name: 'Prince', age: 24, channel: 'The prince' }
})






































// const jsonData = JSON.stringify(bioData)
// console.log(jsonData.channel);  //returns undefined

// const objData = JSON.parse(jsonData);

// console.log(objData.channel); // returns the data value