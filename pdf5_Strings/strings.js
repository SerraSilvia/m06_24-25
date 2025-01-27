function obtenStringEmpiezaConAs(string){

    let contiene = string.toUpperCase();

    if(contiene.startsWith("AS")){
        document.querySelector("#contieneAs").textContent += string + "\n";
        
    } else {
        string = 'AS' + string;
        document.querySelector("#contieneAs").textContent += string + "\n";
    }

    console.log(string);
    document.querySelector("#contieneAs").style.color = "blue";

}

obtenStringEmpiezaConAs('ASTerisco');
obtenStringEmpiezaConAs('TEroide');
obtenStringEmpiezaConAs('');