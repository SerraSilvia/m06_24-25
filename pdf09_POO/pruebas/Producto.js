// Clase Producto

export class Producto {
    id;
    nombre;
    categoria;
    referencia = new Set();
    IVA;
    stock;
    precio;

    constructor(id, nombre, categoria, referencia, IVA, stock, precio) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.referencia = new Set(referencia);
        this.IVA = IVA;
        this.stock = stock;
        this.precio = precio;
    }

    toString(){
        return `${this.nombre}  ${this.apellidos}`
    }

    infoAlumno(){
           return `${this.nombre}  ${this.apellidos} | edad: ${this.calcularEdad()} | ciclo: ${this.getCiclo()} | media: ${this.calcularMedia()}`
    }
     

}

