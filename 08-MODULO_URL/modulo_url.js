const miUrl = new URL('https://www.ejemplo.org/contenido/programacion?ordenar=vistas&nivel=1');

// Podemos extraer los elementos de la URL

// obtener el nombre del host
console.log(miUrl.hostname); // ==> www.ejemplo.org

// obtener el path
console.log(miUrl.pathname); // ==> /contenido/programacion

/* obtener los parámetros de busqueda. 
    .searchParams devuelve un objeto
*/
console.log(miUrl.searchParams);

// obtener el valor de sus parametros
console.log(miUrl.searchParams.get('ordenar'));
console.log(miUrl.searchParams.get('nivel'));