const express = require('express');
const cors = require('cors'); // Importa el paquete CORS
const connectDB = require('./config');
const Usuario = require('./model/model');
const empleadoRoutes = require('./routes/empleadoRoutes');
const app = express();

// Habilitar CORS
app.use(cors()); // Esto habilita CORS para todas las solicitudes

// Configurar el puerto: usar el puerto proporcionado por Heroku, o 3005 si es local
const port = process.env.PORT || 3005;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

// Conectar a la base de datos MongoDB
connectDB();

// Middleware para manejar los datos del formulario y procesar JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta para manejar el login
app.post('/login', async (req, res) => {
  const { nombre, clave } = req.body;

  try {
    const usuario = await Usuario.findOne({ nombre, clave });

    if (usuario) {
      res.send('Inicio de sesión satisfactorio!');
    } else {
      res.send('Credenciales incorrectas.');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Error en la base de datos');
  }
});

// Usar las rutas CRUD de empleados
app.use('/api', empleadoRoutes);

// No servimos ningún archivo estático o HTML aquí porque el frontend se maneja por separado
// Las rutas solo serán para la API, no el frontend
