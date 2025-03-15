// Definimos la clase Producto
class Producto {
    constructor(id, nombre, categoria, precio, stock) {
      this.id = id;
      this.nombre = nombre;
      this.categoria = categoria;
      this.precio = precio;
      this.stock = stock;
    }
  
    // Método para calcular el precio con IVA
    calcularIva() {
      return (this.precio * 21) / 100 + this.precio;
    }
  
    // Método para actualizar el stock
    actualizarStock(cantidad) {
      this.stock += cantidad;
    }
  
    // Método para calcular el precio total de un producto en stock
    precioTotal() {
      return this.precio * this.stock;
    }
  }
  
  // Clase para gestionar productos con inyección de dependencias desde un JSON
  class GestionProductos {
    // Inyección de dependencias a través del constructor (JSON de productos)
    constructor(jsonProductos) {
      this.productos = jsonProductos.map(prod => 
        new Producto(prod.id, prod.nombre, prod.categoria, prod.precio, prod.stock)
      );
    }
  
    // Método para agregar un nuevo producto
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    // Método para eliminar un producto por su ID
    eliminarProductoPorId(id) {
      this.productos = this.productos.filter(prod => prod.id !== id);
    }
  
    // Método para modificar el precio de un producto
    modificarPrecio(id, nuevoPrecio) {
      const producto = this.productos.find(prod => prod.id === id);
      if (producto) {
        producto.precio = nuevoPrecio;
      }
    }
  
    // Método para agrupar productos por categoría
    agruparPorCategoria() {
      return this.productos.reduce((acumulador, producto) => {
        if (!acumulador[producto.categoria]) {
          acumulador[producto.categoria] = [];
        }
        acumulador[producto.categoria].push(producto);
        return acumulador;
      }, {});
    }
  
    // Método para calcular el precio total de todos los productos en stock
    calcularPrecioTotalStock() {
      return this.productos.reduce((total, producto) => total + producto.precioTotal(), 0);
    }
  
    // Método para buscar un producto por nombre
    buscarProductoPorNombre(nombre) {
      return this.productos.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
    }
  
    // Método para ordenar productos por precio
    ordenarPorPrecio() {
      return this.productos.sort((a, b) => a.precio - b.precio);
    }
  
    // Método para aplicar IVA a todos los productos
    aplicarIva() {
      this.productos.forEach(producto => {
        producto.ivaAplicado = producto.calcularIva();
      });
    }
  }
  
  // JSON de productos (simulando datos JSON)
  const productosJSON = [
    { "id": 1, "nombre": "Laptop Gamer", "categoria": "Electrónica", "precio": 1200, "stock": 5 },
    { "id": 2, "nombre": "Auriculares Inalámbricos", "categoria": "Audio", "precio": 150, "stock": 20 },
    { "id": 3, "nombre": "Silla Ergonómica", "categoria": "Muebles", "precio": 300, "stock": 10 },
    { "id": 4, "nombre": "Smartphone 5G", "categoria": "Electrónica", "precio": 800, "stock": 8 },
    { "id": 5, "nombre": "Teclado Mecánico RGB", "categoria": "Periféricos", "precio": 120, "stock": 15 }
  ];
  
  // Crear una instancia de GestionProductos con el JSON
  const gestionProductos = new GestionProductos(productosJSON);
  
  // Ejemplos de operaciones usando los métodos
  
  // 1. Aplicar IVA a todos los productos
  gestionProductos.aplicarIva();
  console.log(gestionProductos.productos);
  
  // 2. Agrupar productos por categoría
  console.log(gestionProductos.agruparPorCategoria());
  
  // 3. Calcular el precio total de todos los productos en stock
  console.log("Precio total de todos los productos en stock:", gestionProductos.calcularPrecioTotalStock());
  
  // 4. Buscar un producto por nombre
  console.log(gestionProductos.buscarProductoPorNombre("Teclado"));
  
  // 5. Ordenar los productos por precio
  console.log(gestionProductos.ordenarPorPrecio());
  
  // 6. Modificar el precio de un producto con id 3
  gestionProductos.modificarPrecio(3, 250);
  console.log(gestionProductos.productos);
  
  