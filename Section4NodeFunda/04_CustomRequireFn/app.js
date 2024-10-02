const b = load("./src/math.js");
console.log(b);
// const math = load("./math.js");
// console.log(su(3, 4, 4, 4));

// const vm = require("vm");
// const num = 10

// vm.runInThisContext('console.log(num)')
// vm.runInNewContext(console.log(num),{num})
// console.log('running');

function load(path) {
  const fs = require("fs");
  // const vm = require("vm");

  const fileContent = fs.readFileSync(path).toString();
  //   console.log(fileContent);
  return (function (send) {
    // vm.runInThisContext('fileContent');
    // vm.runInNewContext(fileContent, { send, load, console });
    eval(fileContent);
    return send;
  })({});
}
console.log("rrnn");
