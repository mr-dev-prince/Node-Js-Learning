// streams are objects that let you read data from a source or write data to a destination in continuous fashion.

// four types of stream -- readable, writable, duplex, transform

// straming means listening to music,without downloading it on our system, in real time

// each type of streams is an EventEmitter instance and throws several events at different instance of times.

// for Example, some of the commonly used events are-

// data - this event is fired when there is data is available to read.

// end - this event is fired when there is no more data to read.

// error - this event is fired when there is any error receiving or writing data

// finish- this event is fired when all the data has been flushed to underlying system

const fs = require("fs");

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // fs.readFile("input.txt", (err, data)=>{
  //     if(err) return console.error(err)
  //     res.end(data.toString())
  // })
  const rstream = fs.createReadStream("input.txt");

  rstream.on("data", (chunkData) => {
    res.write(chunkData);
  });

  rstream.on("end", () => {
    res.end();
  });
  rstream.on("error", (err)=>{
    console.log(err);
    res.end("file not found")
  })
});

server.listen(8000, "127.0.0.1")
