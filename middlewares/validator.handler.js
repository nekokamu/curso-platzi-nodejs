const boom = require('@hapi/boom');

//Middleware dinamico
function validatorHandler(schema, property){
  return (req, res, next) => { //Closure property, retorna un middleware de forma dinamica
    const data = req[property]; //property: body, params, query
    const { error } = schema.validate(data, { abortEarly: false });

    if (error){
      next(boom.badRequest(error));
    }

    next();
  }
}

module.exports = validatorHandler;
