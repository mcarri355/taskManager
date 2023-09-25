const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, './public')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/about.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
