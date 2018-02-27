const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const port = process.env.PORT || 2018;
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/planetaryMap.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/assets/json/planetaryjs/planetaryMap.json'));
});

app.get('/data.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/assets/json/webgl/data.json'));
});

app.get('/world1.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/assets/images/webgl/world1.jpg'));
});

app.get('/world12.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/assets/images/webgl/world2.jpg'));
});

app.get('/world3.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/assets/images/webgl/world2.jpg'));
});

app.get('/world4.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/assets/images/webgl/world4.jpg'));
});

app.get('/world5.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/assets/images/webgl/world5.jpg'));
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
