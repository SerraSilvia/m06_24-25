import { Alumno } from "./Alumno.js";

// Clase GestorAlumnos
export class GestorAlumnos {
    alumnos;

    constructor(){
        this.alumnos = [];
    }

    agregarAlumno(alumnoNuevo) {

        if(this.alumnos.find(alumno => alumno.email == alumnoNuevo.email) == -1){
            this.alumnos.push(alumnoNuevo);            
        }

    }

    //agregar alumno bien hecho:

    /*agregarAlumno(alumnoNuevo) {

        if(this.buscarAlumnoMail(alumnoNuevo.email)){
            this.alumnos.push(alumnoNuevo);            
        }

    }*/

      // Devuelve un alumno por su nombre y apellidos.

    buscarAlumnoMail(email) {
        let alumnoBuscar = this.alumnos.find(alumno => alumno.email == email);
        return alumnoBuscar != -1 ? alumnoBuscar : null;  // Retorna null si no encuentra el alumno, -1 es un true en un if
    }

    buscarAlumnoNombreApellidos(nombre, apellidos) {
        for (let alumno of this.alumnos) {
            if (alumno.nombre === nombre && alumno.apellidos === apellidos) {
                return alumno;
            }
        }
        return null;  // Si no se encuentra, retorna null
    }
    
      // Borra un alumno del sistema.
    eliminarAlumno(email) {
     this.alumnos = this.alumnos.filter(alumno => alumno.email !== email);
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
