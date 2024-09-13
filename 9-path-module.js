const path = require('path');

// console.log(path.sep);

const filePath = path.join('Content','Subfolder','test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base); // Will show the base name (test.txt)

const absolute = path.resolve(__dirname,'Content','Subfolder','test.txt')
console.log(absolute); // Will show the absolute path