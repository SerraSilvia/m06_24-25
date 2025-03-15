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
  
  // Clase para gestionar productos con inyección de dependencias
  class GestionProductos {
    // Inyección de dependencias a través del constructor
    constructor(productos) {
      this.productos = productos;  // Array de productos que se pasa como dependencia
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
  
  // Creamos los productos con la clase Producto
  const producto1 = new Producto(1, "Laptop Gamer", "Electrónica", 1200, 5);
  const producto2 = new Producto(2, "Auriculares Inalámbricos", "Audio", 150, 20);
  const producto3 = new Producto(3, "Silla Ergonómica", "Muebles", 300, 10);
  const producto4 = new Producto(4, "Smartphone 5G", "Electrónica", 800, 8);
  const producto5 = new Producto(5, "Teclado Mecánico RGB", "Periféricos", 120, 15);
  
  // Creamos una instancia de GestionProductos con los productos como dependencia
  const gestionProductos = new GestionProductos([producto1, producto2, producto3, producto4, producto5]);
  
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
  
  // 7. Eliminar un producto por id
  gestionProductos.eliminarProductoPorId(2);
  console.log(gestionProductos.productos);
  
  // 8. Añadir un nuevo producto
  const productoNuevo = new Producto(6, "Monitor 4K", "Electrónica", 600, 7);
  gestionProductos.agregarProducto(productoNuevo);
  console.log(gestionProductos.productos);
  