/**
 * Leer un archivo usando el modulo ** fs **
 */

const fs = require('fs');


// fs.readFile('textoDePrueba.txt', 'utf-8', (err, contenido) => {
//     if (err) {
//         throw err;
//     }
//     console.log(contenido);
// });


/** * Cambiar el nombre de un archivo */

// fs.rename('texto.txt', 'textoNuevo.txt', (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Cambio exitoso")
//     }
// });

/** Agregar contenido al final del archivo */

// let textoAgregado = "\nTexto agregado con la funcion appendFile()";
// fs.appendFile('textoNuevo.txt', textoAgregado, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Se agregó el contenido exitosamente.')
// });

/** Reemplazar el contenido de un archivo */

// let nuevo_contenido = "Este texto reemplaza al anterior."
// fs.writeFileSync('textoDePrueba.txt', nuevo_contenido, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Texto reemplazado...');
// });

/** Eliminar un archivo */

// fs.unlink('textoDePrueba', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Archivo eliminado!')
// });