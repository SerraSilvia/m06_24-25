class Personaje {
    nombre;
    nivel;
    puntosDeVida;

    constructor(nombre, nivel, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;

    }

    atacar() { }
    toString(){
        console.log("toString")
        return this.nombre
    }
    valueOf(){
        console.log("valueOf")
        return this.nivel
    }

}

// Subclase

class Guerrero extends Personaje {
    fuerza;

    constructor(nombre, nivel, puntosDeVida, fuerza = 10) {
        super(nombre, nivel, puntosDeVida);
        this.fuerza = fuerza
    }
    golpeEspada() { }

}

// Subclase
class Mago extends Personaje {
    mana;

    constructor(nombre, nivel, puntosDeVida, mana) {
        super(nombre, nivel, puntosDeVida);
        this.mana = mana;
    }
    lanzarHechizo() { }
}


const listaGuerreros = [
    new Guerrero("Groth", 1, 100),
    new Guerrero("Jayce", 10, 1000),
    new Guerrero("Erobos", 5, 500),
    new Guerrero("Masha", 8, 800),
    new Guerrero("Arges", 2, 200)
]

function ordenaGuerreros(listaGuerreros){
    //el sort coge el toString
    let guerrerosSorted = listaGuerreros.sort((a,b)=> b.nivel-a.nivel )

    return guerrerosSorted
}

console.log(ordenaGuerreros(listaGuerreros));
console.log(`Los personajes son: $listaGuerreros`)
console.log("Los personajes son"+ listaGuerreros)