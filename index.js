//Local-module
const {a , add} = require('./local-1')
const {a: a2 , add: add2} = require('./local-2')

console.log(add2(3,4,6))


//built-in-module
const path = require("path")

/* console.log(path.parse("C:/Projects2/node-js-practice/index.js")) */
console.log(path.parse("C:/Projects2/node-js-practice/", "local-1.js"));