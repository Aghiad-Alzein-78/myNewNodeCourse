const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Home page")
    }
    if(req.url==="/about"){
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i},${j}`)
            }
        }
        res.write("About Page")
    }
    console.log("request received")
    res.write("Error Page")
    res.end()
})

server.listen(5000,()=>{
    console.log("up and running on port 5000")
})