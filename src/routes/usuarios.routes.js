import { Router } from "express";
import { crearUsuario, obtenerUsuario, obtenerUsuarios } from "../controllers/usuarios.controllers";

const router = Router();

router.route('/').get(obtenerUsuarios);
router.route('/usuario/:id').get(obtenerUsuario);
router.route('/nuevo').post(crearUsuario)


export default router