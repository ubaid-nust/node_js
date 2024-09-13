const {readFile, writeFile} = require('fs');
console.log("Start");

readFile('./Content/first.txt','utf8',(err,result)=> {
    if(err) {
        console.log(err);
    }
    // console.log(result);
    readFile('./Content/second.txt','utf8',(err,result)=> {
        if(err) {
            console.log(err);
        }
        // console.log(result);
        writeFile('./Content/result-async.txt','Here is the async file using fs module',{flag:'a'},(err,result) => {
            if(err) {
                console.log(err);
            }
            console.log("Done with the write task");
        })
    })
})

console.log("Ready for the next task");
console.log("Ready for 3rd task");