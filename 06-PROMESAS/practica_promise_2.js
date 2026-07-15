function es_un_string(data) {
    return typeof data === 'string'; // Retorna true o false.
}

/**
 * @param {*} dato es el dato que se quiere verificar si es un String. 
 * 
 * @returns devuelve una Promise que verifica si el dato es un String.
 */
function procesarDato(dato) {
    return new Promise((resolve, reject) => {
        if (es_un_string(palabra)) {
            resolve('es un String!'); 
        } else {
            reject('El tipo de dato no es un String.')
        }
    });
}

const palabra = 200;

procesarDato(palabra)
    .then((resolve) => {
        console.log('El dato procesado fue: '+ palabra);
        console.log(resolve);
    } )
    .catch((reject) => {
        console.log('El dato procesado fue: '+ palabra);
        console.log(reject);
    }
);