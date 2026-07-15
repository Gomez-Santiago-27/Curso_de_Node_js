const saludo = require("./saludo.js");
const mas_saludos = require("./mas_saludos.js");

console.log(saludo.saludar("Santiago. Estás aprendiendo Node js."))

console.log("Otro saludo: ")

console.log(mas_saludos.saludarHolaMundo());

console.log("Saludo motivacional: ", mas_saludos.saludoMotivacional("Santiago"));