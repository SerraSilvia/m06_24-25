//exercici 1

function imprimirNums() {
    let resultat = 0
    for (let i = 1; i < 11; i++) {
        console.log(i)
        resultat = resultat + i;
    }
    document.getElementById("Resultat").textContent = resultat;
}

//exercici 2
/*Pide al usuario un número N y calcula la suma de todos los números del 1 al N. Muestra el resultado en la consola. */

function sumarnums() {
    let N = parseInt(window.prompt("Escriu un número"));
    let contador = 0;

    for (let i = 1; i <= N; i++) {
        contador += i
    }

    console.log("La suma de los números del 1 al " + N + " es " + contador);
    document.write("La suma de los números del 1 al " + N + " es " + contador);
}

//ecercici3
/*Escribe un programa que imprima en consola todos los números pares marcados en el rango que indique el usuario.*/

function imprimirPares() {
    let N = parseInt(window.prompt("Escriu un número inicial"));
    let M = parseInt(window.prompt("Escriu un número final"));
    let pares = [];

    for (let i = N; i <= M; i++) {
        if (i % 2 == 0) {
            pares.push(i);
        }
    }

    console.log("Los números pares son: " + pares);
    document.write("Los números pares son: " + pares);

}

//exercici4
/*Escribe un programa que dibuje un triángulo en la consola. (línea 1, 1*, línea 2, *).*/

function imprimirTriangle(){
    let N = parseInt(window.prompt("Escriu el número de pisos per un triangle"));
    for (let i = 1; i <= N; i++) {
        let linia = ""; // Se crea una cadena vacía para cada línea
        for (let j = 1; j <= i; j++) {
            linia += "*"; // Se agregan asteriscos a la cadena
        }
        console.log(linia); 
        document.write(linia + "<br>");
    }
}

//exercici 5
/*¿Te atreves con un árbol de Navidad?*/