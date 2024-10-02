//thrad1

// console.time();
console.log("thred1 file started");
let i = 0;
while (i < 10000000000) {
  debugger
  if (i % 5000000000 == 0) console.log("runnung loop 1", i);
  i++;
}
// console.timeEnd();
