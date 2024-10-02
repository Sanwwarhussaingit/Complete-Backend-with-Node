// const {exec} = require('child_process');
//set system variables using node js
// exec(`powershell -Command "setx varName 'sanwwar huusian' /M"`);
// const enVariable = process.env;
// setInterval(() => {
//     console.log(enVariable);
// },1000)
//num100=100 age=21 node --inspect app.js
//env -u PS1 -u num node --inspect app.js

const fs = require('fs');

const fileData = fs.readFileSync('./.env').toString();
fileData.split(/\r?\n/).forEach((variable) => {
    if (variable) { // Avoid empty lines
        const [key, value] = variable.split('=');
        if (key && value) { // Ensure both key and value exist
            process.env[key] = value;
        }
    }
});

setInterval(() => {
    const a = process.env;
    console.log(a);
}, 1000); // Removed the trailing comma
