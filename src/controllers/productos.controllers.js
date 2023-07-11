import Producto from '../models/producto';

export const obtenerProductos = async (req,res) =>{
    try{
        const productos = await Producto.find(); // trae la coleccion de productos (lista de productos)
        res.status(200).json(productos)
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "Error al buscar los productos"
        })
    }
}

export const crearProducto = async (req, res) => {
    try{
        console.log(req.body);
        const productoNuevo = new Producto(req.body); // Producto es un modelo
        await productoNuevo.save();
        res.status(201).json({
            mensaje: "El producto se creo correctamente"
        });
    }catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al crear el producto"
        });
    }
};