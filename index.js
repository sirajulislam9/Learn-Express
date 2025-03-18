const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! This is a simple Node.js app running on a Docker container.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});