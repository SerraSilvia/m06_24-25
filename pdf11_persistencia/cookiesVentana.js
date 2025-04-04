// Función para guardar las cookies con los colores seleccionados
function crearCookies() {
    let fondo = document.getElementById('fondo').value
    let fuente = document.getElementById('fuente').value

    document.cookie = `fondo=${fondo}; `
    document.cookie = `fuente=${fuente}; `
    document.cookie = `configurada=true;`

    // Recarga la página principal y cierra la ventana
    if (window.opener) {
        window.opener.location.reload()
    }
    window.close()
}

// Código que se ejecuta cuando la ventana emergente ha cargado
document.addEventListener("DOMContentLoaded", () => {
    let botonGuardar = document.getElementById('guardar')
    if (botonGuardar) {
        botonGuardar.addEventListener('click', crearCookies)
    }
});

/*LOCAL STORAGE*/

localStorage.setItem('alumno' + localStorage.length, alumnoSerialized);
localStorage.getItem(key)
localStorage.removeItem(key)
localStorage.clear()
localStorage.key(0)

const storedUserData = localStorage.getItem('user')

if (storedUserData) {
  const userData = JSON.parse(storedUserData)
  // You can use userData here...
} else {
  console.log('User data not found in local storage')
}