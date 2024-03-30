
//Se pide el nombre al usuario al ingresar
let trueOfalse = true

let name = prompt("Por favor, ingrese su nombre");

while (trueOfalse) {
    if (name == ""){
        alert ("No ha ingresado un nombre, por favor ingrese un nombre");
        name = prompt("Por favor, ingrese su nombre correctamente");
    } else {
    let chooseProduct = parseInt(prompt("Hola, "+ name + " Por favor elíge que producto quieres comprar: \n1 Torta Entera \n2 Porción de Torta \n3 Sandwich de miga \n4 Pebete \n5 Budín"));
    trueOfalse = false; 
    }
} 


