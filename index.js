// const {initialMemoryUsage, yourName, environment, currentMemoryUsage} = require('./process-materi/process-obj');
// const {firstName, lastName} = require('./process-materi/process-argv');
// const ex = require('./modularization/main');
// const date = require('./node-package/test');
// const ganjil = require('./node-package/main');
// const obj = require('./events-practise/test');
// const random_obj = require('./events-practise/main');
const {writableStream, readableStream} = require('./filesistem/main');
// const readable = require('./filesistem/readable-stram');
// const writable = require('./filesistem/stream-write')

//process object
// console.log(`Hai yourname is ${yourName}`);
// console.log(`Mode environment: ${environment}`);
// console.log(`Penggunaan memori dari ${initialMemoryUsage} naik menjadi ${currentMemoryUsage}`);

//process argv
// console.log(`Hello ${firstName} ${lastName}`);

//modularization
// ex

//npm
// console.log(date)
// console.log(ganjil)

//events
// console.log(obj)
// console.log(random_obj)

//filesystem
// console.log(reading);

//readable stream
// readable.on("membaca", () => {
//     try {
//         process.stdout.write(`[${readable.read()}]`);
//         console.log('yey')
//     } catch(error) {
//         // catch the error when the chunk cannot be read.
//     }
// })
// readable.on("clear", () => {
//     console.log("Belajar usai")
// })
// readable.emit('membaca')

//writable stream
// writable.write("Halo namaku faizal\n");
// writable.write("Aku berdomisili di jogja");
// writable.end();

//latihan
readableStream.emit('readable')