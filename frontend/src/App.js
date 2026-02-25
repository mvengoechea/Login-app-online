import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'; // Usar navigate
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap

import Empleados from './Empleados';        // Componente para listar empleados
import CrearEmpleado from './CrearEmpleado'; // Componente para crear empleados
import EditarEmpleado from './EditarEmpleado'; // Componente para editar empleados
import Login from './Login';                // Componente de Login

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para saber si el usuario está autenticado
  const navigate = useNavigate(); // Usar navigate para redirigir

  const handleLogout = () => {
    // Limpiar el estado de usuario
    setIsAuthenticated(false);
    // Redirigir al login
    navigate('/');
  };

  const handleLogin = () => {
    // Cambiar el estado de autenticación a verdadero cuando el usuario inicie sesión correctamente
    setIsAuthenticated(true);
    navigate('/empleados'); // Redirigir a la lista de empleados
  };

  return (
    <div className="App">
      {/* Botón de logout en la parte superior derecha */}
      {isAuthenticated && (
        <div className="text-end mb-3">
          <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}

      <h1 className="text-center mb-4">Gestión de Empleados</h1>

      <Routes>
        {/* Ruta para el login */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        
        {/* Ruta para listar empleados */}
        <Route path="/empleados" element={<Empleados />} />
        
        {/* Ruta para crear un nuevo empleado */}
        <Route path="/crear" element={<CrearEmpleado />} />
        
        {/* Ruta para editar un empleado */}
        <Route path="/editar/:id" element={<EditarEmpleado />} />
      </Routes>
    </div>
  );
}

export default App;





