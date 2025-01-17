function cambiaContenido() {

    let titulo = document.getElementsByTagName("h1")[0];
    titulo.textContent = "Título actualizado";

    let parrafo = document.getElementsByTagName("p")[0];
    parrafo.textContent = "Texto actualizado";

}

cambiaContenido();

function cambiaImagen(){
    let imagen = document.getElementById("descripcion");
    imagen.src = "gato-173700-1024x576.jpeg";

    let parrafoImg = document.getElementById("descripcion");
    parrafoImg.textContent = "Imagen actualizada";
}

cambiaImagen();

function anadeElementos(){
    let nuevoP = document.getElementById("contenedor");
    

}


