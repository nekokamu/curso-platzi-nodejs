const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo en servidor');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta o endpoint');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 2000
    }
  ]);
});

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
