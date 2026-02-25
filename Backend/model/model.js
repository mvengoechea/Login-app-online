const mongoose = require('mongoose');

//Definir esquema
const usuarioSchema = mongoose.Schema({
nombre: { type: String, require: true },
clave: { type: String, require: true }
});

//Crear el modelo
const Usuario = mongoose.model('usuario', usuarioSchema);

module.exports = Usuario;