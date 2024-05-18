const fs = require('fs')

//reading a file text 

const readText = fs.readFileSync('./texts/read.txt', 'utf-8')

//writin  a text
const writtenText = fs.writeFileSync('./texts/erite.txt', readText + 'This is my write text')
console.log(writtenText)
 
/* console.log(readText) */