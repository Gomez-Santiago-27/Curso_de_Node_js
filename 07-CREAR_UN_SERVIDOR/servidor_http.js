const http = require('http');

const miServidor = http.createServer((req, res) => {
    // ver lo que hay dentro de url, method y headears de la solicitud http.
    console.log("==> request");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);

    console.log("==> response");
    console.log(res.statusCode);
    /* podemos cambiar el código de estado de la respuesta
    ==> res.statusCode = 404;
    console.log(res.statusCode);*/
    // tambien podemos manipular el header de la respuesta
    res.setHeader('content-type', 'application/json');
    // ver headers de la respuesta con .getHeaders();
    console.log(res.getHeaders());

    res.end("Soy un servidor http! Estoy corriendo en el puerto 3000!");
});

const PUERTO = 3000;

miServidor.listen(PUERTO, () => {
    console.log("El servidor esta escuchando en el puerto "+ PUERTO +"...");
});