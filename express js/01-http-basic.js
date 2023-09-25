const http = require('http');
const path = require('path');

const server = http
  .createServer((req, res) => {
    console.log(req.method);
    const url = req.url;
    // home page
    if (url === '/') {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write('<h1>Home Page of Bernard(/h1>');
      res.end();
    } else if (url === '/about') {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write('<h1>I gues not: 404');
      res.end();
    }
  })
  .listen(5000);
