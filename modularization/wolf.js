class Wolf{
    constructor(){
        this.strength = Math.floor(Math.random() * 100);
    }
    teriak(){
        console.log("owooooooo!");
    }
}

module.exports = Wolf