const _ = require('lodash');

const ganjil = _.partition([30,23,21,5,6,3,7,8], x => x % 2 === 1);

module.exports = ganjil