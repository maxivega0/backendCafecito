import { validationResult } from "express-validator";
import Producto from "../models/producto";

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find(); // trae la coleccion de productos (lista de productos)
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los productos",
    });
  }
};

export const obtenerProductoID = async (req, res) => {
  try {
    console.log(req.params.id);
    const producto = await Producto.findById(req.params.id);
    res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se encontró el producto",
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    console.log(req.body);
    const productoNuevo = new Producto(req.body); // Producto es un modelo
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "El producto se creo correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear el producto",
    });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El producto fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se pudo borrar el producto",
    });
  }
};
export const editarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndUpdate(req.params.id, req.body); //en el primer parametro recibimos el id y lo cambiamos por los datos del body
    res.status(200).json({
      mensaje: "El producto fue editado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error, no se pudo editar el producto",
    });
  }
};
