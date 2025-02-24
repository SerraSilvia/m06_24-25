
// Tecles per al teclat numèric
const keys = [
    "7", "8", "9",
    "4", "5", "6",
    "1", "2", "3",
    "0", "Esborrar", "Enter"
];

// Referències al DOM
const keyboard = document.getElementById("keyboard");
const output = document.getElementById("output");

// Crea el teclat dinàmicament
keys.forEach((key) => {
    const keyButton = document.createElement("div");
    keyButton.textContent = key;
    keyButton.classList.add("key");

    if (key === "Esborrar" || key === "Enter") {
        keyButton.classList.add("special");
    }

    // Afegeix esdeveniments per a cada tecla
    keyButton.addEventListener("click", () => handleKeyClick(key));
    keyboard.appendChild(keyButton);
});

// Funció per gestionar el clic de les tecles
function handleKeyClick(key) {
    if (key === "Esborrar") {
        // Esborra l'últim dígit
        output.value = output.value.slice(0, -1) || "0";
    } else if (key === "Enter") {
        // Mostra el valor actual a la consola
        console.log("Valor introduït:", output.value);
        alert(`Valor introduït: ${output.value}`);
        output.value = "0"; // Reinicia el quadre de text
    } else {
        // Afegeix el número seleccionat
        if (output.value === "0") {
            output.value = key;
        } else {
            output.value += key;
        }
    }
}