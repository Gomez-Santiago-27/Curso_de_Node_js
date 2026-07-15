// manejo de solicitudes HTTP con el modulo ('http')

const http = require('http');
const {equipos} = require('./equiposDeFutbol');

/**
 * 
 * @param {*} req : es la solicitud HTTP.
 * @param {*} res : es la respuesta que enviara el servidor al cliente.
 * @returns devuelve la respuesta del servidor.
 */
function manejarSolicitudGET(req, res) {
    const path = req.url;

    if (path === '/') {
        res.end('Bienvenido a mi API de Node.js');

    } else if (path === '/equiposArgentinos') {
        res.end(JSON.stringify(equipos.argentina));

    } else if (path === '/equiposBrasileros') {
        res.end(JSON.stringify(equipos.brasil));

    } else {
        res.statusCode = 404;
        res.end('No se pudo procesar la solicitud!');
    } 
}

/**
 * 
 * @param {*} req : es la solicitud HTTP.
 * @param {*} res : es la respuesta que enviara el servidor al cliente.
 * @returns devuelve la respuesta del servidor a la peticion recibida 
 * de tipo POST.
 */
function manejarSolicitudPOST(req, res) {
    const camino = req.url;

    if (camino === '/') {
        // res.statusCode = 200; // ==> Codigo de estado 200 OK se asigna 
        // por defecto
        res.end('Bienvenido a mi API de Node.js');
    } else if (camino === '/galletita') {
        res.end('Encuentra tus galletitas favoritas!');

    } else {
        res.statusCode = 404;
        res.end('No se pudo procesar la solicitud!');
    } 
}

const miServidor = http.createServer((req, res) => {
    const metodo = req.method;

    if (metodo === 'GET') {
        res.end(manejarSolicitudGET(req, res));
    } else if (metodo === 'POST') {
        res.end(manejarSolicitudPOST(req, res));
    } else {
        res.end('El servidor no puede procesar el metodo: '+ metodo);
    }
});

const PUERTO = 3000;

miServidor.listen(PUERTO, () => {
    console.log('Servidor escuchando en puerto 3000...');
});
