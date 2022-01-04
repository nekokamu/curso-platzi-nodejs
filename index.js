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
  res.json({
    name: 'Product 1',
    price: 1000
  });
});

app.listen(port, () => {
  console.log('Hola, el puerto es ' + port);
});
