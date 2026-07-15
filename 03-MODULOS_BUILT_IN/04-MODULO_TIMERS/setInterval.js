/**
 * La funcion ** setInterval() ** del modulo Timers se utiliza para
 * ejecutar codigo un numero infinito de veces cada cierto tiempo (en miliseg.)
 */

function dividir(num1, num2) {
    if (num2 == 0) {
        console.error(new Error('No se puede dividir por cero'));
    } else {
        console.log(`Resultado de hacer ${num1} / ${num2}: ${num1 / num2}`);
    }
}

// El codigo se ejecuta cada 2 segundos (2000 milisegundos) de manera infinita.
setInterval(dividir, 2000, 100, 2);

