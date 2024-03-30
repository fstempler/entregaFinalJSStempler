//Controla el loop en la aplicación. 
let trueOfalse = true
//Maneja cada orden. Toma el parámetro order para mostrar el alert correcto. 
function gracias(order){
    alert("Tu "+ order + " será entregada a la brevedad. \nGracias por tu pedido");     
};

//Funsión que recibe el producto elegído para después retornar el mensaje correcto. 
function getOrder(chooseProduct){
    let order; 
    switch (chooseProduct){        
        case 1: 
            order = "Torta Entera";
            gracias(order)
            break;
        case 2: 
            order = "Porción de Torta";
            gracias(order)
            break;
        case 3: 
            order = "Sandwich de miga";
            gracias(order)
            break;
        case 4: 
            order = "Pebete";
            gracias(order)
            break;
        case 5: 
            order = "Budín";
            gracias(order)
            break;            
        case 6: 
            order = "Ningúno";
            alert("Elegíste " + order + "! \nEsperamos tu próximo pedido pronto.")
            break;   
        default:
            alert("Ese número no es un producto en nuestro catálogo.")
            getOrder(parseInt(prompt("Ese número no es un producto en nuestro catálogo. \nPor favor elíge que producto quieres comprar: \n1 Torta Entera \n2 Porción de Torta \n3 Sandwich de miga \n4 Pebete \n5 Budín ")));     
            
    };
};




//Prompt para que el usuario ingrese su nombre
let name = prompt("Por favor, ingrese su nombre");
//Crea un loop hasta que el usuario ingrese un nombre correcto
while (trueOfalse) {
    if (name == ""){
        alert ("No ha ingresado un nombre, por favor ingrese un nombre");
        name = prompt("Por favor, ingrese su nombre correctamente");
    } else {
    let chooseProduct = parseInt(prompt("Hola "+ name + ", por favor elíge que producto quieres comprar: \n1 Torta Entera \n2 Porción de Torta \n3 Sandwich de miga \n4 Pebete \n5 Budín \n6 Nínguno"));
    trueOfalse = false; 
    getOrder(chooseProduct);
    }
} 


