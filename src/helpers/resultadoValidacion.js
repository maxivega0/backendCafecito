import { validationResult } from "express-validator";

const resultadoValidacion = (req,res,next) =>
{
    // validar datos del body antes de pedir algo a la BD
    const errors = validationResult(req);
    // errors.isEmpty(); devuelve booleano, si es true es xq no hay errores.
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()  // array de errores con los chequeos de express validator 
      })      
    }
    next();
}

export default resultadoValidacion;