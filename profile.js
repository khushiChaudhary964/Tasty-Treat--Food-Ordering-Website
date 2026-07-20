let users = JSON.parse(localStorage.getItem("users")) || [];

let username = localStorage.getItem("username");

let currentUser = users.find(user => user.name === username);

if(currentUser){

    document.getElementById("userName").innerHTML = currentUser.name;

    document.getElementById("userEmail").innerHTML = currentUser.email;

}

function logout(){

    localStorage.removeItem("username");

    alert("Logged Out Successfully");

    window.location.href = "login.html";

}