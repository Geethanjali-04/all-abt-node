// file pattern
// const {sum} =  require("./sum.js");
// console.log(`sum of two nums ${sum(10,20)}}`);


// separate folder pattern
// in the index folder u need to import the all the math functions(all files function u need within)
const {multiply, sum, sub} = require('./calculate/index.js');
console.log(`multiplication of 2 nums ${multiply(10,20)}`);
console.log(`sum of 2 nums ${sum(10,20)}`);
console.log(`sub of 2 nums ${sub(10,20)}`);

// importing a json file
const data = require('./data.json');
console.log(data);
