function transformaVocales(cadena){

    for(let i in cadena){
        if(['a', 'e', 'i', 'o', 'u'].includes(cadena[i])){
            cadena = cadena.replace(cadena[i], cadena[i].toUpperCase());
    }
}

    console.log(cadena);
    document.querySelector("#problema1").textContent += cadena;
    document.querySelector("#problema1").style.color = "blue";
}

transformaVocales('hola mundo');

function invierteCadena(cadena){

   let cadenaReves = cadena.split("").reverse().join("");

    console.log(cadenaReves);
    document.querySelector("#problema2").textContent += cadenaReves;
    document.querySelector("#problema2").style.color = "blue";

}

invierteCadena("javascript");

function esPalindromo( cadena){
    let cadenaReves = cadena.split("").reverse().join("");
    if(cadena === cadenaReves){
        console.log("Es palindromo");
        document.querySelector("#problema3").textContent += "Es palindromo";
        document.querySelector("#problema3").style.color = "blue";
    }else{
        console.log("No es palindromo");
        document.querySelector("#problema3").textContent += "No es palindromo";
        document.querySelector("#problema3").style.color = "blue";
    }

}

esPalindromo("anilina");

function caracteresNoComunes(cadena1, cadena2){
    let cadena = "";
    for(let i in cadena1){
        if(!cadena2.includes(cadena1[i])){
            cadena += cadena1[i];
        }
    }
    for(let i in cadena2){
        if(!cadena1.includes(cadena2[i])){
            cadena += cadena2[i];
        }
    }

    console.log(cadena);
    document.querySelector("#problema4").textContent += cadena;
    document.querySelector("#problema4").style.color = "blue";
}

caracteresNoComunes("abc", "bcd");

function cuentaLetras(cadena){
    
    let resultado = "";

    for (let i = 0; i < cadena.length; i++) {
      const letra = cadena[i];
  
      // Contar ocurrencias de la letra si no está ya en el resultado
      if (!resultado.includes(letra + ':')) {
        let contador = 0;
        for (let j = 0; j < cadena.length; j++) {
          if (cadena[j] === letra) {
            contador++;
          }
        }
  
        if (resultado) resultado += ",";
        resultado += letra + ":" + "*".repeat(contador);
      }
    }
  
    console.log(resultado);
    document.querySelector("#problema5").textContent += resultado;
    document.querySelector("#problema5").style.color = "blue";
}
cuentaLetras("banana");
cuentaLetras("Bangkok");
cuentaLetras("Las Vegas");