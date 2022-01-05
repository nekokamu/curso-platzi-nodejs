const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo en servidor');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta o endpoint');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }
  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('Filter');
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 1',
    price: 1000
  });
});

app.get('/categories/:category_id/products/:product_id', (req, res) => {
  const { category_id, product_id } = req.params;
  res.json({
    category_id,
    product_id
  });
});

app.listen(port, () => {
  console.log('Hola, el puerto es ' + port);
});
