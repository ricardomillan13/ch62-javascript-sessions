console.log("Session JS-01: Data Types");

/* ============================================================
   1. VARIABLES Y NOMENCLATURA (5 min)
===============================================================
reglas modernas:
´const´: Usala para valores que no cambiarán.
´let´: usala para valores que pueden cambiar.
´var´: Evitala, es obsoleta.

Nomenclatura:
- No usar espacios.
- Usar camelCase para variables y funciones.
*/

//Todo: Declara tres variables usando ´let´: una para un nombre (string), otra para una edad (number) y otra para un estado laboral (boolean).

const firstName = "John"; //String variable
let age = 30; //Number variable
let isEmployed = true; //Boolean variable

// Template literals (backticks `` ) ---
// Permite interpolar variables ${} y saltos de linea. Más limpio que concatenar con +.
// Ejemplo: `Hola, mi nombre es ${firstName} y tengo ${age} años.`
console.log(`Hola, mi nombre es ${firstName}, tengo ${age} años y mi estado laboral es: ${isEmployed}.`);

/* ============================================================
   3. DATOS PRIMITIVOS: NUMBER, BIGINT
   ============================================================
   javascript tiene un solo tipo de dato numérico: number (números enteros y decimales).
   Number: Tiene de dato numerico de 64 bits para representar valores enteros, puntos flotantes, +infinity, -Infinity, NaN.
   */

const gravityEarth = 9.81; // Aceleración debido a la gravedad en m/s²

console.log( typeof gravityEarth); // 'number'

/*
Tipos de datos number.

- Números positivos: 100, 3.14, 0.99
- Números negativos: -50, -2.5, -0.01
- Valores que no pueden ser representados numéricamente: NaN (Not a Number)
- Números infinito: +Infinity, -Infinity
*/

console.log( typeof 3.141592 ); // 'number'
console.log( typeof (3*3) ); // 'number'
console.log( typeof "" );  // 'string'
console.log( typeof " " ); // 'string'
console.log( 3*"Pitufo trabajador" ); // 'NaN'
console.log( typeof (3 * "Pitufo trabajador") ); // 'number'
console.log( typeof (NaN) ); // 'number'
console.log( typeof +Infinity ); // 'number'
console.log( typeof ( 3 + "Viernes tematico") ); // 'String'
console.log( typeof ( "3viernes tematico" ) ); // 'String'
console.log( 4 / 0 ); // +Infinity
console.log( typeof (4 / 0) ); // 'number'
console.log( "4" * "2"); // 8
console.log( typeof ("4" * "2") ); // 'number'
console.log( typeof (8) ); // 'number'

console.log( typeof "4" * "2" ); // NaN
console.log( 'string' * "2" ); // NaN

// --- Presición y Limites ---
// Cuidado: JS usa punto flotante IEEE 754, lo que causa errores en decimales.

console.log("--- Presición ---");
console.log(`0.1 + 0.2 = ${0.1 + 0.2}`); // 0.30000000000000004 (Ojo en entrevistas)

console.log("--- Limites ---");
console.log(`Entero seguro máximo: ${Number.MAX_SAFE_INTEGER}`); // 9007199254740991
console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); // 9007199254740993
console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); // 9007199254740995
console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`); // 9007199254740996

/*
 Tipos de datos BigInt
 Sirve para representar valores numéricos enteros, de los que el
 tipo number no pueda representar o no es seguro.
 Las operaciones con un bigInt se debe hacer con otro bigInt
*/

const myBigInt = 9007199254740991n;
console.log( typeof myBigInt ); // bigint
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1n }`); // 9007199254740992
console.log( `Resultado de myBigInt + 2n: ${ myBigInt + 2n }`); // 9007199254740993
console.log( `Resultado de myBigInt + 3n: ${ myBigInt + 3n }`); // 9007199254740994
console.log( `Resultado de myBigInt + 4n: ${ myBigInt + 4n }`); // 9007199254740995
console.log( `Resultado de myBigInt + 5n: ${ myBigInt + 5n }`); // 9007199254740996
console.log( `Resultado de myBigInt + 6n: ${ myBigInt + 6n }`); // 9007199254740997
console.log( typeof (myBigInt + 6n) ); // bigint


/* ================================================================
   4. DATOS PRIMITIVOS: BOOLEAN, NULL, UNDEFINED
   ================================================================
   - Boolean: true / false (Lógica binaria)
   - Undefined: Variable declarada pero sin valor asignado (automático).
   - Null: Ausencia intencional de valor (asignado por el dev).
*/

let currentTask;
console.log( currentTask ); // undefined

currentTask = "Iniciar sesión";
console.log(`Valor de currentTask: ${currentTask}`); // "Iniciar sesión"

currentTask = null;
console.log(`Valor de currentTask: ${currentTask}`); // null


/* ================================================================
   5. CONVERSIÓN DE DATOS (TYPE CASTING) 
   ================================================================
   Transformar un tipo de dato en otro.
*/
// --- 5.1 Conversión Implícita (Coerción) ---
// JS intenta "ayudarte" convirtiendo tipos automáticamente.

console.log("--- Implícita ---");
console.log("5" + 2); // "52" (number 2 se convierte a string)
console.log("5" - 2); // 3 (string "5" se convierte a number)
console.log("5" * "2"); // 10 (ambos strings se convierten a numbers)

const  myNumber = "10";
console.log( `Multiplicación: ${ myNumber * 2 }`); // 20 (string "10" se convierte a number)
                               //      10  * 2 = 20
console.log( typeof myNumber ); // string

// --- 5.2 Conversión Explícita (Recomendado) ---
// Nosotros controlamos el cambio.
// Opciones:
// Number(): Convierte todo o devuelve NaN si hay letras.
// parseInt(): Busca enteros al inicio.
// parseFloat(): Busca decimales al inicio.

/*
 Number() Vs parseInt() y parseFloat()
  - Number convierte enteros y decimales
  - Number devuelve NaN si la cadena contiene algún caracter no numérico
  - Con parseInt y parseFloat, si la entrada comienza con un valor no numérico devuelve NaN ( -123abc => NaN )
  - parseInt convierte solo la parte entera
  - parseFloat convierte la parte entera y decimales
  - parseInt y parseFloat realiza la conversión hasta encontrar un caracter no numérico ( "123-567")
*/

console.log( Number("68.58") ); // 68.58
console.log( parseInt("68.58") ); // 68
console.log( parseFloat("68.58") ); // 68.58

console.log( Number("68.58 dolares") ); // NaN
console.log( parseInt("68.58 dolares") ); // 68
console.log( parseFloat("68.58 dolares") ); // 68.58

console.log( Number("$68.58 dolares") ); // NaN
console.log( parseInt("$68.58 dolares") ); // NaN
console.log( parseFloat("$68.58 dolares") ); // NaN

console.log( Number("68-58") ); // NaN
console.log( parseInt("68-58") ); // 68
console.log( parseFloat("68-58") ); // 68


console.log( Number( true ) ); // 1
console.log( Number( false ) ); // 0

console.log( Number( [] ) ); // 0
console.log( Number( [30] ) ); // 30
console.log( Number( [30,40] ) ); // NaN

// Conversión a tipo boolean
// En la conversión a boolean los siguientes valores son false:
// ""(empty string), 0, NaN, null, undefined
console.log( Boolean(1) ); // true
console.log( Boolean(10000) ); // true
console.log( Boolean(-1000) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean(NaN) ); // false

console.log( Boolean("") ); // false
console.log( Boolean(" ") ); // true
console.log( Boolean("1") ); // true
console.log( Boolean("0") ); // true


// Conversión explicita a string
console.log( String( 123 ) ); // "123"
console.log( String( 12.34 ) ); // "12,2"
console.log( "Mi número es " + 12.34 ); // "Mi número es 12.34"
console.log( "Mi número es " + String(12.34) ); // "Mi número es 12.34"

// Para los objetos, se recomienda usar el metod JSON.stringify( objet )
// Convierte un objeto en formato JSON
console.log( JSON.stringify( {name:"John", age:30} ) ); // '{"name":"John","age":30}'

const calificaciones =[8,6,5,9]
console.log("Mi calificación es " + calificaciones ); // "Mi calificación es 8,6,5,9"

// Resumen:

// Number()
// [] (empty array) -> 0, [30]-> 30, [30,30]->NaN, false-> 0, true-> 1

// String()
// [] -> "", [12,2]->"12,2", function(){}-> "function(){}"
// {} ->"[object,object]", {clave:valor, age:17} ->"[object,object]"

// Para convertir un objeto a string, la forma correcta es usar
// el método JSON.stringyfy( objeto );

// Resumen : https://www.w3schools.com/js/js_type_conversion.asp