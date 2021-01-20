const xyz = require('./people');
// destructuring
const { people, ages } = require('./people');

// object build into node
const os = require('os')

// equal to whatever is exported by people.js
console.log(xyz);
console.log(xyz.people);
console.log(people);
console.log(ages);

console.log(os);
console.log(os.platform(), os.homedir());