const logEvents = require('./logEvents')

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('logs', (msg) => logEvents(msg))

setTimeout(() => {
  // emit events
  myEmitter.emit('logs', "log event emitted");
}, 2000);
