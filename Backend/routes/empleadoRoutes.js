const express = require('express');
const Empleado = require('../model/empleado'); // Importar el modelo de empleado
const router = express.Router();

// Ruta para crear un nuevo empleado
router.post('/empleados', async (req, res) => {
  const { nombre, apellido, correo, posicion, salario } = req.body;

  try {
    const nuevoEmpleado = new Empleado({ nombre, apellido, correo, posicion, salario });
    await nuevoEmpleado.save();
    res.status(201).json(nuevoEmpleado);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el empleado' });
  }
});

// Ruta para obtener todos los empleados
router.get('/empleados', async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.status(200).json(empleados);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los empleados' });
  }
});

// Ruta para obtener un empleado por ID
router.get('/empleados/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.status(200).json(empleado);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el empleado' });
  }
});

// Ruta para actualizar un empleado
router.put('/empleados/:id', async (req, res) => {
  const { nombre, apellido, correo, posicion, salario } = req.body;

  try {
    const empleadoActualizado = await Empleado.findByIdAndUpdate(req.params.id, { nombre, apellido, correo, posicion, salario }, { new: true });
    if (!empleadoActualizado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.status(200).json(empleadoActualizado);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar el empleado' });
  }
});

// Ruta para eliminar un empleado
router.delete('/empleados/:id', async (req, res) => {
  try {
    const empleadoEliminado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleadoEliminado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.status(200).json({ message: 'Empleado eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el empleado' });
  }
});

module.exports = router;
