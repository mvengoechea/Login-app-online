const mongoose = require('mongoose');

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mvengoechea:Mauv0301@cluster0.zynwg89.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión exitosa a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1); // Salir del proceso si no se puede conectar
  }
};

module.exports = connectDB;