
//Data

const clientsList = [
    {"id": 1, 
    "name": "Client A", 
    "email": "clientA@example.com",
    "address": "Calle Falsa 1234",
    "tel": 1122334455
},
    {"id": 2, 
    "name": "Client B", 
    "email": "clientB@example.com",
    "address": "Calle Falsa2 1234",
    "tel": 1122334455
},
    {"id": 3, 
    "name": "Client C", 
    "email": "clientC@example.com",
    "address": "Calle Falsa 1234",
    "tel": 1122334455
},
    {"id": 4, 
    "name": "Client D", 
    "email": "clientD@example.com",
    "address": "Calle Falsa2 1234",
    "tel": 1122334455
}
]

const productsList = [
    {
        "id": 1,
        "name": "Torta Entera",
        "price": 3000,
        "stock": 50
    },
    {
        "id": 2,
        "name": "Porción de torta",
        "price": 2000,
        "stock": 80
    },
    {
        "id": 3,
        "name": "Sandwich de miga",
        "price": 3200,
        "stock": 75
    },
    {
        "id": 4,
        "name": "Bombones x 12",
        "price": 1300,
        "stock": 30
    },
    {
        "id": 5,
        "name": "Tiramisu",
        "price": 3000,
        "stock": 50
    }
]

let orders = []


//Sections
let mainContainer = document.getElementById('main__Container');
let selectionContainer = document.getElementById('selection__Container');

//Botones 
let buttons = document.querySelectorAll('.select__Button')
let sale = document.getElementById("saleBtn");
let clients = document.getElementById("clientsBtn" );
let products = document.getElementById('productsBtn');
let reports = document.getElementById('reportsBtn');

let goBackBtn = document.createElement("button")
goBackBtn.classList.add('button__Style');
goBackBtn.innerHTML=`<button class="goBack__Button" id="goBackBtn">
                        <i class="bi bi-backspace-fill select__ButtonIcon"></i>                                                        
                        Go Back
                    </button>`

//Funciones
function handleComingSoon(){
    console.log('Hiciste click en ${this.id}');
    selectionContainer.classList.add("noDisplay");   
    mainContainer.innerHTML=`<h1 class="comingSoon__Title">Coming Soon</h1>
                            <button class="select__Button" id="goBackBtn">
                                <i class="bi bi-backspace-fill select__ButtonIcon"></i>                                
                                <br>
                                Go Back
                            </button>`;  

    let goBack = document.getElementById('goBackBtn');

    goBack.onclick = () => {        
        console.log('Hiciste click en Go Back');
        location.reload();      
        }
}
//Función para crear ordenes

function createOrder() {
    let thisOrder = [];
    
    selectionContainer.classList.add("noDisplay");
    mainContainer.appendChild(goBackBtn);
    let goBack = document.getElementById('goBackBtn');
    goBack.onclick = () => {        
        console.log('Hiciste click en Go Back');
        location.reload();      
        }
    let selectClientTitle = document.createElement('h2');
    selectClientTitle.classList.add("selectClientTitle");
    selectClientTitle.textContent='Select a client:'; 
    mainContainer.appendChild(selectClientTitle)

    let select = document.createElement("select");
    select.classList.add("select__Client");    

    clientsList.forEach(client => {
        let option = document.createElement('option');
        option.value = client.name;
        option.textContent = client.name;
        select.appendChild(option);
    });   
    mainContainer.appendChild(select);   

    let totalAmountElement = document.createElement("p");
    totalAmountElement.id = "totalAmount";
    totalAmountElement.classList= "orderTotal";
    totalAmountElement.textContent = "$0.00";

    mainContainer.appendChild(totalAmountElement);

    for (const product of productsList) {        
        let li = document.createElement("li");
        li.classList.add("product__List");
        li.innerHTML = `
            <div class="products__Container">
                <strong>Name:</strong> ${product.name}<br>
                <strong>Price:</strong> $${product.price}.00<br>            
                <input placeholder="Qty" class="qty__Input">
                <button class="addBtn"><i class="bi bi-plus-circle-fill addIcon"></i></button>            
                <br>
                <p class="subtotal"></p>
            </div>
        `;

        mainContainer.appendChild(li);

        let addBtn = li.querySelector(".addBtn");
        let qtyInput = li.querySelector(".qty__Input");
        let subtotal = li.querySelector(".subtotal");

        addBtn.addEventListener("click", () => {
            let qty = parseInt(qtyInput.value);
            if (!isNaN(qty) && qty > 0) {
                let calcSubtotal = qty * product.price;
                subtotal.textContent = `$${calcSubtotal}.00`;
                thisOrder.push({'productId': product.id, 'name': product.name, 'quantity': qty, "price": product.price, "subtotal" : calcSubtotal} );
                
                // Recalculate the total and update the UI
                let total = thisOrder.reduce((acc, order) => acc + order.subtotal, 0);
                totalAmountElement.textContent = `$${total}.00`;

                console.log(thisOrder);
                console.log(total);
            } else {
                alert("Invalid quantity");
            }
        });       
    }
    let total = thisOrder.reduce((acc, order) => acc + order.subtotal, 0);
                totalAmountElement.textContent = `$${total}.00`;

                console.log(thisOrder);
                console.log(total);
    let totalSection = document.createElement("div");
    totalSection.classList.add("total__Section");
    totalSection.innerHTML = `
                                <button id="confirmOrderBtn" class="confirmBtn">Confirm Order</button>    
                                <h3>Total:</h3>
                            `;
    totalSection.appendChild(totalAmountElement);
    mainContainer.appendChild(totalSection);    

    confirmOrderBtn.addEventListener("click", () => {        
        orders.push({
            client: select.value,
            products: thisOrder.map(order => ({ productId: order.productId, name: order.name, quantity: order.quantity, price: order.price })),             
        });
        
        localStorage.setItem("orders", JSON.stringify(orders));
        
        thisOrder = [];
        
        totalAmountElement.textContent = "$0.00";
        
        console.log(orders);
    });
}


//Función para mostrar el listado de clientes
function showClients(){
    console.log('Show clients');
    console.log(buttons)
    selectionContainer.classList.add('noDisplay');
    console.log(clientsList)
    for (const client of clientsList) {
        let li = document.createElement("li");
        li.classList.add("client__List");
        li.innerHTML = `
            <strong>Name:</strong> ${client.name}<br>
            <strong>Email:</strong> ${client.email}<br>
            <strong>Address:</strong> ${client.address}<br>
            <strong>Telephone:</strong> ${client.tel}<br>
            <button>Profile</button>
            <button>Add Order</button>
        `;
        mainContainer.appendChild(li);
    }   
    mainContainer.appendChild(goBackBtn);
    let goBack = document.getElementById('goBackBtn');
    goBack.onclick = () => {        
        console.log('Hiciste click en Go Back');
        location.reload();      
        }
};

//Función para mostrar el listado de productos
function showProducts(){
    console.log('Show products');    
    selectionContainer.classList.add('noDisplay');
    console.log(productsList)
    for (const product of productsList) {
        let li = document.createElement("li");
        li.classList.add("product__List");
        li.innerHTML = `
            <strong>Name:</strong> ${product.name}<br>
            <strong>Price:</strong> $${product.price}.00<br>            
            <button>Edit</button>            
        `;
        mainContainer.appendChild(li);
    }   
    mainContainer.appendChild(goBackBtn);
    let goBack = document.getElementById('goBackBtn');
    goBack.onclick = () => {        
        console.log('Hiciste click en Go Back');
        location.reload();      
        } 
}
//Función para mostrar las ordenes
function showOrders() {
    selectionContainer.classList.add('noDisplay');
    mainContainer.appendChild(goBackBtn);
    let goBack = document.getElementById('goBackBtn');
    goBack.onclick = () => {        
        console.log('Hiciste click en Go Back');
        location.reload();      
    }

    const ordersString = localStorage.getItem("orders");
    console.log(ordersString)
    if (ordersString) {
        const orders = JSON.parse(ordersString);   
        console.log(orders)

        const ordersContainer = document.createElement("div"); 
        ordersContainer.id = "ordersContainer"; 
        ordersContainer.classList.add("orders__Container")
        mainContainer.appendChild(ordersContainer);

        orders.forEach((order, index) => {
            const orderElement = document.createElement("div");
            orderElement.classList.add("order");

            orderElement.innerHTML = `
                <h3>Order ${index + 1}</h3>
                <p><strong>Client:</strong> ${order.client}</p>
                <ul>
                    ${order.products.map(product => `<li>${product.name} - ${product.quantity}</li>`).join("")}
                </ul>
            `;
            ordersContainer.appendChild(orderElement);
        });
    } else {
        // If there are no orders in localStorage, display a message
        const ordersContainer = document.createElement("div"); // Create ordersContainer here
        ordersContainer.id = "ordersContainer"; // Set its id
        mainContainer.appendChild(ordersContainer); // Append it to the main container
        ordersContainer.innerHTML = "<p>No orders available.</p>";
    }
}




sale.onclick = createOrder;
clients.onclick = showClients;
products.onclick = showProducts;
reports.onclick = showOrders;