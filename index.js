const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json()); //Middleware

app.get('/', (req, res) => {
  res.send('Hola mundo en servidor');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta o endpoint');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Hola, el puerto es ' + port);
});
