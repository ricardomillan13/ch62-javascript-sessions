console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/


/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

console.log( saludar("Richard") ); // undefined porque la función saludar() no retorna nada

function saludar(nombre){
    console.log(`Hola ${nombre}, qué vas a comer hoy?`);
   
}


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/



/**
 * Función que recibe nombre y apellido y retorna el nombre completo
 * @param {string} firstName nombre de la persona
 * @param {string} lastName apellido de la persona
 * @returns concatenación del nombre y apellido de la persona en la cohorte Ch62
*/
const printFullName = function (firstName, lastName) {
    return `${firstName} ${lastName} estudiante de la Ch62`;
};

console.log( printFullName("Richard", "Gonzalez") );
/*
------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas, pero:
 - No requiere la palabra reservada function
 - Si tienen una sola instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parámetros) => instrucciones;

    const nombreVariable = (parámetros) => {
        instrucciones;
        return expresión;
    };
*/

// Convertir la función printFullName a función flecha
const imprimeNombreCompleto = (nombre, apellido) => `${nombre} ${apellido} estudiante de la Ch62`;

/*
------

*/



const makeCoffe = ( type = "Americano" ) => `Preparando un cafe ${type}`;

console.log( makeCoffe("Latte") ); // Preparando un cafe Latte
console.log( makeCoffe() ); // Preparando un cafe Americano

// TODO; Generar una funcion que calcuce el area de un rectangulo
// usando parametros por defecto para largo y ancho

const calcularAreaRectangulo = (base = 1, altura = 1) => base * altura;
console.log( calcularAreaRectangulo(6, 3) ); // 18
console.log( calcularAreaRectangulo() ); // 1

// Ejemplo de uso de default parameters
console.log(`Vales 1000, estoy diciendo que vales: ${parseInt("1000")} `);
console.log(`Vales 1000 base 2, estoy diciendo que vales: ${parseInt("1000", 2)} `);


/*
Pase de datos:
-Por valor: Se crea una copia independiente del dato.
Si modificas la copia, el original NO cambia.
-Por referencia: Se pasa la dirección de memoria (referencia)
No el dato en si. Si modificas algo a través de esa referencia,
el original SI cambia.
*/

/*
 ------------ Funciones Callback -----------------------
 Es una función(definida, expresada, arrow, anonima) que se pasa 
 a otra como argumento
 Se pasa en el argumento como referencia (sin paréntesis)
 */

 // Mal diseño: Cada vez que quieras una operación nueva, modificas esa funcion.
 const calculateBad = (a, b, type) => {
    if (type === "sum") return a + b;
    if (type === "subtrack") return a - b;
    // Si quiero dividir, tengo que modificar este archivo y agregar otro if...
 };
    console.log( calculateBad(5, 3, "sum") ); // 8
    console.log( calculateBad(5, 3, "subtrack") ); // 2
    
// Aplicando funciones de callback
// 1. La función principal está "Cerrada" (no la tocamos más)
const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};

// console.log(`Usando incorrectamente la funcion: ${calculate(5, 3, "sum")}`); //  operationFunction is not a function

// 2 Definimos operaciones básicas
const subtrack = (a, b) => a - b;
const multiply = (a, b) => a * b;
// Crear una funcion que sume dos numeros
const suma = (a, b) => a + b;
const divide = (a, b) => a / b;

console.log(`Realizando una resta: ${calculate(5, 3, subtrack)}`); // 2
console.log(`Realizando una multiplicación: ${calculate(5, 3, multiply)}`); // 15
// Aplicar a la función calculate la función suma
console.log(`Realizando una suma: ${calculate(5, 3, suma)}`); // 8
console.log(`Realizando una división: ${calculate(6, 3, divide)}`); // 2

// Aplicar una función que calcule la potencia de un número

const power = (a, b) => a ** b;
console.log(`Realizando una potencia: ${calculate(2, 3, power)}`); // 8
console.log(`Realizando una potencia: ${calculate(2, 3, (a, b) => a ** b )}`); // Math.pow(3,4) = 8

// Aplicar una función que calcule el residuo de una división, para saber si 6 es divisible entre 3
const residuo = (a, b) => a % b;
console.log(`Realizando un residuo: ${calculate(6, 3, residuo)}`); // 0

var a = 10;
let b = 20;
const c = 30;
const d = 40;
const e = 50;
const g = 70;

const cambiar Valores = (a, b, c) => {
    a = 100;
    b = 200;
    c = 300;
    var d = 400;
    let e = 500;
    const f = 600;
    console.log(a, b, c);
};
