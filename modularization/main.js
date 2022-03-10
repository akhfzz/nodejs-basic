const Tiger = require('./tigers');
const Wolf = require('./wolf');

const paduanSuara = (tiger, wolf) => {
    if(tiger.strength > wolf.strength){
        tiger.mengaum();
        return;
    }
    if(wolf.strength > tiger.strength){
        wolf.teriak();
        return;
    }
    console.log("Keduanya sama sama kuat")
}
const obj_tiger = new Tiger();
const obj_wolf = new Wolf();
const ex = paduanSuara(obj_tiger, obj_wolf);
module.exports = ex;