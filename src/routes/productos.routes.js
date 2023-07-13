import { Router } from "express";
import { check } from "express-validator";
import {
  crearProducto,
  obtenerProductos,
  obtenerProductoID,
  borrarProducto,
  editarProducto,
} from "../controllers/productos.controllers";
import validarJWT from "../helpers/token-verify";
import validarProducto from "../helpers/validacionProductos";



const router = Router();

// app.get('/productos', (req, res) =>{
//  res.send("se hizo la peticion get")
// })

router
  .route("/productos")
  .get(obtenerProductos)
  .post([validarJWT, validarProducto], crearProducto); // solo puedo poner una de cada tipo(get, etc)
router
  .route("/productos/:id")
  .get(obtenerProductoID)
  .delete(borrarProducto)
  .put(validarProducto, editarProducto);

export default router;
