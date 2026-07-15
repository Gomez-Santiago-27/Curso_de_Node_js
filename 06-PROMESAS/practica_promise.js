const input = require('prompt-sync')();

function longitudEsMayorA4(palabra) {
    return palabra.length > 4;
}
const palabra = input('Ingrese una palabra:' );
// console.log('Palabra: ', nueva_palabra);

/*console.log(typeof nueva_palabra);
console.log(longitud_palabra(nueva_palabra));*/
const promesa_practica = new Promise((resolve, reject) => {
    // Cuerpo de la operación
    if (longitudEsMayorA4(palabra)) {
        resolve('La palabra tiene más de 4 caracteres');
    } else {
        reject('La cantidad de caracteres de la palabra es menor o igual a 4.');
    }
});

promesa_practica
    .then(valor => console.log(valor))
    .catch(valor => console.log(valor));