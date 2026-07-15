const os = require('os');

/**
 * Con el modulo 'os' podemos obtener información acerca del S.O.
 */

console.log(os.type());
// Retorna el tipo de sistema operativo de la computadora

console.log(os.homedir());
// Muestra en pantalla el directorio principal del sistema.

console.log(os.uptime());
// Muestra el tiempo en que se estuvo ejecutando el sistema operativo

console.log(os.userInfo());
// Muestra información acerca del usuario.