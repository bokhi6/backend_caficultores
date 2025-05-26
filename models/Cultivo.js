const mongoose = require('mongoose');

const cultivoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  variedad: {
    type: String,
    required: false
  },
  hectareas: {
    type: Number,
    required: false,
    default: 0
  },
  ubicacion: {
    type: String,
    required: false
  }
}, {
  timestamps: true // Agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Cultivo', cultivoSchema);