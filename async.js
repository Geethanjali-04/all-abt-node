const a = 10;
const b = 20;

const fs = require('fs');
fs.readFile("file.txt",(err, content)=>{console.log(`file content:${content}`)});
function multiple(a,b)
{
    return a*b;
}

// const https = require('https');
const c = multiple(a,b);

