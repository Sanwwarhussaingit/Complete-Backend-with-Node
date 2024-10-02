import { log,dir,time,timeEnd } from "console";
import fs from "node:fs";

// fs.readFile('./index.html',(err,data)=>{
//     log(data.toString());
// })
// const a = fs.readFileSync('./index.html','utf8')
// log(a)

time()
let i=0
const id = setInterval(()=>{
    log(i++)
    if(i===100){
        clearInterval(id) 
        timeEnd()
    }
},10)
//not block main thread
const pa =  await fs.readFileSync('./test.txt','utf8')
log('reading done')

log("end")
