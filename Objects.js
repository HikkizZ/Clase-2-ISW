/*
1. Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego,
muestra la información de esa persona por la consola.

2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en
buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
*/

const persona = {
    nombre: "Hikki",
    edad: 22,
    genero: "Masculino"
};

const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 100,
    fotografias: ["Foto1", "Foto2", "Foto3"],
    buenEstado: true
};


console.log(persona);
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Genero: ${persona.genero}`);

console.log(caja);
console.log(`Cuadernos: ${caja.cuadernos}, tipo de dato: ${typeof caja.cuadernos}`);
console.log(`Lapices: ${caja.lapices}, tipo de dato: ${typeof caja.lapices}`);
console.log(`Papel: ${caja.papel}, tipo de dato: ${typeof caja.papel}`);
console.log(`Fotografias: ${caja.fotografias}, tipo de dato: ${typeof caja.fotografias}`);
console.log(`Buen Estado: ${caja.buenEstado}, tipo de dato: ${typeof caja.buenEstado}`);