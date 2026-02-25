import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Importa useParams y useNavigate

const EditarEmpleado = () => {
  const { id } = useParams(); // Usar useParams para obtener el id de la URL
  const navigate = useNavigate(); // Para redirigir después de actualizar
  const [empleado, setEmpleado] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    posicion: '',
    salario: ''
  });

  useEffect(() => {
    // Obtener el empleado actual usando el ID de la URL
    const obtenerEmpleado = async () => {
      try {
        const response = await axios.get(`https://backendadso-9600d18c52e1.herokuapp.com/api/empleados/${id}`);
        setEmpleado(response.data);
      } catch (err) {
        console.error('Error al obtener el empleado:', err);
      }
    };

    if (id) {
      obtenerEmpleado(); // Solo obtener el empleado si el id está presente
    }
  }, [id]);

  const handleChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://backendadso-9600d18c52e1.herokuapp.com/api/empleados/${id}`, empleado);
      alert('Empleado actualizado correctamente');
      navigate('/empleados'); // Redirigir a la lista de empleados después de la actualización
    } catch (err) {
      console.error('Error al actualizar el empleado:', err);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Editar Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={empleado.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            name="apellido"
            value={empleado.apellido}
            onChange={handleChange}
            placeholder="Apellido"
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            name="correo"
            value={empleado.correo}
            onChange={handleChange}
            placeholder="Correo"
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="posicion">Posición</label>
          <input
            type="text"
            name="posicion"
            value={empleado.posicion}
            onChange={handleChange}
            placeholder="Posición"
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="salario">Salario</label>
          <input
            type="number"
            name="salario"
            value={empleado.salario}
            onChange={handleChange}
            placeholder="Salario"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Actualizar Empleado
        </button>
      </form>
    </div>
  );
};

export default EditarEmpleado;


