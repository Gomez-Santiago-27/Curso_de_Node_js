const express = require('express');

const { equiposArgentinos } = require('./equiposArgentinos.js');

const PUERTO = process.env.PORT || 3000;

const app = express();

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en puerto ${PUERTO}`);
});

app.get('/', (req, res) => {
    res.end('Bienvenido al servidor de equipos Argentinos!');
});

/**
 * post: filtra todos los equipos argentinos del arreglo.
 */
app.get('/equiposArgentinos', (req, res) => {
    res.json(equiposArgentinos);
});

/**
 * post: devuelve los equipos argentinos cuya provincia coincida con la solicitada.
 */
app.get('/equiposArgentinos/:provincia', (req, res) => {
    let provincia = req.params.provincia.replace(/-/g, ' ').trim();

    const arregloDeEquipos = equiposArgentinos.filter(equipo => equipo.provincia === provincia);

    if (arregloDeEquipos.length === 0) {
        res.status(404); // no encontrado.
        res.end(`No se encontro ningun equipo en la provincia de ${provincia}`);
    }

    res.json(arregloDeEquipos);
});
