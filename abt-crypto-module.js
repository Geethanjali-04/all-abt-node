const crypto = require('crypto');
// main thread will be blocked if it is a sync operation
const syncKey = crypto.pbkdf2Sync("thisispassword","salt" ,50000, 40, "sha512");

console.log(syncKey.toString('hex'));

// main thread will not be blocked if it is a asyn operation
crypto.pbkdf2("thispassword", "salt", 50000, 50, "sha512", (err,key)=>{
    console.log(`asynckey ${key}`);
});