// modules  - encapdulated code(minimum sharing)
// CommonJS - every file is a module(by default)

// const ubaid = 'Ubaid'
// const ghauri = 'Ghauri'

// const greet = (name) => {
//     console.log(`Hello there ${name}`);
// }

// greet(ubaid);
// greet(ghauri);
// greet('Hamza');

const names = require('./4.names');
const greet = require('./5.utils');
// greet(names.ghauri);
// greet(names.ubaid);

// const data = require('./6.alternative-flavor');

// console.log(data);

require('./7-Mind-Grenade');