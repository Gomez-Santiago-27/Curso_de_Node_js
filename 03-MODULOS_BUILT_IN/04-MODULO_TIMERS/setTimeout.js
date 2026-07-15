/**
 * La funcion ** setTimeout() ** del módulo timers se utiliza
 * para ejecutar código luego de un número específico de milisegundos
 * 
 * Dato importante:   1 segundo = 1000 milisegundos.
 */

function sumar(num1, num2) {
    console.log(`Resultado: ${num1 + num2}`);
}

/**
 *  ESTRUCTURA DE LA FUNCION:
 *   setTimeout( funcion, retraso, argumentos);
 *   funcion:   nombre dela funcion que vamos a ejecutar.
 *   retraso: tiempo en milisegundos que tarda en ejecutarse el codigo.
 *   argumentos: son los argumentos de la funcion en cuestion.
 */

setTimeout(sumar, 3000, 3, 4);
