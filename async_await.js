// 1. What is Async/Await?

// Async/await is a feature in JavaScript introduced with ES2017 (ES8) to simplify working with asynchronous code.
// It is a syntactic sugar built on top of Promises, making asynchronous code look and behave like synchronous code for better readability and maintainability.
// It allows you to write asynchronous code in a sequential manner, avoiding callback hell or chaining multiple .then() blocks.

// 2. How Does It Work?

// async: Declares a function to always return a Promise. Even if you return a non-Promise value, it gets automatically wrapped in a Promise.
// await: Pauses the execution of an async function until the awaited Promise resolves or rejects. It makes the code wait for the result before continuing.



async function handle_payements()
{
   const user = await getUser();
   console.log(user);
   const cartDetails = await getCartDetails();
   console.log(cartDetails);

   const paymentStatus = await getPaymentStatus();
   console.log(paymentStatus);
}

function getUser()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve({user_id:1}),40000);
    })
}

function getCartDetails()
{
    return new Promise((resolve, reject)=>{
       setTimeout(()=>resolve({"count": 3, "price": 500}),10000);
    })
}

function getPaymentStatus()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve({"status": "success"}),30000);
    })
}


handle_payements();