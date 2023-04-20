const os = require("os")
const path = require("path")
// const math = require("./math")  // destructured in line number 6
// destructuring the above math module

const {add , multiply, substract, divide} =require("./math")

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);


console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(multiply(5,1));
console.log(add(9,10));
console.log(substract(6,10));
console.log(divide(5,98));