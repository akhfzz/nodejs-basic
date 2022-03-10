const {EventEmitter} = require('events');

const myEvent = new EventEmitter();

const eventName = ({name}) => {
    console.log(`Salam kenal ${name}`);
}
const eventProdi = ({prodi}) => {
    console.log(`Saya dari prodi ${prodi}`)
}

//cara biasa
// myEvent.on('introduction', eventName);
// myEvent.on('introduction', eventProdi);

//cara handler function
const introHandler = ({name, prodi}) => {
    eventName(name);
    eventProdi(prodi)
}
myEvent.on('introduction', introHandler)

const obj = myEvent.emit('introduction', {name: 'faizal', prodi: 'informatika'})

module.exports = obj;

