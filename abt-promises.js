
// Promise is an object that represents eventual completion or rejection of an async operation.
// Promise mainly can have three states :
// 1) pending 2) fulfilled(resolved) 3) rejected(reject)
// creation of promise 
// create a new Promise constructor which accepts a function with two params (resolve and reject) 
// if you call the resolve with the data (it calls the callback function in the then)
// error handling while consuming the promise
// if you call the reject with err message(it calls the calback function in the catch)


const cart  = ["shoes", "pants", "kurtis"];

// promise creation
function createOrder(cart)
{   
    // promise creation
    return new Promise(function(resolve,reject){
        if(cartValid(cart))
        {
           setTimeout(resolve({orderId: 1,count: cart.length}),5000);
        }
        else{
            const err = new Error("cart not valid");
            reject(err);
        }
    });
}

// consuming promise
const promise = createOrder(cart)
promise.then(function(orderDetails)
{
    console.log(`order details: ${orderDetails.count}`);
}).catch(function(err)
{
console.log(err.message);
})

// helper method
function cartValid(cart)
{
    return false;
}