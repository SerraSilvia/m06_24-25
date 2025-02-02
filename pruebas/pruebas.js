// Crear la sección con id "section1"
let section = document.createElement('section');
document.querySelector('body').appendChild(section);
section.id = 'section1';
section.style.backgroundColor = 'lightblue';

// Crear el h1 con id "titulo"
let titulo = document.createElement('h1');
titulo.id = 'titulo';
document.querySelector("#section1").appendChild(titulo);
titulo.textContent = 'Título que quiero';

// Crear el párrafo con id "resultado"
let p = document.createElement('p');
p.id = 'resultado';
document.querySelector("#section1").appendChild(p);
p.textContent = 'El texto de prueba que quiero';
p.textContent += '  añadir a la sección';




