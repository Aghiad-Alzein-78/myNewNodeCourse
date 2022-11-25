const EventEmitter=require("events");
const http=require("http")



const customEmitter=new EventEmitter();
customEmitter.on('response',(name,id)=>{
    console.log(`data received name:${name},id:${id}`);
})
customEmitter.on('response',()=>{
    console.log('data received2');
})

customEmitter.emit('response','john',34);

const server=http.createServer()
server.on('request',(req,res)=>{
    res.end("received")
})


server.listen(5000,()=>'Ready and listening on port 5000')