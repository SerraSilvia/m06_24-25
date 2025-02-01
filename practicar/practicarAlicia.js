function init() {
    cargaDatos();
    cargaNotas();

  // prodImp([1, 2, 3, 4]);
   prodImp([3, 6, 8, 5, 5, 7]);
   //prodImp([1, 0, 1, 0, 1, 0]);

}


function cargaDatos() {
    const datosContenedor = document.querySelector("#datos");

    const alumno = ["David", "López Fernandez", "DAWe", "29 / 04 / 2003"];
    let datos = [];

    let nombre = "Nombre:" + alumno[0] + " " + alumno[1];
    let curso = "Curso:" + alumno[2];
    let cumple = "Cumpleaños:" + alumno[3];

    /* datos.push(nombre);
     datos.push(curso);
     datos.push(cumple);
     */
    datos.push(nombre, curso, cumple);


    console.log(nombre);
    console.log(curso);
    console.log(cumple);

    for (let i in datos) {
        let p = document.createElement("p");
        p.textContent = datos[i];
        datosContenedor.appendChild(p);
    }
}

function cargaNotas() {
    const datosContenedorNotas = document.querySelector("#notas");

    const modulos = ["m02", "m03", "m04", "m05", "m06", "m07", "m08", "FOL"]
    const alumnoNotas = [[8, 9, 4], [9, 10], [6, 8, 10], [4], [8, 4, 7], [], [7, 5, 9, 10], [10]]

    for (let i in modulos) {
        let p = document.createElement("p");
        p.textContent = "Asignatura " + modulos[i] + " :";
        datosContenedorNotas.appendChild(p);

        for (let j in alumnoNotas[i]) {
            let pNota = document.createElement("p");
            pNota.textContent = "+ Nota UF" + ": " + alumnoNotas[i][j];
            datosContenedorNotas.appendChild(pNota);
        }

    }

}

function prodImp(cadena) {
    const datosContenedorNotas = document.querySelector("#result");
    let contador = 1;

    for (let i in cadena) {
        if (cadena[i] % 2 != 0) {
            contador *= cadena[i];
        }

    }
    let p = document.createElement("p");
    p.textContent = "total:     " +  contador;
    datosContenedorNotas.appendChild(p);

}