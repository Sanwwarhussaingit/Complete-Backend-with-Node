const {Worker}  = require("worker_threads");
console.time();
new Worker("./thread1")
new Worker("./thread2")
new Worker("./thread3")
console.timeEnd();

