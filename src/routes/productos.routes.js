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
        .isLength({ min: 2, max: 32 })
        .withMessage(
          "El nombre del producto debe tener entre 2 y 100 caracteres"
        ),
      check("precio")
        .notEmpty()
        .withMessage("El precio es un dato obligatorio")
        .isNumeric()
        .withMessage("El precio debe ser un número ")
        .custom((value) => {
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            throw new Error("El precio debe estar entre 1 y 10000");
          }
        }),
      check("imagen")
        .isEmpty()
        .withMessage("La url de imagen es obligatoria")
        .matches(/^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/)
        .withMessage(
          'La URL debe comenzar con "http://" o "https://", seguido de un dominio válido y una ruta opcional.'
        ),
        check('categoria')
        .isEmpty()
        .withMessage('La categoria es obligatoria')
        .isIn('bebida caliente', 'bebida fria', 'dulce', 'salado')
        .withMessage('Debe ingresar una categoria valida.')
    ],
    crearProducto
  ); // solo puedo poner una de cada tipo(get, etc)
router
  .route("/productos/:id")
  .get(obtenerProductoID)
  .delete(borrarProducto)
  .put(editarProducto);

export default router;
