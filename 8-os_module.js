const os=require("os")

const user=os.userInfo()
const operating_system=os.type()
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:Math.round(os.totalmem()/(1024*1024*1024)),
    freeMem:os.freemem()/(1024*1024*1024)
}
console.log(user,currentOs)