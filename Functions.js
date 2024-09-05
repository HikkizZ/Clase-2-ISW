let name = "Juan";

// Crea una función que reciba un string y retorne el string en mayúsculas.
function stringToUpperCase(str) {
    return str.toUpperCase();
}

// Crea una función que reciba un string y retorne el string en minúsculas.
function stringToLowerCase(str) {
    return str.toLowerCase();
}

// Crear una función que reciba como parámetro 2 números y los reste.
function subtraction(a, b) {
    return a - b;
}

// Crear una función que reciba como parámetro 2 números y los divida.
function division(a, b) {
    return a / b;
}

// Crear una función que reciba como parámetro 2 números y los multiplique.
function multiplication(a, b) {
    return a * b;
}

// Crear una función que reciba un string y devuelva la longitud del string.
function stringLength(str) {
    return str.length;
}

// Prueba de las funciones
console.log(stringToUpperCase(name));
console.log(stringToLowerCase(name));
console.log(subtraction(5, 3));
console.log(division(6, 2));
console.log(multiplication(2, 3));
console.log(stringLength(name));