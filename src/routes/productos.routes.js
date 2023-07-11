import { Router } from "express";
import { check } from "express-validator";
import {
  crearProducto,
  obtenerProductos,
  obtenerProductoID,
  borrarProducto,
  editarProducto,
} from "../controllers/productos.controllers";

const router = Router();

// app.get('/productos', (req, res) =>{
//  res.send("se hizo la peticion get")
// })

router
  .route("/productos")
  .get(obtenerProductos)
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es obligatorio")
        .isLength({min:2, max:100})
        .withMessage('El nombre del producto debe tener entre 2 y 100 caracteres')
    ],
    crearProducto
  ); // solo puedo poner una de cada tipo(get, etc)
router
  .route("/productos/:id")
  .get(obtenerProductoID)
  .delete(borrarProducto)
  .put(editarProducto);

export default router;
