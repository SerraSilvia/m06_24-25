import { Alumno } from "./Alumno.js";
// Clase GestorAlumnos
export class GestorAlumnos {
    alumnos;

    constructor(){
        this.alumnos=[];
    }

    //Añade un alumno a la estructura.
    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
      }

      // Devuelve un alumno por su nombre y apellidos.
      buscarAlumno(email) {
        let alumnoBuscar = this.alumnos.find((alumno) => alumno.email == email);
        return alumnoBuscar;
      }

      // Borra un alumno del sistema.
    eliminarAlumno(alumno){
        let alumnoBuscar = this.alumnos.find((alumno) => alumno.email == email);

        if (alumnoBuscar > 0) {
            this.alumnos.delete(alumno);
        }else{
            console.log("Usuario no existente, no se puede borrar")
        }   

    }
    // Devuelve los alumnos ordenados por su media.
    mostrarAlumnosOrdenados(alumno){
        let mediaOrdenada = alumnos.sort((a,b)=> b.alumno.media - a.alumno.media);
        console.log(mediaOrdenada);
        return mediaOrdenada;
    }

    listarAlumnos(alumno) {  // Devuelve los alumnos ordenados por el nombreCompleto optativo filtrar Daw/Dam
        return this.alumnos;
      }
      

}
