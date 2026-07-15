const http = require('http');


function manejarSolicitudPOST(req, res) {
    const camino = req.url;

    if (camino === '/') {
        res.end('Bienvenido! Esta es mi API de Node.js!');

    } else if (camino === '/galletita') {
        let cuerpo = '';

        // req.on('data', ) Capturar los pedacitos de datos
        // Con este evento, vas tomando cada pedazo (contenido), lo transformas a
        //  texto con .toString() (porque originalmente llega como
        //  datos binarios o Buffer) y lo vas sumando (+=) a tu variable cuerpo.
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        // req.on ('end', )
        // Es el indicador de que la variable cuerpo ya está completa y lista 
        // para ser usada. Cualquier acción que dependa de los datos recibidos 
        // (como guardar la galletita en una base de datos o transformarla con 
        // JSON.parse(cuerpo)) debe ocurrir dentro de este bloque.
        req.on('end', () => {
            console.log(`==> Se recibio en el cuerpo: ${cuerpo}`);
            console.log(typeof cuerpo);
            // convertir a un objeto JSON.
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);
            
        });

        res.end(`Se recibieron tus galletitas con exito!`);
    } else {
        //res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.statusCode = 404;
        res.end('No se pudo procesar la solicitud!');
    } 
}

const miServidor = http.createServer((req, res) => {
    const metodo = req.method;

    if (metodo === 'GET') {
        res.end('Bienvenido! Esta es mi API de Node.js!');
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