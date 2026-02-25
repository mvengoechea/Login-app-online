import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [nombre, setNombre] = useState('');
  const [clave, setClave] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realiza la petición de login al backend con la URL correcta
      const response = await axios.post('https://backendadso-9600d18c52e1.herokuapp.com/login', { nombre, clave });

      if (response.data === 'Inicio de sesión satisfactorio!') {
        onLogin(); // Llamar a la función onLogin para cambiar el estado en App.js
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      alert('Hubo un error en el inicio de sesión');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Iniciar sesión</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group mb-3">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="clave">Contraseña</label>
            <input
              type="password"
              id="clave"
              className="form-control"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              placeholder="Contraseña"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
