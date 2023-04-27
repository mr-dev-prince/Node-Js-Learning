
// Event module

// node.js has a built-in module, called "events"
//where you can create fire- and listen for- your own events.

// example - registering for the events to be fired only one time using once
// -- creating an event emitter instance and register a couple of calbacks
// -- registering for the event with callback parameter 


const { ok } = require("assert");
const EventEmitter = require("events")

const event = new EventEmitter();

// event.on('sayMyName', ()=>{
//     console.log("Your name is Prince Kumar Chaurasia");
// })

// event.on('sayMyName', ()=>{
//     console.log("Your name is already displayed");
// })

event.on("checkPage", (sc , msg)=>{
    console.log(`status is ${sc} and the page is ${msg}`);
})

event.emit('checkPage', 200 , ok);




