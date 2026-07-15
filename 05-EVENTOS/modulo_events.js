/**  MANEJO DE EVENTOS CON EL MODULO events */

// Importamos el modulo 'events'.
const EventEmitter = require('events');

/* Se crea un objeto de la variable que usamos para importar
    porque 'require('events') retorna una Clase  */ 
const suma = new EventEmitter();

// Asociamos una función al evento 'sumar'.
suma.on('sumar', (a, b) => {
    console.log(`Resultado: ${a + b}`);
});

// Emitimos (o llamamos a la función) para accionar a 'sumar'. 
// Tambien pasamos sus argumentos para su funcionamiento.
suma.emit('sumar', 5.5, 4.6);
