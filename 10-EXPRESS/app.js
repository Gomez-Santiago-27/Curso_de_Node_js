const express = require('express');

const app = express();
const PUERTO = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.end(`Servidor escuchando en el puerto ${PUERTO}...`);
});

app.get('/figuritas', (req, res) => {
    res.end(`Bienvenido al portal para guardar figus del mundial!`);
});

// Servidor escuchando...
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}...`);
});
