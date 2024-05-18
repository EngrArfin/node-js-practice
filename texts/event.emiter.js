/* https://nodejs.org/docs/latest/api/events.html#emitteremiteventname-args */

const EventEmiter = require("events")
const myEmitter = new EventEmiter()

//listener

myEmitter.on('birthday', ()=>{
    console.log(`Happy birthday`);
})
myEmitter.emit('birthday')