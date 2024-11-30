// 1) node js is a combination of js v8 engine and libuv which is a c library.
// 2) libuv is mainly responsible for performing async tasks.
// 3) To manage these execution of async tasks, it has 3 components namely thread Pool, event loop and callback queues.
// 4) EventLoop is the one , that keeps running and checks the callstack and callbackqueue. 
// 5) EventLoop does this in 4 phases. 
// 6) 1) timers 2)poll 3)check 4) close
// 7) Before every phase , it checks for promise and process.nextTick .If these present in callbackQueue this will be executed, and the cycle keeps gettting executed


const fs = require('fs');

// read file ---> poll phase
fs.readFile('file.txt',(err,data)=>{
    // this will be executed in the next cycle.
    setTimeout(()=>{ console.log("2nd timeout")});
    // this executed first, because now event loop in poll phase , then it goes to check phase of the same cycle.
    setImmediate(()=>{console.log("2nd immediate")});
    console.log("File read successfully");
    console.log(data.toString());
});

// check phase
setImmediate(()=>{
    console.log("set Immediate");
}, 0);

// timer phase
setTimeout(()=>{
    console.log("set time out");
});

// before every phase
process.nextTick(()=>{console.log("next Tick")});

console.log("last line of the file");

