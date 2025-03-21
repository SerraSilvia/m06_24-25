
let obrir = document.querySelector("#of");
let finestra;

const abrir = window.open("", "finestraSilvia", "width = 500px , height = 200px , left=100px , top=200px");
if (finestra) {
    finestra.document.write("<h1>Hola</h1>")
}



function moure() {
    let moure = document.querySelector("#mf");
    moure.addEventListener("click", () => {
        if (finestra) {
            finestra = window.moveBy(-50, -50);
            finestra.focus()
        }
    })
}

/*

function open() {

    let obrir = document.querySelector("#of");
    let finestra;

    obrir.addEventListener("click", () => {
        window.open("", "finestraSilvia", "width = 500px , height = 200px , left=100px , top=200px");
        if (finestra) {
            finestra.document.write("<h1>Hola</h1>")
        }
    })
}

function moure(){
    let moure = document.querySelector("#mf");
    moure.addEventListener("click", () => {
        if(finestra){
            finestra=window.moveBy(-50, -50);
            finestra.focus()
        }
    })
}

*/
