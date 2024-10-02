// const fs = require('fs');
// const text = fs.readFileSync("./text.txt")
// console.log(text.toString());

// // const fs = require('fs');
// const content = 'Hello, this is a test message!';
// fs.writeFileSync('./text.txt', content);


    // fs.rename('./text.txt', './New.txt', (err) => {
    //   if (err) throw err;
    //   console.log('File renamed!');
    // });


// fs.unlinkSync('./New.txt')

// console.log("end");

// const { exec } = require('child_process');
// exec('start chrome');

// const { exec } = require('child_process');

exec('taskkill /IM chrome.exe /F', (err) => {
  if (err) throw err;
  console.log('Chrome closed!');
});

