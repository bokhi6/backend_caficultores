const express = require('express');
const router = express.Router();
const Cultivo = require('../models/Cultivo');

// GET todos los cultivos
router.get('/', async (req, res) => {
  try {
    const cultivos = await Cultivo.find();
    res.json(cultivos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET cultivo por ID
router.get('/:id', async (req, res) => {
  try {
    const cultivo = await Cultivo.findById(req.params.id);
    if (!cultivo) {
      return res.status(404).json({ error: 'Cultivo no encontrado' });
    }
    res.json(cultivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST crear nuevo cultivo
router.post('/', async (req, res) => {
  try {
    const nuevoCultivo = new Cultivo(req.body);
    await nuevoCultivo.save();
    res.status(201).json(nuevoCultivo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT editar cultivo por ID
router.put('/:id', async (req, res) => {
  try {
    const cultivoActualizado = await Cultivo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!cultivoActualizado) {
      return res.status(404).json({ error: 'Cultivo no encontrado' });
    }
    res.json(cultivoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE eliminar cultivo por ID
router.delete('/:id', async (req, res) => {
  try {
    const cultivoEliminado = await Cultivo.findByIdAndDelete(req.params.id);
    if (!cultivoEliminado) {
      return res.status(404).json({ error: 'Cultivo no encontrado' });
    }
    res.json({ message: 'Cultivo eliminado exitosamente', cultivo: cultivoEliminado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;