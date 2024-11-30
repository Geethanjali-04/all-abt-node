const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.end("hello node");
})

server.listen(4444, ()=>{ console.log("server running!")});

