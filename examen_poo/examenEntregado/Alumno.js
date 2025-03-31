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

    constructor(nombre, apellidos, fechaNacimiento, email, ciclo,media) {
        this.nombre = nombre;
        this.apellidos = apellidos
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.ciclo = ciclo;
        this.notas = [];
        this.media= this.calcularMedia();
    }

    getCiclo() {
        return this.ciclo;
    }
    getApellidos(){
        return this.apellidos;
    }

    calcularMedia() {

        let alumnosDaw = JSONData.filter((alumno) => alumno.ciclo == "DAW");
        let alumnosDam = JSONData.filter((alumno) => alumno.ciclo == "DAM")

        JSONData.foreach(alumno => {
            if (alumnosDaw) {
                return alumno.media = alumno.notas * ponderacionesDAWe;
            }
            if (alumnosDam) {
                return alumno.media = alumno.notas * ponderacionesDAM;
            }
        })
    }

        /*calcularEdad(){
     const fechaActual= new Date();
     const [month, year] = [
         date.getMonth(),
         date.getFullYear(),
     ]
 
    }
     */
}

