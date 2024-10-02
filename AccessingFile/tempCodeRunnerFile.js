exec('taskkill /IM chrome.exe /F', (err) => {
  if (err) throw err;
  console.log('Chrome closed!');
});
