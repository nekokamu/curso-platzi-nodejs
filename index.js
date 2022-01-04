const express = require('express');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hola mundo en servidor');
});

app.listen(port, () => {
  console.log('Hola, el puerto es ' + port);
});
