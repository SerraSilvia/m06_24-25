function mostrarTablero(){
    let tablero = document.getElementById("tablero");

    for(let fila=0; fila <8 ; fila++){
        for(let col=0; col <8; col++){
            let color = "negro";
            if((fila+col)%2 !== 0){
                color = "blanco";
            }
            let celda = document.createElement("div");
            celda.classList.add("celda", color);
            if(fila <=1){
                celda.textContent = "O"
            }
            if(fila >=6){
                celda.textContent = "X"
            }
            tablero.appendChild(celda);
        }
    }
}
mostrarTablero();