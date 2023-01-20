const generateCSV = require('./service/generateCSV');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});

// const start = async (cValue) => {
//   const res = await generateCSV('alpine', cValue);
//   if (res.cursor) start(res.cursor);
// };

// start();

generateCSV('alpine');
