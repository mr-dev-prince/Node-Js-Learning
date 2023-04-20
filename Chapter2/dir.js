const fs = require('fs')


// creating a directory if it does not exist
if(!fs.existsSync('./new')){
    fs.mkdir('./new', (err)=>{
        if(err) throw err;
        console.log("directory created");
    } )
}

// removing a directory if it exist

if(fs.existsSync('./new')){
    fs.rmdir('./new', (err)=>{
        if(err) throw err;
        console.log("directory deleted");
    })
}