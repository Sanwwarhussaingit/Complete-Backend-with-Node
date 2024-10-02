function sum(...nums){
    return nums.reduce((curr,acc)=> curr+acc);   
}
function product(...nums){
    return nums.reduce((curr,acc) => curr*acc)
}


// console.log("math 9:",module.exports);
module.exports = {
    sum,
    product,
}
console.log(module);

// module.exports.sum = sum
// module.exports.product = product

// console.log("math:17",exports)

// exports.sum = sum
// exports.product = product
//define export -----------------
// console.log("math 15:",module.exports);
// console.log("math 15:",exports);
// console.log(module.exports === exports)

// let send = module.exports

// send.sum = sum
// send.product = product
