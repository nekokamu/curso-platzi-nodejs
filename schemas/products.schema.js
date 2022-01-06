const Joi = require('joi');

//Schemas: tipo.validacion
const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

//Schemas para los metodos
const createProductSchema = Joi.object({
  name: name.required(), //Es un campo requerido
  price: price.required()
});

const updateProductSchema = Joi.object({
  name: name //Al ser un update los campos pueden variar
  price: price
});

const getProductSchema = Joi.object({
  id: id.required() //Aunque sea solo un campo, es una buena practica tener el objeto en el codigo
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
