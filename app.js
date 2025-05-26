const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const cultivoRoutes = require('./routes/cultivoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/caficultores', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/cultivos', cultivoRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor backend corriendo en puerto ${PORT}`));