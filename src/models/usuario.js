import { Schema, model } from 'mongoose';

const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        minLength:2,
        maxLength:20,
        required:true
    },
    email:{
        type: String,
        minLength:2,
        maxLength:50,
        required:true
    },
    password:{
        type: String,
        minLength:2,
        maxLength:30,
        required:true
    }
});

const Usuario = model('usuario',usuarioSchema);
export default Usuario;