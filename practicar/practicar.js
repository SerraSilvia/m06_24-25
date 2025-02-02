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

function cuentaPalabras(frase){

    let fraseSplit = frase.split(" ");

    console.log(fraseSplit);
    document.querySelector("#problema6").textContent += fraseSplit.length;
    document.querySelector("#problema6").style.color = "blue";

}
cuentaPalabras("Hola mundo desde JavaScript");

function convierteNumero(lista){
    let listaNums = lista.toString();
    let listaJoin= listaNums.split("").join("-");

    document.querySelector("#problema7").textContent += listaJoin;
    document.querySelector("#problema7").style.color = "blue";
}
convierteNumero(12345);

function sonAnagramas(p1, p2){
    let p2reves= p2.split("").reverse().join("");
    /*
    if(p1 === p2reves){
        console.log("tue");
        document.querySelector("#problema8").textContent += "true";
        document.querySelector("#problema8").style.color = "blue";
    }else{
        console.log("false");
        document.querySelector("#problema8").textContent += "false";
        document.querySelector("#problema8").style.color = "blue";
    }
        */

    console.log("false");
    document.querySelector("#problema8").textContent += (p1 === p2reves);
    document.querySelector("#problema8").style.color = "blue";

}
sonAnagramas("roma", "amor");

function eliminaEspacios(frase){
    let fraseSplit = frase.split(" ").join("");
    document.querySelector("#problema9").textContent += fraseSplit;
    document.querySelector("#problema9").style.color = "blue";
}
eliminaEspacios("h o l a");

function capitalizaFrase(frase){
    let fraseSplit = frase.split(" ");
    let resultado="";
    for(let i in fraseSplit){
        fraseSplit[i] = fraseSplit[i].charAt(0).toUpperCase() + fraseSplit[i].slice(1);
    }

    resultado = fraseSplit.join(" ");
    
    document.querySelector("#problema10").textContent += resultado;
    document.querySelector("#problema10").style.color = "blue";
}

capitalizaFrase("javascript es divertido");

function filtraNumeros(frase){
    let fraseSplit = frase.split("");
    let resultado="";
    for(let i in fraseSplit){
        if(isNaN(fraseSplit[i])){
            resultado += fraseSplit[i];
        }
    }
    document.querySelector("#problema11").textContent += resultado;
    document.querySelector("#problema11").style.color = "blue";

}
filtraNumeros("c0d1g2o");

function conteoLetras(cadena){
        
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
        resultado += letra + ":" + contador;
      }
    }
  
    console.log(resultado);
    document.querySelector("#problema12").textContent += resultado;
    document.querySelector("#problema12").style.color = "blue";


}
conteoLetras("hola");

function tipoLetra(letra){
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    if(vocales.includes(letra)){
        document.querySelector("#problema13").textContent +="vocal" ;
        document.querySelector("#problema13").style.color = "blue";
    }else{
        document.querySelector("#problema13").textContent +="consontante" ;
        document.querySelector("#problema13").style.color = "blue";
    }

}

tipoLetra("a");

function separaFrutas(frutas){
    let frutasSplit = frutas.split(",");
    let frutasArray = [];

    for(let i in frutasSplit){ 
        frutasArray.push(frutasSplit[i]);
    } 
    console.log(frutasArray);
    document.querySelector("#problema14").textContent += frutasArray;
    document.querySelector("#problema14").style.color = "blue";

}

separaFrutas("manzana,pera,platano");

function validaCorreo(correo) {
    let correoSplit = correo.split("@");

    let resultadoTexto = "false";
    let colorTexto = "red";

    // Verificar que el correo tenga exactamente una parte local y un dominio
    if (correoSplit.length === 2) {
        let dominio = correoSplit[1];

        // Validar si termina en una extensión válida
        if (dominio.endsWith(".com") || dominio.endsWith(".net") || dominio.endsWith(".org")) {
            resultadoTexto = "true";
            colorTexto = "blue";
        }
    }

    console.log(resultadoTexto === "true" ? "true" : "false");
    document.querySelector("#problema15").textContent = resultadoTexto;
    document.querySelector("#problema15").style.color = colorTexto;
}

validaCorreo("test@example.com");

function agregaPunto(palabra){
    if(palabra.endsWith(".")){
        console.log(palabra);
        document.querySelector("#problema16").textContent += palabra;
        document.querySelector("#problema16").style.color = "blue";
    }else{
        console.log(palabra + ".");
        document.querySelector("#problema16").textContent += palabra + ".";
        document.querySelector("#problema16").style.color = "blue";
    }

}
agregaPunto("Hola");

function contieneJavaScript(frase){
    if(frase.includes("JavaScript")){
        console.log("true");
        document.querySelector("#problema17").textContent += "true";
        document.querySelector("#problema17").style.color = "blue";
    }else{
        console.log("false");
        document.querySelector("#problema17").textContent += "false";
        document.querySelector("#problema17").style.color = "blue";
    }
}

contieneJavaScript("Me gusta JavaScript");

function alternaMayusculas(frase){
    let fraseSplit = frase.split("");
    let resultado = "";
    for(let i in fraseSplit){
        if(i % 2 === 0){
            resultado += fraseSplit[i].toUpperCase();
        }else{
            resultado += fraseSplit[i];
        }
    }
    console.log(resultado);
    document.querySelector("#problema18").textContent += resultado;
    document.querySelector("#problema18").style.color = "blue";
}
alternaMayusculas("hola");

function cifradoCesar(palabra){
    let palabraSplit = palabra.split("");
    let resultado = "";

    for(let i in palabraSplit){
        let codigo = palabraSplit[i].charCodeAt(0);
        let nuevaLetra = String.fromCharCode(codigo + 3);
        resultado += nuevaLetra;
    }
    console.log(resultado);
    document.querySelector("#problema19").textContent += resultado;
    document.querySelector("#problema19").style.color = "blue";
}
cifradoCesar("abc");

function generaAcronimo(frase){ 
    let fraseSplit = frase.split(" ");
    let resultado = "";
    for(let i in fraseSplit){
        resultado += fraseSplit[i].charAt(0).toUpperCase();
    }
    console.log(resultado);
    document.querySelector("#problema20").textContent += resultado;
    document.querySelector("#problema20").style.color = "blue";
}
generaAcronimo("Java Script Object Notation");

function ordenaMenorToMayor(numero) {
    let numeroSplit = numero.toString().split("");
    
    // Convertir cada elemento a número y ordenar correctamente
    let resultado = numeroSplit.map(Number).sort((a, b) => a - b).join("");
    
    console.log(resultado);
    document.querySelector("#problema21").textContent = resultado;
    document.querySelector("#problema21").style.color = "blue";
}

ordenaMenorToMayor(139572468);
