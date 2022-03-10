const fs = require('fs');

const readable = fs.createReadStream('./filesistem/notes.txt',{
    highWaterMark: 10 //10 bytes
});

module.exports = readable