const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./Content/first.txt','utf8');
const second = readFileSync('./Content/second.txt','utf8');

console.log(first);

writeFileSync('./Content/second.txt',`${second} is my favourite file`);
writeFileSync('./Content/third.txt',`Third text file is my favourite text file`,{flag:'a'});