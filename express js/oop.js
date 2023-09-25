// Lets go nodemon, postman and queries / api
const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1> Home Page </h1> <a href="/api/products">Products</a>');
});

// Return all products. api set up
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, age } = product;
    return { id, name, age };
  });
  res.json(newProducts);
});

// This is how you set up params for the data query

app.get('api/products/:productID', (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    // you will get a number back
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('Product does not exist');
  }
  return res.json(singleProduct);
});

app.listen(5000, () => {
  console.log('listening on 5000');
});
