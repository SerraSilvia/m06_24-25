const publicaciones = [
    {
        name: "Publicación 1",
        date: "2021-01-01",
        content: "Contenido de la publicación 1",
    },
    {
        name: "Publicación 2",
        date: "2021-01-02",
        content: "Contenido de la publicación 2",
    },
    {
        name: "Publicación 3",
        date: "2021-01-03",
        content: "Contenido de la publicación 3",
    }
];

function publicar() {
    const element = document.querySelector("#content");

    publicaciones.forEach(publicacion => {
       element.innerHTML += `
       <div class="publicacion">
           <h2>${publicacion.name}</h2>
           <p>${publicacion.date}</p>
           <p>${publicacion.content}</p>
       </div>
   `;
    });
}

publicar();