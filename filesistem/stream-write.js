const fs = require('fs');

const writable = fs.createWriteStream('./filesistem/notes.txt')

module.exports = writable
