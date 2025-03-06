function init() {
    const frutas = ['fresa', 'manzana', 'plátano', 'tomate'];
    const frutasConNums = ['fresa', 'manzana', 'plátano', 2];
    const numsPares = [2, 4, 6, 8];
    const numsImpares = [1, 3, 7, 9];
    const mezclaNums = [1, 2, 5];
    const palabras = ['un', 'dos', 'tres'];
    const palabras2 = ['el', 'la', 'tu'];
    const palabrasZ = ["casa", "zapato", "Zarza", "patata", "jardin", "zebra", "perro"]

    let resultado = recibeArrayTipoString(frutas);
    let resultado2 = recibeArrayTipoString(frutasConNums);
    document.querySelector('#ej1').innerHTML = `[${frutas}] ${resultado}<br>
    [${frutasConNums}] ${resultado2}`
    document.querySelector('#ej1').style = 'color: blue';

    resultado = pares(numsPares);
    resultado2 = pares(numsImpares);
    document.querySelector('#ej2').innerHTML = `[${numsPares}] ${resultado}<br>
    [${numsImpares}] ${resultado2}`
    document.querySelector('#ej2').style = 'color: blue';

    resultado = mayorQueDos(palabras);
    resultado2 = mayorQueDos(palabras2);
    document.querySelector('#ej3').innerHTML = `[${palabras}] ${resultado}<br>
    [${palabras2}] ${resultado2}`
    document.querySelector('#ej3').style = 'color: blue';

    resultado = unoEspar(numsImpares);
    resultado2 = unoEspar(mezclaNums);
    document.querySelector('#ej4').innerHTML = `[${numsImpares}] ${resultado}<br>
    [${mezclaNums}] ${resultado2}`
    document.querySelector('#ej4').style = 'color: blue';

    resultado = longitudCadaCadena(frutas);
    document.querySelector('#ej5').innerHTML = `[${frutas}] [${resultado}]<br>`
    document.querySelector('#ej5').style = 'color: blue';

    resultado = doblarNumero(numsPares, 2);
    document.querySelector('#ej6').innerHTML = `[${numsPares}] *2 [${resultado}]<br>`
    document.querySelector('#ej6').style = 'color: blue';

    resultado = empiezanPorZ(palabrasZ);
    document.querySelector('#ej7').innerHTML = `[${palabrasZ}] [${resultado}]<br>`
    document.querySelector('#ej7').style = 'color: blue';

    resultado = multiplosCinco(mezclaNums);
    document.querySelector('#ej8').innerHTML = `[${mezclaNums}] [${resultado}]<br>`
    document.querySelector('#ej8').style = 'color: blue';

    resultado = primerElementoSupCinco(palabrasZ);
    document.querySelector('#ej9').innerHTML = `[${palabrasZ}] [${resultado}]<br>`
    document.querySelector('#ej9').style = 'color: blue';

    resultado = ultimoPorP(palabrasZ);
    document.querySelector('#ej10').innerHTML = `[${palabrasZ}] [${resultado}]<br>`
    document.querySelector('#ej10').style = 'color: blue';

    resultado = primeraPorT(frutas);
    document.querySelector('#ej11').innerHTML = `[${frutas}] [${resultado}]<br>`
    document.querySelector('#ej11').style = 'color: blue';

    resultado = ultimoPar(numsPares);
    document.querySelector('#ej12').innerHTML = `[${numsPares}] [${resultado}]<br>`
    document.querySelector('#ej12').style = 'color: blue';

    resultado = sumaDeTodos(numsPares);
    document.querySelector('#ej13').innerHTML = `[${numsPares}] [${resultado}]<br>`
    document.querySelector('#ej13').style = 'color: blue';

    resultado = restaElementos(numsPares);
    document.querySelector('#ej14').innerHTML = `[${numsPares}] [${resultado}]<br>`
    document.querySelector('#ej14').style = 'color: blue';

    resultado = restaElementosReves(numsPares);
    document.querySelector('#ej15').innerHTML = `[${numsPares}] [${resultado}]<br>`
    document.querySelector('#ej15').style = 'color: blue';
}
//ej1 Función que recibe un array y que comprueba si todos los elementos de una array son de tipo String. Si es que sí devuelve true en caso contrario false.
function recibeArrayTipoString(array) {
    return array.every((palabra) => typeof palabra == 'string')
}

//ej2 Función que recibe un array y que comprueba que todos los elementos de una array son pares. Si es que sí devuelve true en caso contrario false.
function pares(numeros) {
    return numeros.every(num => {
        return num % 2 == 0;
    });
}

//ej3 Función que recibe un array y que comprueba si al menos un elemento del array tiene una longitud mayor que dos. Si es que sí devuelve true en caso contrario false.
function mayorQueDos(array) {
    return array.some((palabra) => palabra.length > 2)
}

//ej4 Función que recibe un array y que comprueba si al menos un número es par. Si es que sí devuelve true en caso contrario false.
function unoEspar(numeros) {
    const pares = numeros.some(num => {
        return num % 2 == 0;
    });
    return pares;
}

//ej5 Función que recibe un array y que devuelve un nuevo array con la longitud de cada string que hay dentro del array. 
function longitudCadaCadena(array) {
    return array.map((string) => string.length)
}

//ej6  Función que recibe un array y un número y que devuelve todos los elementos del array multiplicado por dicho número pasado por  parámetro.
function doblarNumero(array, numero) {
    return array.map((num) => {
        return num * numero
    });

}

//ej7 Función que recibe un array y que devuelve un nuevo array con solo los elementos que empiezan por Z.
function empiezanPorZ(array) {
    return array.filter(string => {
        let palabra = string.toLowerCase();
        return palabra.startsWith('z')
    });
}

//ej8 Función que recibe un array y que devuelve un nuevo array con solo los elementos que sean múltiplos de 5.
function multiplosCinco(array) {
    return array.filter(numero => {
        return numero % 5 == 0
    });
}

//ej9 Función que recibe un array y que devuelve el primer elemento cuyo tamaño sea superior o igual a 5.
function primerElementoSupCinco(array) {
    return array.find(string => string.length > 5);
}

//ej10 Función que recibe un array y que devuelve el último elemento que empieza por P.
function ultimoPorP(array) {
    const arrayReverse = array.slice().reverse();
    return arrayReverse.find(palabra => palabra.startsWith("p"));
}

//ej11 Función que recibe un array y que devuelve la posición del primer elemento que empieza por T.
//no va
function primeraPorT(array) {
    return array.find(string => string.startsWith("t"));
}

//ej12 Función que recibe un array y que devuelve el último elemento par.
function ultimoPar(array) {
    const arrayReverse = array.slice().reverse();
    return arrayReverse.find(num => {
        return num % 2 == 0;
    });
}

//ej13 Función que recibe un array y que devuelve la suma de todos sus elementos.
function sumaDeTodos(array) {
    return array.reduce((accumulator, currentNumber) => accumulator + currentNumber);
}

//ej14 Función que recibe un array y que devuelve la resta del primer elemento menos el segundo y así sucesivamente.
function restaElementos(array) {
    return array.reduce((accumulator, currentNumber) => accumulator - currentNumber);
}
//ej15 Función que recibe un array y que devuelve la resta del último elemento menos el penúltimo y así sucesivamente.
function restaElementosReves(array) {
    const arrayReverse = array.slice().reverse();
    return arrayReverse.reduce((accumulator, currentNumber) => accumulator - currentNumber);
}
// Llama a la función init para ejecutar el código
