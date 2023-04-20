const chalk = require("chalk");
var validator = require('validator')


// console.log(chalk.red.underline.inverse('failed'));
const res = validator.isEmail("pkcofficial2@gmail.com")
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));