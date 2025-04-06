import { Alumno } from "./Alumno.js";

// Clase GestorAlumnos
export class GestorAlumnos {
    alumnos;

    constructor(){
        this.alumnos = [];
    }

    agregarAlumno(alumnoNuevo) {

        if(!this.alumnos.find(alumno => alumno.email == alumnoNuevo.email)){
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
        return alumnoBuscar ? alumnoBuscar : null;  // Retorna null si no encuentra el alumno, -1 es un true en un if
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

    mostrarAlumnosOrdenadosNombre() {
        const nombresSort = this.alumnos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        console.log(nombresSort);
        return nombresSort;
    }

    mostrarAlumnosOrdenadosMedia() {
        let mediaOrdenada = this.alumnos.sort((a, b) => b.media - a.media);
        console.log(mediaOrdenada);
        return mediaOrdenada;
    }

      listarAlumnos() {
        return this.alumnos;  // Retorna todos los alumnos como un array
    }
      

}
