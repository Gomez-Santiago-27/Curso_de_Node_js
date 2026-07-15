/**  MANEJO DE PROMESAS CON node.js. Vamos a usar al objeto Promise() */

function numero_random() {
    return Math.random() > 0.5;  
}
/**
 * EXPLICACIÓN DE LA PROMESA. 
 * 
 * Se crea un objeto Promise. (es decir una Promesa)
 * 
 *  ** resolve ** es un argumento de tipo funcion al igual que ** reject **.
 * 
 * - resolve - se usa para indicar exito en la operación.
 * - reject -  se usa para indicar que ocurrio un error en la operación.
 * - DETALLE IMPORTANTE: solo acepta estos dos parámetros.
 */
const registro = new Promise((resolve, reject) => {
    // Acá va la lógica asíncrona. 
    if (numero_random()) {
        resolve('Es mayor a 0.5.') // se ejecuta con exito .then()
    } else {
        reject('Es menor a 0.5') // se ejecuta .catch()
    }
});

// Acá es donde se pone en funcionamiento la promesa.
// Usamos .then() para indicar éxito y .catch() para indicar error.
registro
    .then(valor => console.log(valor))
    .catch(valor => console.log(valor));