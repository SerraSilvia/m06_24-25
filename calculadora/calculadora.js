function mostrarNumeros(){
    let calculadora = document.getElementById("calculadora");

    for (let i = 0; i < 10; i++) {
        let num = document.createElement("div");
        num.classList.add("num");
        num.textContent = i;
        calculadora.appendChild(num);
    }
}
mostrarNumeros();