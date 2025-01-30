function init(){
    let resultado = recibeArrayTipoString();
    let resultadoPares = pares();
    let resultadoMayorQueDos = mayorQueDos();
    let resultadoUnoEsPar = unoEspar();
    let resultadoLongitudCadena =longitudCadaCadena();
    let resultadoDoblarNumero = doblarNumero();
    let resultadoEmpiezanPorZ = empiezanPorZ();
    let resultadoPrimerElementoSupCinco = primerElementoSupCinco();
    let resultadoUltimoPorP = ultimoPorP();
    let resultadoPrimeraPorT = primeraPorT();
    let resultadoUltimoPar = ultimoPar();
    let resultadoSumaDeTodos= sumaDeTodos();


    console.log(resultado);
    console.log(resultadoPares);
    console.log(resultadoMayorQueDos);
    console.log(resultadoUnoEsPar);
    console.log(resultadoLongitudCadena);
    console.log(resultadoDoblarNumero);
    console.log(resultadoEmpiezanPorZ);
    console.log(resultadoPrimerElementoSupCinco);
    console.log(resultadoUltimoPorP);
    console.log(resultadoPrimeraPorT);
    console.log(resultadoUltimoPar);
    console.log(resultadoSumaDeTodos);

}
//ej1 Función que recibe un array y que comprueba si todos los elementos de una array son de tipo String. Si es que sí devuelve true en caso contrario false.
function recibeArrayTipoString(){
    let input= prompt("Introduzca una palabra");
    if (typeof input == "string") {
        console.log("True");
    }else console.log("False");
}

//ej2 Función que recibe un array y que comprueba que todos los elementos de una array son pares. Si es que sí devuelve true en caso contrario false.
function pares(){
    const numeros= [2, 4, 6, 8]
    const pares = numeros.every(num => {
        console.log(num);
        return num%2 == 0;
    } );
    return pares;
   // console.log(pares)
}
 
//ej3 Función que recibe un array y que comprueba si al menos un elemento del array tiene una longitud mayor que dos. Si es que sí devuelve true en caso contrario false.
function mayorQueDos(){
    let input= prompt("Introduzca una palabra");
    if(input.length >2){
        console.log("es mayor de dos letras")
    }else{
        console.log("Es de dos letras o menos")
    }
}

//ej4 Función que recibe un array y que comprueba si al menos un número es par. Si es que sí devuelve true en caso contrario false.
function unoEspar(){
    const numeros= [2, 4, 6, 8]
    const pares = numeros.some(num => {
        console.log(num);
        return num%2 == 0;
    } );
    return pares;
}

//ej5 Función que recibe un array y que devuelve un nuevo array con la longitud de cada string que hay dentro del array. 
function longitudCadaCadena(){
    const strings= ["casa", "perro", "gato", "jardin"]
    const stringsLength = strings.map((string) => string.length)
    console.log(stringsLength)
}

//ej6  Función que recibe un array y un número y que devuelve todos los elementos del array multiplicado por dicho número pasado por  parámetro.
function doblarNumero(){
    const numeros= [2, 4, 6, 8]
    const doblarNumeros= numeros.map((numero)=> {
        return numero*2
    });
    console.log(doblarNumeros);
}

//ej7 Función que recibe un array y que devuelve un nuevo array con solo los elementos que empiezan por Z.
function empiezanPorZ(){
    const strings= ["casa", "zapato", "zarza", "jardin", "zebra"]
    const stringsInicianZ= strings.filter(string => string.startsWith('z'));
    console.log(stringsInicianZ);
}

//ej8 Función que recibe un array y que devuelve un nuevo array con solo los elementos que sean múltiplos de 5.

//ej9 Función que recibe un array y que devuelve el primer elemento cuyo tamaño sea superior o igual a 5.
function primerElementoSupCinco(){
    const strings= ["casa", "zapato", "zarza", "jardin", "zebra"]
    const palabraSupCinco= strings.find(string => string.length > 5);
    console.log(palabraSupCinco);

}

//ej10 Función que recibe un array y que devuelve el último elemento que empieza por P.
function ultimoPorP(){
    const strings= ["piso", "zapato", "zarza", "pajaro", "zebra"]
    const stringsReves= strings.reverse();
    const ultimaPorP= stringsReves.find(palabra => palabra.startsWith("p"));
    console.log(ultimaPorP);
}

//ej11 Función que recibe un array y que devuelve la posición del primer elemento que empieza por T.
//no va
function primeraPorT(){
    const strings= ["piso", "zapato", "tarta", "pajaro", "tomate"]
    const primPorT= strings.some(string => string.startsWith("t"));
    console.log(primPorT);
}

//ej12 Función que recibe un array y que devuelve el último elemento par.
function ultimoPar(){
    const numeros= [2, 1, 3, 8]
    const pares = numeros.every(num => {
        console.log(num);
        return num%2 == 0;
    } );
    const paresReves= pares.reverse
    console.log(paresReves[0])
}

//ej13 Función que recibe un array y que devuelve la suma de todos sus elementos.
//no va
function sumaDeTodos(){
    const numbers= [2, 4, 6, 8]
    const sumNumbers= numbers.reduce((accumulator, currentNumber) => {return accumulator + currentNumber}, 0);
    console.log(sumNumbers);
}

//ej14 Función que recibe un array y que devuelve la resta del primer elemento menos el segundo y así sucesivamente.

//ej15 Función que recibe un array y que devuelve la resta del último elemento menos el penúltimo y así sucesivamente.

// Llama a la función init para ejecutar el código
init();