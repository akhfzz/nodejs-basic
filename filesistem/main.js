const fs = require('fs');
const { resolve } = require('path');

const readFile = (error, data) => {
    if(error){
        console.log('Sistem gagal membaca file');
        return;
    }
    console.log(data)
}

const readableStream = fs.createReadStream(resolve(__dirname, 'notes.txt'), {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on('end', () => {
  writableStream.end();
});

// const reading = fs.readFile("./filesistem/notes.txt", "UTF-8", readFile)

module.exports = {writableStream, readableStream};