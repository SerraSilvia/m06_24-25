/*Ejercicios para Practicar map()*/
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var objetos = [
    {nombre: "fresa", color:"rojo"}, 
    {nombre: "platano", color:"amarillo"}, 
    {nombre: "pera", color:"verde"}, 
    {nombre: "cereza", color:"rojo"}];

var personas = [
    {nombre: "Lara", edad: 15}, 
    {nombre: "Berto", edad: 18}, 
    {nombre: "Lina", edad: 25}, 
    {nombre: "Gus", edad: 49}
];

var frutas = ["fresa", "pera", "manzana", "cereza"];

var productos = [
        {nombre: "lata", precio: 1}, 
        {nombre: "barril", precio: 8}, 
        {nombre: "vaso", precio: 2}, 
        {nombre: "botella", precio: 3}
    ];

var fechasStr = ["2024-03-16", "2023-12-25", "2022-07-04"];

/*1- Crear un array de números y generar un nuevo array con cada número multiplicado por 2.*/
const doblaNums = nums.map((num)=>{
    return num*2;
})
console.log(doblaNums);

/* 2-Crear un array de objetos con propiedades nombre y edad, y usar map() para crear un nuevo array solo con los nombres.*/
const soloNombresPersonas = personas.map((p) => p.nombre);
console.log(soloNombresPersonas);

/*3-Crear un array de cadenas y generar un nuevo array con la longitud de cada cadena.*/
const longitudCadaPalabra= frutas.map((f)=> f.length);
console.log(longitudCadaPalabra);

/*4-Dado un array de productos con propiedad precio, crear un nuevo array con los precios con un 20% de descuento.*/
const prodDescuesto = productos.map((p)=> ( p.precio - ((p.precio*20)/100)) );
console.log(prodDescuesto);

/*5-Usar map() para convertir un array de fechas (en formato de cadena) en un array de fechas tipo Date.*/
const fechasDate = fechasStr.map(fecha => new Date(fecha));
console.log(fechasDate);

/*6-Crear un array de objetos con nombre y edad, y generar un nuevo array con objetos donde se indique si la persona es mayor de edad.*/
/*7-Crear un array de números negativos y generar un nuevo array donde todos los valores sean positivos.*/
/*8-Generar un array con los primeros 5 números cuadrados usando map().*/
/*9-Dado un array de frases, crear un array donde cada frase tenga el prefijo "La frase es: ".*/
/*10-Crear un array de personas con nombre y edad y generar un array de nombres que contengan la palabra "Juan".*/