let novaFinestra;

document.getElementById("openWindow").addEventListener("click", () => {
    // Obre una nova finestra
    novaFinestra = window.open(
        "", 
        "NovaFinestra", 
        "width=500,height=200,top=200,left=100"
    );

    // Escrivim un títol a la finestra
    if (novaFinestra) {
        novaFinestra.document.write("<h1>Hola</h1>");
    } else {
        alert("No s'ha pogut obrir la finestra. Pot ser que estigui bloquejada pel navegador.");
    }
});

document.getElementById("moveWindow").addEventListener("click", () => {
    // Moure la finestra si existeix
    if (novaFinestra) {
        novaFinestra.moveBy(-50, 50); // Mou 300 px avall i 100 px a l'esquerra
        novaFinestra.focus(); 
    } else {
        alert("Primer has d'obrir la finestra!");
    }
});

document.getElementById("closeWindow").addEventListener("click", () => {
    // Tancar la finestra si existeix
    if (novaFinestra) {
        novaFinestra.close();
        novaFinestra = null;
    } else {
        alert("La finestra ja està tancada o no existeix.");
    }
});