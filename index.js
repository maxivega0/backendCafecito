import express from 'express'

// Usar un puerto
const app = express();
app.set('port', process.env.PORT || 4000)
app.listen( app.get("port"), ()=>{
    console.log("Estoy en el puerto "+app.get("port"));
});

// middlewares: funcoines que se ejecutan antes de las rutas

// rutas

