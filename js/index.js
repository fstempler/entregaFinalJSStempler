//Inputs
let userName = document.getElementById('userName');
let userPassword = document.getElementById('userPassword');
//Botones
let loginBtn = document.getElementById('loginBtn');

let users = []; // Variable para almacenar los datos de usuarios cargados desde el JSON

// carga los datos desde user.json
async function loadUserData() {
    try {
        const response = await fetch('../data/users.json');
        if (!response.ok) {
            throw new Error('Users error ' + response.statusText);
        }
        users = await response.json();
    } catch (error) {
        console.error('users fetch error:', error);
    }
}


loadUserData();

function logIn(event) {
    event.preventDefault(); 

    let username = userName.value;
    let userpassword = userPassword.value;        
    
    for (const user of users) {
        if (user.user === username && user.password === userpassword) {
            Swal.fire({
                title: 'Welcome!',
                text: `Hello ${username}!`,
                icon: 'success'
            }).then(() => {
                location.href = "./Pages/select.html";      
            });
            localStorage.setItem("username", username); 
            localStorage.setItem("userpassword", userpassword); 
            return;
        }
    }    
    
    Swal.fire({
        title: 'Error!',
        text: 'User or password not valid',
        icon: 'error'
    }).then(() => {
        location.href = "./index.html";
    });
}

loginBtn.onclick = logIn;
