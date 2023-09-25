const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('User Hit Resource');
  res.status(200).send('Home Page Found');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page Found');
});

app.all(`*`, (req, res) => {
  res.status(404).send('<h1>Resource Not Found</h1>');
});

app.listen(5000, () => {
  console.log('listening on 5000');
});
