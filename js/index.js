//Homepage Handle

//Select Handle

//Sections
let mainContainer = document.getElementById('main__Container');
let selectionContainer = document.getElementById('selection__Container');

//Botones 
let sale = document.getElementById("saleBtn");
let clients = document.getElementById("clientsBtn" );
let products = document.getElementById('productsBtn');
let reports = document.getElementById('reportsBtn');


function handleSelectionBtns(){
    console.log('Hiciste click en ${this.id}');
    selectionContainer.classList.add("noDisplay");   
    mainContainer.innerHTML=`<button class="select__Button" id="goBackBtn">
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

sale.onclick = handleSelectionBtns;
clients.onclick = handleSelectionBtns;
products.onclick = handleSelectionBtns;
reports.onclick = handleSelectionBtns;