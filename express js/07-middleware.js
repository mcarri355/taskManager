const express = require('express');
const app = express();

// req ==> middleware ==> res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // This is an example of terminating your code in the middleware
  // res.send('testing')
  next();
};

app.get('/', logger, (req, res, next) => {
  res.send('Home');
});

app.listen(5000, () => {
  console.log('Listen on port 5000');
});
