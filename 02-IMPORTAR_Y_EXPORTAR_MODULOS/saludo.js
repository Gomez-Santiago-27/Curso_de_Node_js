function saludar(nombre) {
    return `Hola, ${nombre}`;
}

// Para exportar el modulo debemos usar 'module.exports'

module.exports.saludar = saludar;

/**
 * Se creó la varible -saludar- que contiene la funcion 'saludar()'
 * 
 * Ahora el módulo está listo para exportarlo a cualquier archivo JS.
 */