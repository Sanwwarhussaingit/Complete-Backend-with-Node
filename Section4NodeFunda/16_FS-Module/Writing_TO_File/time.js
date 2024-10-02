import fs from 'node:fs/promises'

setInterval(()=>{
    const now = new Date();
    const currentTime = now.toLocaleTimeString()
    fs.writeFile('text.txt',currentTime)
},1000)
