const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,"welcome to Aghiad homepage",{"x-me":"just trying Aghiad"})
        res.end("Hello Home page");

    }
    else if(req.url==="/about"){
        res.end("This is about page")
    }else{

        res.end(`<h1>404 NOT FOUND</h1>`);
    }
})
server.listen(3000,()=>{
    console.log("Server is running on port")
})