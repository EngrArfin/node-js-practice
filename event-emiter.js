const EventEmiter = require("events")
const myEmitter = new EventEmiter()

//listener

myEmitter.on('birthday', ()=>{
    console.log(`Happy birthday`);
})
myEmitter.emit('birthday')