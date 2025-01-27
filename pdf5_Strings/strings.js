function obtenStringEmpiezaConAs(string) {

    let contiene = string.toUpperCase();

    if (contiene.startsWith("AS")) {

    } else if (string === '') {
        console.log("''");
    }
    else {
        string = 'AS' + string;
    }

    console.log(string);
    document.querySelector("#contieneAs").textContent += string;
    document.querySelector("#contieneAs").style.color = "blue";

}

obtenStringEmpiezaConAs('ASTerisco');
obtenStringEmpiezaConAs('TEroide');
obtenStringEmpiezaConAs('');

function eliminaCarracterPosicion(string, number) {

    let longitud = string.length;

    if (longitud < number) {
        string = string.slice(0, number) + string.slice(number + 1);

    }
    console.log(string);
    document.querySelector("#longitudPalabra").textContent += string;
    document.querySelector("#longitudPalabra").style.color = "blue";

}

eliminaCarracterPosicion('murcielago', 3);
eliminaCarracterPosicion('rinoceronte', 12);