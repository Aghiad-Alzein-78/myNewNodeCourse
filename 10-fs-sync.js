const {readFileSync,writeFileSync}=require("fs");

const first=readFileSync("./content/first.txt","utf8")
const second=readFileSync("./content/second.txt","utf8")


console.log(first)
console.log("__________________________________")
console.log(second)

writeFileSync("./content/result-sync.txt",
"this is the third file\n",{flag:'a'})