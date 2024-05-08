//Data
let users = [
    {"id": 1, 
    "name": "Max", 
    "lastname": "Power",
    "user": "admin",
    "password": "admin1234",
    "email": "maxpower@test.com",    
    "tel": 1122334455
},
    {"id": 2, 
    "name": "Ray", 
    "lastname": "Cooper",
    "user": "admin2",
    "password": "admin5678",
    "email": "maxpower@test.com",    
    "tel": 1122334455
}
];

//Inputs
let userName = document.getElementById('userName');
let userPassword = document.getElementById('userPassword');
//Botones
let loginBtn = document.getElementById('loginBtn');

function logIn() {
    event.preventDefault(); 

    let username = userName.value;
    let userpassword = userPassword.value;        
    
    for (const user of users) {
        if (user.user === username && user.password === userpassword) {
            location.href = "./Pages/select.html";      
            alert(`Hello ${username}!`);
            localStorage.setItem("username", username); 
            localStorage.setItem("userpassword", userpassword); 
            return;
        }
    }    
    
    alert("User or password not valid");
    location.href = "./index.html";
}

loginBtn.onclick = logIn;

// function checkLocalStorageAndRedirect() {
    
//     if (localStorage.getItem("username") && localStorage.getItem("userpassword")) {
//         location.href = "./Pages/select.html";      
//     } else {
//         location.href = "./index.html";
//     }
// }


// window.onload = function() {
//     checkLocalStorageAndRedirect();
// };
