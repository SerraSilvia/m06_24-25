function init(){
    /*document.getElementById("a1").textContent=randomDado();
    document.getElementById("a2").textContent=randomDado();*/
    
    //VERSIóN PEdirle al USER que entre los dados
    document.getElementById("a1").textContent = pideNumUser();
    document.getElementById("a2").textContent = pideNumUser();

    //La maquina hace el random de sus dados
    document.getElementById("b1").textContent=randomDado();
    document.getElementById("b2").textContent=randomDado();
}

function calculaGanador(){
    let sumA = sumaDados(document.getElementById("a1").textContent,document.getElementById("a2").textContent);
    let sumB = sumaDados(document.getElementById("b1").textContent,document.getElementById("b2").textContent);

    document.getElementById("resultado").textContent=comparaNumeros(sumA,sumB);
}

//UTILIDADES
function randomDado(maxDado=6){
    return Math.floor(maxDado*Math.random())+1;
}

function sumaDados(a,b){
    return(parseInt(a)+parseInt(b))
}

function comparaNumeros(a,b){
    let resultado="Los jugadores han empatado";
    if(a>b){
        resultado="El Jugador A ha ganado"
    }
    else if(a<b){
        resultado="El Jugador B ha ganado"
    }
    return resultado
}

//VERSIóN PEdirle al USER que entre los dados
function pideNumUser(){
    let numUser = prompt("Entra tu tirada de dado, un número entre 1 y 6");
    if(parseInt(numUser)>6 || parseInt(numUser)<1){
        alert("Tu número será 0, puesto que no es un valor factible de dado");
        return 0;
    }
    return parseInt(numUser);
}