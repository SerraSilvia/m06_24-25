function mostrarTecladoNums() {

    let div = document.getElementById("contenedor");

    crearCasillas(div);
}

function mostrarTecladoABC() {

    let contenedorABC = document.getElementById("contenedorABC");
    

    for (let letra = 65; letra <= 90; letra++) {
        let tecla = document.createElement("div");
        tecla.classList.add("tecla");
        tecla.textContent = String.fromCharCode(letra);
        contenedorABC.appendChild(tecla);
    }
}


function crearCasillas(div) {

    for (let num = 1; num <= 9; num++) {
        let cuadro = document.createElement("p");
        console.log(num % 2);
        let numero = document.createTextNode(num);

        if (num % 2 == 0) {
            cuadro.setAttribute("class", "par");
        } else {
            cuadro.setAttribute("class", "impar");
        }
        if (num % 3 == 0) {
            cuadro.setAttribute("class", "multiplo");
        }
        cuadro.appendChild(numero);
        div.appendChild(cuadro);
    }
}


mostrarTecladoABC();
mostrarTecladoNums();
