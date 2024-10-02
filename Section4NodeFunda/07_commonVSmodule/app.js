// 1
// module.exports.num = 10
// module.exports.user = {name : "Sanwwar hussain"}
// console.log(this);
// app.js is running
// Timer.js is running
// Timer2.js is running
// Timer3.js is running


// 2
// console.log("app.js is running");
// import timer from './timer.js' 


// output
// timer3.mjs is running
// Timer2.js is running
// Timer.js is running
// app.js is running
// import run first then execute app.js content | hoisting

//3
// console.log("app.js is running");
// const timer = require('./timer.js')

//4
// access multiple value

import myVal,{ num ,str , fn,bool, obj2 } from "./multipleVal.js"

// { num ,str , fn,bool, obj2 } this not object destruture

// console.log(num);
// console.log(str);
// console.log(fn);
// console.log(bool);
// console.log(obj2);

console.log(myVal);










