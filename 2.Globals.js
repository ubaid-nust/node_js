// Globals - No Window in Node js because there is no browser

// require  - function to use modules
// module   - info about current module
// process  - info about env where the program is being executed

console.log(__dirname);  //Gives you path to the current directory
console.log(__filename); //Gives you path to the current file

setInterval(()=> {
    console.log("Hello World");
},1000)
