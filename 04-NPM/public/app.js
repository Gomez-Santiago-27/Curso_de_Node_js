// const fs = require('fs');

// const contenido_archivo_json = fs.readFileSync('personas.json', 'utf-8');
// console.log(contenido_archivo_json);

/** Manipulacion de archivos .json */

const archivo = require('./personas.json');
/*Cuando traemos el archivo .json con require() 
 JavaScript lo convierte automaticamente a Objeto. */

console.log('Tipo de objeto: ', typeof archivo); // Salida --> Object

//  ** CONVERTIR UN Objeto A FORMATO .json (o cadena de caracteres). **

const personas_json = JSON.stringify(archivo); 
// Retorna el objeto convertido a .json

console.log(typeof personas_json); // Salida por consola --> undefined (es decir, json)

// ** CONVERTIR UN .json A Objeto JavaScript. **

const personas_objeto = JSON.parse(personas_json);
// Retorna la cadena de caracteres a tipo Object

// Si convertimos el archivo .json a Objeto JavaScript podemos manipularlo
personas_objeto.forEach(element => {

    // Por ejemplo, podemos conocer el número de DNI de cada persona
    console.log(element.dni);
});