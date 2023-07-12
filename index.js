import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from "path"
import 'dotenv/config'
import './src/database/dbConnection'
import productosRouter from './src/routes/productos.routes'
import usuariosRouter from './src/routes/usuarios.routes'

// Usar un puerto
const app = express();

app.set('port', process.env.PORT || 4000) // crea una variable en mongo, la variable puerto
app.listen( app.get("port"), ()=>{
    console.log("Estoy en el puerto "+app.get("port"));
});

// middlewares: funcoines que se ejecutan antes de las rutas
app.use(cors()); //permitir conexiones remotas

app.use(express.json()) // permite a mi aplicacion recibir objetos de tipo json en los request

app.use(morgan('dev')) // Muestra en consola informacion extra de las request get, put, post, etc.

// console.log(__dirname); // La variablea __dirname nos devuelve la ruta absoluta donde vive el proyecto

app.use(express.static(path.join(__dirname, '/public'))) // ejecutar el archivo estatico en la ruta "dirname" y concatenar public, para poder acceder al index, establecemos la ruta de nuestro archivo estatico
// nos perimte ejecutar los archivos estaticos de mi proyecto en la ruta raiz de mi backend: http://localhost:4000

//rutas
// http://localhost:4000/apicafe/productos
// http://localhost:4000/apicafe/productos/id
app.use('/apicafe', productosRouter)

// http://localhost:4000/apicafe/productos

app.use('/apicafe/auth', usuariosRouter)