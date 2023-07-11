import { Router } from "express";
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

router.route("/productos").get(obtenerProductos).post(crearProducto); // solo puedo poner una de cada tipo(get, etc)
router
  .route("/productos/:id")
  .get(obtenerProductoID)
  .delete(borrarProducto)
  .put(editarProducto);

export default router;
