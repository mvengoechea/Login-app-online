import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Empleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const obtenerEmpleados = async () => {
      try {
        const response = await axios.get('https://backendadso-9600d18c52e1.herokuapp.com/api/empleados');
        setEmpleados(response.data);
      } catch (err) {
        console.error('Error al obtener empleados:', err);
      }
    };
    obtenerEmpleados();
  }, []);

  const eliminarEmpleado = async (id) => {
    try {
      await axios.delete(`https://backendadso-9600d18c52e1.herokuapp.com/api/empleados/${id}`);
      setEmpleados(empleados.filter((empleado) => empleado._id !== id));
    } catch (err) {
      console.error('Error al eliminar el empleado:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Empleados</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Posición</th>
            <th>Salario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado._id}>
              <td>{empleado.nombre}</td>
              <td>{empleado.apellido}</td>
              <td>{empleado.correo}</td>
              <td>{empleado.posicion}</td>
              <td>{empleado.salario}</td>
              <td>
                <Link to={`/editar/${empleado._id}`} className="btn btn-warning me-2">Editar</Link>
                <button 
                  className="btn btn-danger"
                  onClick={() => eliminarEmpleado(empleado._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/crear" className="btn btn-success mt-3">Agregar Nuevo Empleado</Link>
    </div>
  );
};

export default Empleados;


