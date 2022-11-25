const {readFile,writeFile}=require("fs").promises;
const util=require("util")

const readFilePromise=util.promisify(readFile)

const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,"utf8",(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        });
    })
}




const start=async()=>{
    try{
        const first=await getText("./content/first.txt")
        const second=await getText("./content/second.txt")
        console.log(first);
        console.log()
    }
    catch(error){
        console.log("null");
    }
}
const start2=async()=>{
    try{
        const first=await readFile("./content/first.txt","utf8")
        const second=await readFile("./content/second.txt","utf8")
        await writeFile("./content/result-async.txt",`${first}\n--------------\n${second}\n---------------------\n`,{flag:'a'})
    }
    catch(error){
        console.log("ERROR:While reading the files we encountered an error");
    }
}
start2()