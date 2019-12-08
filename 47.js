/////////////////////////// FUNCIONES ///////////////////////////
//EJERCICIO 1 - Clase 47
const numerosPares = () => {
    for (let i = 0; i <= 100; i += 2) {
       console.log(i)
    }
};
numerosPares();

//EJERCICIO 2 - Clase 47
const datosPersonales = () => {
    console.log(`
    Me llamo Mariana
    Tengo 25 años
    Mi número es 0303456
    Vivo en la Calle Falsa
    123
    Y desconozco el código postal.
    `)
};
datosPersonales();

////////////////////////////// EJERCICIOS CON PARÁMETROS - Clase 48 ////////////////////////////// 

//EJERCICIO 1
const mostrarNombreCompleto = (nombre, apellido) => {
    console.log(nombre + " " + apellido)
};

mostrarNombreCompleto('Ada', 'Lovelace');

//EJERCICIO 2
const sonIguales = (parametro1, parametro2) => {
    if (parametro1 === parametro2) {
        console.log(true)
    } else {
        console.log(false)
    }

};
sonIguales(1, 1);
sonIguales("Hola", "Hola");
sonIguales('Rojo', 'Verde');

//EJERCICIO 3

const agregarNumero = (array, num) => {
    array.push(num)    
    console.log(array)
};
let algoParaDecir = ['Hola', '¿qué numero', 'es?'];
agregarNumero(algoParaDecir, 5);

//EJERCICIO 4

const comprobarPosicion = (array, string) => {
    let datoEncontrado = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == string) {
            datoEncontrado = true;
        }
    }
    console.log(datoEncontrado)
} 
comprobarPosicion(['Mari', 'Carla', 'Belén', 'Camila'], 'Soelí');
comprobarPosicion(['Mari', 'Carla', 'Belén', 'Camila'], 'Carla');

//EJERCICIO 5
const calcularPromedio = (array) => {
    let variableAcumuladora = 0;
    let promedio = "";
    for (let i = 0; i < array.length; i++) {
        variableAcumuladora = variableAcumuladora + array[i]
        console.log(variableAcumuladora)
            
    }
    promedio = variableAcumuladora / array.length - 1
    console.log(promedio) 
}
calcularPromedio([5, 8, 6, 7, 3, 5, 6]);

