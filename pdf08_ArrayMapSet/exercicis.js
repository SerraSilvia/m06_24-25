/*
Dado un array con las siguientes notas [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0]

Calcula la nota media
Obtén la primera nota superior a 5
Las notas son sobre 10, cambialas a sobre 20.
*/ 

function calcularNotas(){
    let notas = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0]
    let sumaNotas = notas.reduce((total,nota)  => total+nota, 0); 
    let notaMedia = sumaNotas/ notas.length;
    let notaSuperior5 = notas.find(nota=>nota>5);
    let notasSobre20 = notas.map(nota => nota*2);

    console.log(notaMedia.toFixed(2));
    console.log(notaSuperior5);
    console.log(notasSobre20);

}
calcularNotas();

function coches(){
    var arrCoches = [
        ["seat","Codoba",1997,10000],
        ["Kia","Sorento",1994,1000],
        ["seat","Todelo",2000,10000],
        ["Fiat","Bravo",2010,10200],
        ["Fiat","500",2010,10000],
        ["Mercedes","Calse B",2001,39000],  
        ["seat","Ibiza",1993,10100],
        ["Alfa Romeo","Julieta",2002,10000],
        ["Alfa Romeo","159",2002,10400],
        ["Mercedes","Calse C",2001,1000],  
        ["Alfa Romeo","147",1990,10500],
        ["Fiat","Punto",1990,999],
        ["Citroen","Saxo",1980,10300],
        ["Renault","Superc 5",1980,12000],
        ["BWM","M3",2020,1000],
        ["Kia","Picanto",1990,1000],
        ["Alfa Romeo","spider",1970,14500],
        ["Mercedes","Calse A",1994,60100],  
        ["Mercedes","Calse D",2011,21221]  
    ];

    /*Devuelve los vehículos de la marca que no sean ni 'Alfa Romeo' ni 'Kia' que tengan más de 20 años.*/
    let cochesDeMas20años = []
    arrCoches.forEach(coches => {
        if (coches[2] < 2004) {
            if(coches[0] !== 'Kia' && coches[0] !== 'Alfa Romeo'){
                cochesDeMas20años.push(coches);
            }
        }
    });

    console.log(cochesDeMas20años);

  //  Ordena el array ordenado por precio descendentemente.
  arrCoches.forEach(coches => {
    const precioOrden = coches[3].sort((a,b)=> a-b)
    console.log (precioOrden);
  });


}
coches();



function usarSet(){
    //Eliminar duplicados de un array utilizando un Set
    const numeros = [1, 2, 3, 4, 4, 5, 6, 6, 7];
    
    const numerosUnicos = set(numeros);
    console.log(numerosUnicos);

    const numerosUnicosFormatoArray = Array.from(nombresUnicos);
    console.log(numerosUnicosFormatoArray);
    

    //Comprobar si dos arrays tienen elementos en común utilizando un Set
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8];

    console.log(tienenElementosEnComun(array1, array2)); 

}
usarSet();

function notasModulos(){
    const modulos = ["m02", "m03", "m04", "m05", "m06", "m07", "m08", "FOL"]
    const alumnoNotas = [[8, 9, 4], [9, 10], [6, 8, 10], [4], [8, 4, 7], [], [7, 5, 9, 10],[10]]

    //Actualiza las notas de m07 a [7.5, 6]

    //Obten un SET de las claves.

}
notasModulos();


