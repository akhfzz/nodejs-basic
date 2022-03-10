const {EventEmitter} = require('events');

const myEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

const birthdayEvent = ({name}) => {
    birthdayEventListener(name);
}

myEmitter.on('birthday', birthdayEvent);
const random_obj = myEmitter.emit('birthday', {name: 'faizal'})

module.exports = random_obj