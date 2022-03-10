const filesys = require('fs');

//async
const readFileJson = (error, data) => {
    if(error){
        console.log(error);
        return;
    }
    console.log(data);
};
// const reading = filesys.readFile("./filesistem/dt.json", "UTF-8", readFileJson);

//sync

const reading = filesys.readFileSync("./filesistem/dt.json", "UTF-8");

module.exports = reading