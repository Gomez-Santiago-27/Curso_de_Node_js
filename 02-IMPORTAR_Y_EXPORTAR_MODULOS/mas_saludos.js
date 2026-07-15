function saludar(nombre) {
    return `Hola, ${nombre}`;
}

function saludarHolaMundo() {
    return 'Hola Mundo!';
}

function saludoMotivacional(nombre) {
    return `Hola ${nombre}. Vos podés!`;
}

module.exports = {
    saludar : saludar,
    saludarHolaMundo : saludarHolaMundo,
    saludoMotivacional : saludoMotivacional
};

// Dw esta manera, podemos exportar mas de un elemento en un modulo.