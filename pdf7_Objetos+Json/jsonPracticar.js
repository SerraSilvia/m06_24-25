
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

let jsonData = JSON.parse(productos);
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

/*4- Filtrar y mostrar solo los productos con un precio superior a un importe dado
Ejemplo: Mostrar los productos cuyo precio sea mayor a 500.
Agregar un nuevo producto a la lista*/

const precioSup =  jsonData.filter((prod) => prod.precio>500 );
console.log(precioSup);

/*5 - Añadir un producto nuevo con id 6 (Monitor 4K, Electrónica, precio: 600, stock: 7).*/
jsonData.push({
  id: 6,
  nombre: "Monitor 4K",
  categoria: "Electrónica",
  precio: 600,
  stock: 7
});

console.log(jsonData);

//con objeto definido:
/*
const nuevoProducto = {
  id: 6,
  nombre: "Monitor 4K",
  categoria: "Electrónica",
  precio: 600,
  stock: 7
};

// Agregar el objeto al array
jsonData.push(nuevoProducto);

console.log(jsonData); */

/* 6-Eliminar un producto por su ID:
Eliminar el producto con id 2 (Auriculares Inalámbricos).*/
jsonData = jsonData.filter(prod => prod.id !== 2);
console.log(jsonData);

/*con .findIndex() */
/*
const index = jsonData.findIndex(prod => prod.id === 2);
if (index !== -1) {
  jsonData.splice(index, 1);
}

console.log(jsonData);
 */

/* 7- Ordenar los productos por precio de menor a mayor
Imprimir la lista ordenada por precio en consola.*/
jsonData.sort((a, b) => a.precio - b.precio);
console.log(jsonData);

/* 8- Buscar un producto por su nombre:
Encontrar el producto cuyo nombre es "Teclado Mecánico RGB".*/
const buscar = jsonData.find(prod => prod.nombre === "Teclado Mecánico RGB");
console.log(buscar);


/*Actualizar el stock de un producto:
9 - Reducir en 2 unidades el stock del producto con id 4 (Smartphone 5G).*/
jsonData.forEach((prod) => {
  if (prod.id === 4) {
    prod.stock = prod.stock - 2;
  }
});
console.log(jsonData);

/*10- Agrupar los productos por categoría:
Crear un objeto donde las claves sean las categorías y los valores sean arrays con los productos de cada categoría.*/
const productosPorCategoria = jsonData.reduce((acumulador, prod) => {
  // Si la categoría no existe en el acumulador, la inicializamos como un array vacío
  if (!acumulador[prod.categoria]) {
    acumulador[prod.categoria] = [];
  }
  
  // Añadimos el producto a su categoría correspondiente
  acumulador[prod.categoria].push(prod);

  return acumulador;
}, {});

console.log(productosPorCategoria);

let total = 0;
/* 11- Calcular el precio total de todos los productos en stock*/
jsonData.forEach((prod) => {
  total += prod.stock * prod.precio
});
console.log("total de todos los productos: " +total );

/*12- Calcular el precio con iva del producto en un atributo nuevo*/
jsonData.forEach(producto => {
  producto.ivaAplicado = (producto.precio*21/100) + producto.precio;
});
console.log(jsonData);

/*con map */
const productosConIva = jsonData.map(producto => {
  return {
    ...producto,  // Copia todas las propiedades del producto original
    ivaAplicado: producto.precio * 21 / 100 + producto.precio  // Calcula y agrega el atributo ivaAplicado
  };
});

console.log(productosConIva);
