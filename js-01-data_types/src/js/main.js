console.log("Sesión JS-01, tipos de datos y variables");

/*
 Tipos de datos de JavaScript:
 - Objetos y primitivos
 - Los datos primitivos:
    * string
    * boolean
    * number
    * null
    * undefined
    * bigint
    * symbol
    > son inmutables, no tienen atributos ni métodos

- Objetos:
     tipo object
    {clave: valor, edad: 25, name: "pitufina"}
     tipo array
    [element_1 , element_2 , "Pitufinas", 38, {}, {}  ]
*/

// ================= Datos primitivos ==================
/*
 string: tipo de dato que representa una secuencia de caracteres.
  Puede incluir textos, números, espacios, símbolos. Siempre se 
  define entre comillas.


*/

// TODO: crea una variable con tu nombre y película favorita


/*
- String template literals ` ` (backtick) 
  Es una forma más flexible y legible de trabajar con cadenas 
  de texto. Utilizan comillas invertidas (``) en lugar de 
  comillas simples o dobles y permiten incrustar expresiones
  dentro de la cadena utilizando la interpolación ${}.

*/
// TODO: del ejercucio anterior, muestra en consola usando template literals


// TODO Mostrar en console "El resultado de 3 * 4 = 12 pesos"


/* TODO Reto:
 Crear una variable con el nombre de la persona que cumple años.
 Crear una variable con el regalo que le darás.

 Mostrar en consola el mensaje que incluya el nombre de las persona y el regalo.
*/

/*
 Tipos de datos number.

 - números positivos: 100, 1, 0.258
 - números negativos: -1 , -50.35
 - valores que no pueden ser representados numéricamente: NaN
 - número infinitos: +Infinity, -Infinity
*/



/* TODO: comprueba si las siguientes variables son del tipo number*/
const age = 25;
const price = 99.99;
const temperature = 32.5;

/* TODO: Comprueba si las siguientes variables son del tipo string*/
const firstName = "Juan";
const lastName = "Pérez";
const city = "Ciudad de México";


/*
 Cuando se realizan operaciones que exceden los límites
 de MAX_SAFE_INTEGER se produce una pérdida de precisión.

 Perdida precisión: No se pueden representar exactamente ciertos valores.
  típicamente en operaciones de números de punto flotate.
*/
console.log( `Pérdida de precisión: 0.1 + 0. 2 = ${ 0.1 + 0.2 }`); // 0.30000000000000004
console.log( `Valor entero seguro en JavaScript: ${Number.MAX_SAFE_INTEGER} `); // 9007199254740991
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

/*
 Tipo de dato undefined
  - Una variable que es declarada, pero el tipo de datos
   no es definido.
*/


/*
 Tipo de dato null
  - Una variable que intensionalmente se borra el tipo de dato

  */
 
 /*
 Tipo de dato boolean
 Tiene dos estados: true y false

 */

  
 // --------------------------------------------------------------
 /*
   Conversion de datos (type casting)
  
   El type casting es el acto de convertir variables de un tipo de dato a otro.
   Esto puede ser implícito(automático) o explícito (forzado por el desarrollador).

 */

   // Conversión implícita


 /*
   Conversion explícita de datos (coerción de tipo)

 */
/*
 Number() Vs parseInt() y parseFloat()
  - Number convierte enteros y decimales
  - Number devuelve NaN si la cadena contiene algún caracter no numérico
  - Con parseInt y parseFloat, si la entrada comienza con un valor no numérico devuelve NaN
  - parseInt convierte solo la parte entera
  - parseFloat convierte la parte entera y decimales
  - parseInt y parseFloat realiza la conversión hasta encontrar un caracter no numérico
*/



// Conversión a tipo boolean
// En la conversión a boolean los siguientes valores son false:
// ""(empty string), 0, NaN, null, undefined




/* Resumen:

 Number()
 [] (empty array) -> 0, [30]-> 30, [30,30]->NaN, false-> 0, true-> 1

 String()
 [] -> "", [12,2]->"12,2", function(){}-> "function(){}"
 {} ->"[object,object]", {clave:valor, age:17} ->"[object,object]"

 Para convertir un objeto a string, la forma correcta es usar
 el método JSON.stringyfy( objeto );

 Resumen : https://www.w3schools.com/js/js_type_conversion.asp
 */
