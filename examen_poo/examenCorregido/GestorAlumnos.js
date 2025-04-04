import { Alumno } from "./Alumno.js";

// Clase GestorAlumnos
export class GestorAlumnos {
    alumnos;

    constructor(){
        this.alumnos = new Map();
    }

    agregarAlumno(alumno) {
        this.alumnos.set(alumno.email, alumno);
    }

      // Devuelve un alumno por su nombre y apellidos.


    buscarAlumnoMail(email) {
        let alumnoBuscar = this.alumnos.get(email);
        return alumnoBuscar ? alumnoBuscar : null;  // Retorna null si no encuentra el alumno
    }

    buscarAlumnoNombreApellidos(nombre, apellidos) {
        for (let alumno of this.alumnos.values()) {
            if (alumno.nombre === nombre && alumno.apellidos === apellidos) {
                return alumno;
            }
        }
        return null;  // Si no se encuentra, retorna null
    }
    

      // Borra un alumno del sistema.
    eliminarAlumno(email) {
        let alumnoBuscar = this.alumnos.get(email);

        if (alumnoBuscar) {
            this.alumnos.delete(email);  // Eliminamos el alumno usando el email como clave
            console.log(`Alumno con email ${email} eliminado correctamente.`);
        } else {
            console.log("Usuario no existente.");
        }
    }

    mostrarAlumnosOrdenados() {
        // Convertimos el Map a un array para ordenarlos
        let mediaOrdenada = Array.from(this.alumnos.values()).sort((a, b) => b.media - a.media);
        console.log(mediaOrdenada);
        return mediaOrdenada;
    }

      listarAlumnos() {
        return Array.from(this.alumnos.values());  // Retorna todos los alumnos como un array
    }
      

}
