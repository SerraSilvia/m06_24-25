function sumarPares(array) {
    let sum = 0;
    for (let i in array) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    console.log(sum);
    document.querySelector("#sumarPares").textContent = sum;
    document.querySelector("#sumarPares").style.color = "blue";
}

sumarPares([2, 4, 5, 6, 7, 8, 3, 1, 10, 4]);

function ordenDatos(array) {
    let nombre = array.pop();
    console.log("Nombre: " + nombre);
    array.unshift(nombre);
    console.log(array);
    let numeros = 0;
    let total = 0;
    for (let x of array) {
        if (!isNaN(parseInt(x))) {
            total += parseInt(x);
            numeros++;
        }

    }
    array.push(total / numeros);
    console.log(array);
    document.querySelector("#ordenar").textContent = array;
    document.querySelector("#ordenar").style.color = "blue";
}

ordenDatos(["Rodriguez", "8", 9, '5', 4, 'Clara'])

function filterWords(array) {
let filtrado = array.filter((word) => word[0].toUpperCase() !== "Z");

console.log(filtrado);
document.querySelector("#filtrar").textContent += filtrado;
}


filterWords(["Bob", "Alex", "Zoello"]);
filterWords(["León", "Zebra", "Gacela"]);
filterWords(["Mercedes", "Bmw", "Audi", "Porche"]);