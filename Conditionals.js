const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

// Imprimir en consola el número mayor de los tres
if (numero1 > numero2 && numero1 > numero3) {
    console.log(`El número mayor es ${numero1}`);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`El número mayor es ${numero2}`);
} else {
    console.log(`El número mayor es ${numero3}`);
}

// Imprimir en consola el número menor de los tres
if (numero1 < numero2 && numero1 < numero3) {
    console.log(`El número menor es ${numero1}`);
} else if (numero2 < numero1 && numero2 < numero3) {
    console.log(`El número menor es ${numero2}`);
} else {
    console.log(`El número menor es ${numero3}`);
}

// Imprimir en consola si el numero1 es par o impar
if (numero1 % 2 === 0) {
    console.log(`El número ${numero1} es par`);
} else {
    console.log(`El número ${numero1} es impar`);
}

// Imprimir en consola si el numero2 es par o impar
if (numero2 % 2 === 0) {
    console.log(`El número ${numero2} es par`);
} else {
    console.log(`El número ${numero2} es impar`);
}

// Imprimir en consola si el numero3 es par o impar
console.log(numero3 % 2 === 0 ? `El número ${numero3} es par` : `El número ${numero3} es impar`); // Operador ternario igual a if-else

// Imprimir en consola si el numero1 es múltiplo de 5
console.log(numero1 % 5 === 0 ? `El número ${numero1} es múltiplo de 5` : `El número ${numero1} no es múltiplo de 5`);

// Imprimir en consola si el numero2 es múltiplo de 5
console.log(numero2 % 5 === 0 ? `El número ${numero2} es múltiplo de 5` : `El número ${numero2} no es múltiplo de 5`);

// Imprimir en consola si el numero3 es múltiplo de 5
console.log(numero3 % 5 === 0 ? `El número ${numero3} es múltiplo de 5` : `El número ${numero3} no es múltiplo de 5`);