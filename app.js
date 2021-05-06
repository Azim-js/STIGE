const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    fs.readFile(__dirname, +'index.html');
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('index.html').pipe(res);
  });
 
  app.listen(5000, () => {
    console.log('Server Running.');
  });