const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const port = process.env.PORT || 2018;
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/data.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/assets/json/webgl/data.json'));
});

app.get('/world.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/assets/images/webgl/world.jpg'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/*
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '')));

app.get('/data.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/assets/json/webgl/data.json'));
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
*/
