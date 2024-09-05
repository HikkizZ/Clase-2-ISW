// Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};

// Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
const averageArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
};

// Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
const stringsToUpperCase = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].toUpperCase());
    }
    return newArray;
};

// Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
const evenNumbers = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Array de números
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumArray(numbers));
console.log(averageArray(numbers));
console.log(evenNumbers(numbers));

// Array de strings
const strings = ["Juan", "Felipe", "Patty", "Hallam", "Nanni"];

console.log(stringsToUpperCase(strings));
