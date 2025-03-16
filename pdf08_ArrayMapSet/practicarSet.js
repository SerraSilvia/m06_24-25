/* Ejercicios para Practicar Set*/
console.log(" Ejercicios para Practicar Set")

var nums = [-1,0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9];
let gadgets = new Set(['movil','tablet','portatil']);

/* Eliminar todos los valores duplicados en un array de números.*/
const eliminaDuplicados = [...new Set(nums)];
console.log(eliminaDuplicados);

/*Agregar un nuevo valor a un Set y luego verificar si existe ese valor.*/
nums.push(6);
const existe = nums.find((num => num ===6));
console.log(existe);

gadgets.add("reloj");
console.log(gadgets);

/*Eliminar un valor específico de un Set.*/
gadgets.delete("reloj");
console.log(gadgets);

/*Comprobar si un Set contiene un valor específico.*/
const tieneTablet = gadgets.has("tablet");
console.log(tieneTablet);

/*Crear un Set con números y verificar el tamaño del Set.*/
const numerosSet = new Set([1, 2, 3, 4, 5]);
console.log(numerosSet.size);

/*Unir dos Set de números y crear un nuevo Set con los valores combinados.*/
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);

const setCombinado = new Set([...set1, ...set2]);
console.log(setCombinado);

/*Convertir un Set a un array.*/
const setArray = [...setCombinado];
console.log(setArray);

/*Eliminar todos los elementos de un Set (vaciar el Set).*/
gadgets.clear();
console.log(gadgets);

/*Comparar dos Set para verificar si son iguales (es decir, tienen los mismos valores).*/
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 2, 1]);

const sonIguales = setA.size === setB.size && [...setA].every(value => setB.has(value));
console.log(sonIguales);

/*Filtrar los elementos de un Set que sean mayores a un número específico y crear un nuevo Set.*/
const numeros = new Set([1, 2, 3, 4, 5, 6, 7]);
const mayoresQueCuatro = new Set([...numeros].filter(num => num > 4));

console.log(mayoresQueCuatro);
