 /*Ejercicios para Practicar Arrays*/
console.log("Ejercicios para Practicar Arrays")

var frutas = ["fresa", "manzana", "cereza", "uva", "pera", "sandía"];
var nums = [-1,0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9];
var frases= ["Buenos días", "Buenas tardes", "Buenas noches"];
var arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];

/* Crear un array con 5 números y obtener la suma de todos los elementos.*/
const sumaTodos = nums.reduce((acumulador, num) => acumulador + num, 0);
console.log(sumaTodos);

/*Ejemplo notas*/
let sumaNotas = arrayNotas.reduce((total,nota)  => total+nota, 0);
let maxNota = arrayNotas.reduce((max,nota)  => nota > max ? nota : max);

/* Crear un array de cadenas de texto y convertir todas las cadenas a mayúsculas.*/
const todasMayus = frases.map(frase => frase.toUpperCase());
const todasMayus2 = frutas.map(fruta => fruta.toUpperCase());
console.log(todasMayus);
console.log(todasMayus2);

/* Eliminar el primer y último elemento de un array de números.*/
frutas.pop()
frutas.shift()
console.log(frutas);

/* Crear un array de números y obtener el valor más alto y más bajo.*/
const numsOrdenados= nums.sort((a,b)=>b-a);
console.log("El num mayor es: "+ numsOrdenados[0] + " El num menor es: "+ numsOrdenados[numsOrdenados.length - 1]);

/* Eliminar todos los valores duplicados en un array de números.*/
const eliminaDuplicados = [...new Set(nums)];
console.log(eliminaDuplicados);

/* Verificar si un número existe dentro de un array.*/
const contieneNum = nums.find(num => num ===4);
console.log(contieneNum);

/* Crear un array de números y ordenar los números de menor a mayor.*/
const numsOrdenadosAsc= nums.sort((a,b)=>a-b);
console.log(numsOrdenadosAsc);

/* Concatenar dos arrays en uno solo.*/
const concat = frases.concat(frutas);
console.log(concat);

/* Invertir el orden de los elementos de un array.*/
const arrayOrdenada = frutas.reverse();
console.log(arrayOrdenada);

/* Contar cuántas veces aparece un valor específico dentro de un array.*/
const valorBuscado = 2;

const cantidad = nums.reduce((contador, num) => num === valorBuscado ? contador + 1 : contador, 0);
console.log(`El número ${valorBuscado} aparece ${cantidad} veces.`);

/* 10-Crear un array de personas con nombre y edad y generar un array de nombres que contengan la palabra "Juan".*/
const personass = [
    { nombre: "Juan Carlos", edad: 25 },
    { nombre: "Ana María", edad: 30 },
    { nombre: "Juanita", edad: 22 },
    { nombre: "Luis", edad: 28 },
    { nombre: "Juan", edad: 35 }
  ];
  
  const nombresJuan = personass.filter(persona => persona.nombre.includes("Juan")).map(persona => persona.nombre);
  console.log(nombresJuan);

  
