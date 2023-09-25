// HTTP App Template
const http = require('http');
const path = require('path');
const { readFileSync } = require('fs');

// get All Files
const homePage = readFileSync(path.join(__dirname, '/public/index.html'));
const homeStyles = readFileSync(path.join(__dirname, '/public/styles.css'));
const homeImage = readFileSync(path.join(__dirname, '/public/logo.svg'));
const homeLogic = readFileSync(path.join(__dirname, '/public/browser-app.js'));

const server = http.createServer((req, res) => {
  const url = req.url;
  // Homepage
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1> about page</h1>`);
    res.end();
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.write(homePage);
    res.end();
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    res.write(homePage);
    res.end();
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(homePage);
    res.end();
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Page Not Found</h1>`);
    res.end();
  }
});
server.listen(5000);
