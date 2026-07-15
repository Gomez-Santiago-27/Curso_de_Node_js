/**
 * ** setImmediate ** es una funcion del modulo timers que permite
 * ejecutar codigo luego de ejecutar codigo síncrono.
 */
function restar(num1, num2) {
    console.log(`Resultado: ${num1 - num2}`);
}

console.log("Antes del setImmediate");

setImmediate(restar, 5, 2);

console.log("Despues del setImmediate");

/**
 * SALIDA EN ORDEN DE EJECUCIÓN:  
 * 
 * Antes del setImmediate
 * Despues del setImmediate
 * Resultado: 3
 * 
 * Se puede ver que la función - restar - se ejecuta luego del codigo síncrono
 */
