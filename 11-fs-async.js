const {readFile,writeFile} =require("fs");
console.log("Start the task")
readFile("./content/first.txt","utf8",(err,result)=>{
    if(err){
        console.log("ERROR:Wrong name app.js l5")
        return
    }
    const first=result;
    readFile("./content/second.txt","utf8",(err,result)=>{
        if (err){
            console.log("Error: in second")
            return;
        }
        const second=result
        writeFile("./content/result-async.txt",
            `this is ${first}\nthis is ${second}\n`,{flag:'a'},
            ()=>{console.log("Done")})
    })
})
console.log("End the task")
