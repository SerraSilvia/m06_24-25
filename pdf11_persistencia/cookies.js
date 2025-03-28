// Función para verificar si la configuración ya fue establecida
function configuracionGuardada() {
    return document.cookie.includes("configurada=true");
}

// Función para obtener el valor de una cookie
function obtenerCookie(nombre) {
    let cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        let [key, value] = cookies[i].split('=');
        if (key === nombre) return value;
    }
    return null;
}

// Función para abrir la ventana de configuración solo si es la primera vez
function abrirVentana() {
    if (!configuracionGuardada()) {
        const features = "left=200,top=200,width=400,height=350";
        window.open('cookiesVentana.html', 'ventana', features);
    }
}

// Función para aplicar los colores guardados en cookies
function aplicarEstilos() {
    let fondo = obtenerCookie('fondo');
    let fuente = obtenerCookie('fuente');

    if (fondo) document.body.style.backgroundColor = fondo;
    if (fuente) {
        let titulo = document.getElementById('titulo');
        if (titulo) titulo.style.color = fuente;
    }
}

// Código que se ejecuta cuando la página principal ha cargado
document.addEventListener("DOMContentLoaded", () => {
    abrirVentana();
    aplicarEstilos();
});
