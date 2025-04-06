// Clase Alumno
const ponderacionesDAM = [0.3, 0.2, 0.3, 0.2]
const ponderacionesDAWe = [0.2, 0.4, 0.2, 0.2]

export class Alumno {
    nombre;
    apellidos;
    fechaNacimiento;
    email;  //new set()
    ciclo;
    notas;
    media;

    constructor(nombre, apellidos, fechaNacimiento, email, ciclo, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos
        this.fechaNacimiento = new Date(fechaNacimiento);
        this.email = email;
        this.ciclo = ciclo;
        this.notas = notas;
        this.media= this.calcularMedia();
    }

    calcularMedia() {
        let ponderaciones = this.ciclo === 'DAW' ? ponderacionesDAWe : ponderacionesDAM;
        return this.notas.reduce((total, nota, i)=> total + nota * ponderaciones[i], 0).toFixed(2)
    }

    calcularEdad(){
     const hoy= new Date();
     let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
     const mesDiferencia = hoy.getMonth() - this.fechaNacimiento.getMonth();
     if(mesDiferencia < 0 || mesDiferencia === 0 && hoy.getDate() < this.fechaNacimiento.getDate()){
        edad--;
     }
     return edad;
    }

    toString(){
        return `${this.nombre}  ${this.apellidos} media:[${this.media}]`
    }

    infoAlumno(){
           return `${this.nombre}  ${this.apellidos} | edad: ${this.calcularEdad()} | ciclo: ${this.ciclo} | media: ${this.calcularMedia()}`
    }
     
}

