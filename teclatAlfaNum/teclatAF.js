function mostrarTecladoNums() {

    let numUsuario = validarCasillas();

    let div = document.getElementById("contenedor");

    crearCasillas(numUsuario, div);
}

function mostrarTecladoABC() {
    let letra = String.fromCharCode(ascii_code);

    for (let letra = 65; letra <= 90; letra++) {
        let teclaLetra = document.createElement("div");
        teclaLetra.classList.add("teclaLetra");
        teclaLetra.textContent = letra;
        contenedorABC.appendChild(teclaLetra);
    }
}

function validarCasillas() {
    let numUsuario = parseInt(prompt("Dime un valor inicial entre 1 i 30:"));
    if (numUsuario < 1 || numUsuario > 30) {
        alert("El numero no puede ser mayor a 30 ni menor de 1!");
    }

    return numUsuario;
}

function crearCasillas(numUsuario, div) {

    for (let num = 1; num <= numUsuario.valueOf(numUsuario); num++) {
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
