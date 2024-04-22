//Controla el loop en la aplicación. 
let trueOfalse = true
//array de productos
const products = [
       { 
        name: 'Torta Entera', 
        price: 5000.00, 
        stock: 25 
    },
    { 
        name: 'Porción Torta', 
        price: 2700.00, 
        stock: 45 
    },
    { 
        name: 'Sandwich de Miga', 
        price: 6000.00, 
        stock: 15 
    },
    { 
        name: 'Pebete', 
        price: 1000.00, 
        stock: 28 
    },
    { 
        name: 'Budín', 
        price: 4500.00, 
        stock: 30 
    },
]

//Array de pedidos
let order =[];

//Función para agregar la cantidad al pedido
function addQuantity(product, stock, price){    
    const quantity = parseInt(prompt("Seleccionaste "+ product + ". ¿Qué cantidad quieres llevar?"));    
    if (isNaN(quantity)){
        alert("Hay un error con tu pedido, vuelve a cargarlo. \nGracias")
        addQuantity(product, stock, price)
    } else if ( quantity > stock ){
        alert ("Lo sentimos pero esa cantidad no se encuentra en stock")
        addQuantity(product, stock, price);
    } else {
        order.push({product, quantity, price}); 
        console.log(order)
        createOrder(product, quantity, price);
    }
};

//Función para mostrar el pedido y elegir que producto remover
function showAndRemoveProduct() {
    
    if (order.length === 0) {
        alert("El pedido está vacío.");
        getOrder(chooseProduct);
    } else {
        let message = "Productos en el pedido:\n\n";
        // Mostrar cada producto junto con su número de referencia para seleccionar y remover
        order.forEach((item, index) => {
            message += `${index + 1}. Producto: ${item.product} - Cantidad: ${item.quantity}\n`;
        });
        // Pedir al usuario que elija un producto para eliminar
        let choice = parseInt(prompt(message + "\nIngrese el número de referencia del producto que desea eliminar:"));
        
        if (!isNaN(choice) && choice >= 1 && choice <= order.length) {
            
            let index = choice - 1;            
            removeProduct(index);
            createOrder();
        } else {
            alert("Opción inválida.");
        }
    }
}

//Función remover un producto
function removeProduct(index){    
    if(index >= 0 && index < order.length) {
        order.splice(index, 1);
        alert('Producto eliminado del pedido.')
    } else {
        alert('Producto inválido');
    }
    console.log(order)
}

//Función para manejar la orden
function selectOrder(option){
    let select; 
    switch(option){
        case 1:
            //Agrega otro proucto
            let chooseProduct = parseInt(prompt(`Por favor elíge que producto quieres comprar: 
                                                \n1 Torta Entera 
                                                \n2 Porción de Torta 
                                                \n3 Sandwich de miga 
                                                \n4 Pebete 
                                                \n5 Budín 
                                                \n6 Ninguno 
                                                \n7 Salir`));
            getOrder(chooseProduct);
            break;
        case 2:
            //Finaliza producto
            alert(`Gracias por tu compra`)                  
            break;    
        case 3:
            //Remueve un producto
            showAndRemoveProduct();
            selectOrder(option);
            break;
        case 4:
            //Cancela operación
            alert("Compra Cancelada")
            break;
        default:
            alert('Esa no es una opción válida')
            
    }
    return select;
}

//Función para crear la orden
function createOrder(product, quantity, price){            
    let totalOrder = 0;
    let orderSummary = '';
    order.forEach(item => {
        const totalProductPrice = item.price * item.quantity;
        totalOrder += totalProductPrice;
        orderSummary += `Producto: ${item.product}\nCantidad: ${item.quantity}\nPrecio: $${item.price}\nSubtotal: $${totalProductPrice}\n\n`;
    });
    alert(`Tu pedido es:\n\n${orderSummary}\nTotal: $${totalOrder}`);
    
    let option = (parseInt(prompt(`Ingresa: 
                                         \n1: Agregar otro producto.
                                         \n2: Finalizar compra.
                                         \n3: Remover un producto.
         `)));
    
         selectOrder(option)           
};








//Funsión que recibe el producto elegído para después retornar el mensaje correcto. 
function getOrder(chooseProduct){
    let product; 
    switch (chooseProduct){        
        case 1: 
            product = products[0].name;
            stock = products[0].stock;
            price = products[0].price;
            addQuantity(product,  stock, price);
            break;
        case 2: 
            product = products[1].name;
            stock = products[1].stock;
            price = products[1].price;
            addQuantity(product,  stock, price);
            break;
        case 3: 
            product = products[2].name;
            stock = products[2].stock;
            price = products[2].price;
            addQuantity(product,  stock, price);
            break;
        case 4: 
            product = products[3].name;
            stock = products[3].stock;
            price = products[3].price;
            addQuantity(product,  stock, price);
            break;
        case 5: 
            product = products[4].name;
            stock = products[4].stock;
            price = products[4].price;
            addQuantity(product, stock, price);
            break;            
        case 6: 
            product = "Ningúno";
            alert("Elegíste " + product + "! \nEsperamos tu próximo pedido pronto.")
            break;   
        case 7: 
            product = "Salir";
            alert("Gracias por elegirnos, te esperamos la próxima!")
            break;    
        default:
            alert("Ese producto no se encuentra en nuestro catálogo.")
            getOrder(parseInt(prompt("Ese no es un producto válido. \nPor favor elíge que producto quieres comprar: \n1 Torta Entera \n2 Porción de Torta \n3 Sandwich de miga \n4 Pebete \n5 Budín ")));     
            
    };
};




//Prompt para que el usuario ingrese su nombre
function getName() {
    let name = prompt("Por favor, ingrese su nombre");
    //Crea un loop hasta que el usuario ingrese un nombre correcto
while (trueOfalse) {
    if (name == ""){
        alert ("No ha ingresado un nombre, por favor ingrese un nombre");
        name = prompt("Por favor, ingrese su nombre correctamente");
    } else if (name === null){
        alert ("No ha ingresado un nombre, por favor ingrese un nombre");
        name = prompt("Por favor, ingrese su nombre correctamente");
    } 
    else {
    let chooseProduct = parseInt(prompt("Hola "+ name + ", por favor elíge que producto quieres comprar: \n1 Torta Entera \n2 Porción de Torta \n3 Sandwich de miga \n4 Pebete \n5 Budín \n6 Ninguno \n7 Salir"));
    trueOfalse = false; 
    getOrder(chooseProduct);
    }
} 
};



getName(name);
