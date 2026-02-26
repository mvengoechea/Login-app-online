import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CrearEmpleado = () => {
  const [empleado, setEmpleado] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    posicion: '',
    salario: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://login-backend-lshl.onrender.com/api/empleados', empleado);
      navigate('/empleados');
    } catch (err) {
      console.error('Error al crear el empleado:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Crear Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={empleado.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            value={empleado.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={empleado.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="posicion" className="form-label">Posición</label>
          <input
            type="text"
            className="form-control"
            id="posicion"
            name="posicion"
            value={empleado.posicion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salario" className="form-label">Salario</label>
          <input
            type="number"
            className="form-control"
            id="salario"
            name="salario"
            value={empleado.salario}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Crear Empleado</button>
      </form>
    </div>
  );
};

export default CrearEmpleado;

