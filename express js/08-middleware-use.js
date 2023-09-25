const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');

/*
req to middle ware to response
oder matters if you place the app.use after the gome get, then it wont run on the home get since the response will end before the middleware has a chance to run 
// app.use(logger)

if you have several middle ware then you can call them in an array where again order matters
*/

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.use('/api', [logger, authorize]);
/*
This will apply the logger to any path that includes /api as a port of its path
This is a nice way for you to run a logger on api to stop a certain amount of requests
but still allow them ton the home and the documentation
Old wat of app.use('/api', logger)*/

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  console.log(res.user);
  res.send('Items');
});

app.listen(5000, () => {
  console.log('listening on 5000');
});
