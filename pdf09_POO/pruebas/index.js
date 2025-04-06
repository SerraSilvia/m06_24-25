import { GestorProducto } from "GestorProductos.js";
import { Producto } from "Producto.js";

const productosJSON = `[
    {
        "id": 1,
        "nombre": "Camiseta Deportiva",
        "categoria": "Ropa",
        "referencia": "RD001",
        "IVA": 21,
        "stock": 50,
        "precio": 19.99
    },
    {
        "id": 2,
        "nombre": "Zapatillas Running",
        "categoria": "Calzado",
        "referencia": "CZ002",
        "IVA": 21,
        "stock": 30,
        "precio": 59.99
    },
    {
        "id": 3,
        "nombre": "Mochila Escolar",
        "categoria": "Accesorios",
        "referencia": "AE003",
        "IVA": 21,
        "stock": 20,
        "precio": 34.50
    },
    {
        "id": 4,
        "nombre": "Portátil 15 pulgadas",
        "categoria": "Electrónica",
        "referencia": "EL004",
        "IVA": 21,
        "stock": 15,
        "precio": 799.00
    },
    {
        "id": 5,
        "nombre": "Smartphone 128GB",
        "categoria": "Electrónica",
        "referencia": "EL005",
        "IVA": 21,
        "stock": 25,
        "precio": 699.99
    },
    {
        "id": 6,
        "nombre": "Libro: Aprender JavaScript",
        "categoria": "Libros",
        "referencia": "LB006",
        "IVA": 4,
        "stock": 40,
        "precio": 29.95
    },
    {
        "id": 7,
        "nombre": "Silla de Oficina Ergonómica",
        "categoria": "Muebles",
        "referencia": "MB007",
        "IVA": 21,
        "stock": 10,
        "precio": 149.99
    },
    {
        "id": 8,
        "nombre": "Cafetera Automática",
        "categoria": "Electrodomésticos",
        "referencia": "ED008",
        "IVA": 21,
        "stock": 12,
        "precio": 89.00
    },
    {
        "id": 9,
        "nombre": "Auriculares Bluetooth",
        "categoria": "Electrónica",
        "referencia": "EL009",
        "IVA": 21,
        "stock": 35,
        "precio": 49.99
    },
    {
        "id": 10,
        "nombre": "Mesa de Comedor",
        "categoria": "Muebles",
        "referencia": "MB010",
        "IVA": 21,
        "stock": 5,
        "precio": 299.00
    }
]`;
