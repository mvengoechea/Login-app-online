const mongoose = require('mongoose');

// Definir el esquema de empleados
const empleadoSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  posicion: { type: String, required: true },
  salario: { type: Number, required: true }
});

// Crear el modelo de empleado
const Empleado = mongoose.model('Empleado', empleadoSchema);

module.exports = Empleado;
