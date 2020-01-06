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
    promedio = variableAcumuladora / array.length
    console.log(promedio) 
}
calcularPromedio([5, 8, 6, 7, 3, 5, 6]);


////////////////////////////// EJERCICIOS CON RETURN - Clase 48 //////////////////////////////

// EJERCICIO 1
const obtenerNombre = (miNombre) => {
    return 'Mariana'
}
console.log(`Mi nombre es ${obtenerNombre()}`);

const obtenerApellido = miApellido => 'Cairo';
console.log(`Mi appellido es ${obtenerApellido()}`);


//EJERCICIO 2
const obtenerSaludo = (saludo) => {
    let nombreGuardado = obtenerNombre()
    return `¡Hola, ${nombreGuardado}!` 
}
console.log(obtenerSaludo());


// EJERCICIO 3
const obtenerResto = (a, b) => a % b;
console.log(obtenerResto(10, 2));


// EJERCICIO 4
const esPar = num => {
    if (obtenerResto(num, 2) === 0) /*esto da de resultado un booleano*/ {
        return true
    } else {
        return false
    }
}
//más simple:
esPar = num => obtenerResto(num, 2) === 0;

console.log(esPar(10));
console.log(esPar(15));


// EJERCICIO 5
const listaDeNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

const encontrarImpares = array => {
    let numerosImpares = [];
    for (let i = 0; i < array.length; i++) {
        if (!esPar(array[i])) {
            numerosImpares.push(array[i])
        }
    }
    return numerosImpares
};
console.log(encontrarImpares(listaDeNumeros));
