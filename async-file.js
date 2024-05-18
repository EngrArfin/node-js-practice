const { log } = require('console')
const fs = require('fr')

//reading text asncronass
fs.readFile('./texts/read.txt', (err, data)=>{
    if(err){
        throw Error('Error Shhow')

    }
    console,log(data);
    //writing text asyncronass 
    fs.writeFile('./text/read2.txt', data, 'utf-8', (err) => {
        if(err){
            throw Error('Error Writing Data')
        }
    })
})