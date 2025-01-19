function encertaNum() {
    let num = generaAleatori();
    let intents = 5;

    do {
        var numUsuari = parseInt(prompt("Introdueix un número entre 1 i 100"));
        let ok = true;

        /* Comprobar que el valor introducido es un numero */
        if (isNaN(numUsuari)) {
            alert("Has d'introduir un número");
            ok = false;
        } else {

            /* Comprobar que el valor introducirod esta entre 1 y 100 */
            ok = comprovaRang(numUsuari);

            if (ok) {
                if (numUsuari == num) {
                    alert("Has encertat el número");

                } else if (numUsuari < num) {
                    alert("El número és més gran");
                    intents--;
                } else {
                    alert("El número és més petit");
                    intents--;
                }
            }
        }
    } while (numUsuari != num && intents > 0);

    if (intents == 0) {
        alert("Has esgotat els intents");
        alert("El número era: " + num);
    }

}

function generaAleatori() {
    let num = Math.floor(Math.random() * 100) + 1;
    return num;
}

function comprovaRang(numUsuari) {
    if (numUsuari < 0 || numUsuari > 100) {
        alert("El número ha d'estar entre 1 i 100");
        return false;
    }
    return true;
}


