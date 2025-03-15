
const productos = `[
      {
        "id": 1,
        "nombre": "Laptop Gamer",
        "categoria": "Electrónica",
        "precio": 1200,
        "stock": 5
      },
      {
        "id": 2,
        "nombre": "Auriculares Inalámbricos",
        "categoria": "Audio",
        "precio": 150,
        "stock": 20
      },
      {
        "id": 3,
        "nombre": "Silla Ergonómica",
        "categoria": "Muebles",
        "precio": 300,
        "stock": 10
      },
      {
        "id": 4,
        "nombre": "Smartphone 5G",
        "categoria": "Electrónica",
        "precio": 800,
        "stock": 8
      },
      {
        "id": 5,
        "nombre": "Teclado Mecánico RGB",
        "categoria": "Periféricos",
        "precio": 120,
        "stock": 15
      }
    ]`;
console.log(typeof productos);

const jsonData = JSON.parse(productos);
console.log(typeof jsonData);


/*Ejercicios de Manipulación de JSON con JavaScript:*/

/* 1-Añadir un nuevo atributo a todos los productos*/
jsonData.forEach(producto => {
    producto.iva = 21;
});

console.log(jsonData);


/*2 -Agrega un atributo descuento con un valor predeterminado de 0.*/
jsonData.forEach(producto => {
    producto.descuento = 0;
});

console.log(jsonData);

/* 3 - Modificar el precio de un producto específico:
Cambia el precio del producto con id 3 (Silla Ergonómica) a 250. */

jsonData.forEach((prod) => {
  if (prod.id === 3) {
    prod.precio = 250;
  }
});

console.log(jsonData);

/* Filtrar y mostrar solo los productos con un precio superior a un importe dado



Ejemplo: Mostrar los productos cuyo precio sea mayor a 500.
Agregar un nuevo producto a la lista

Añadir un producto nuevo con id 6 (Monitor 4K, Electrónica, precio: 600, stock: 7).
Eliminar un producto por su ID

Eliminar el producto con id 2 (Auriculares Inalámbricos).
Ordenar los productos por precio de menor a mayor

Imprimir la lista ordenada por precio en consola.
Buscar un producto por su nombre

Encontrar el producto cuyo nombre es "Teclado Mecánico RGB".
Actualizar el stock de un producto

Reducir en 2 unidades el stock del producto con id 4 (Smartphone 5G).
Agrupar los productos por categoría

Crear un objeto donde las claves sean las categorías y los valores sean arrays con los productos de cada categoría.
Calcular el precio total de todos los productos en stock

Multiplicar el precio por el stock de cada producto y sumar los valores totales.*/ 