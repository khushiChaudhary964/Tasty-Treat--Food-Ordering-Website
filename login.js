function login(){

let email=document.getElementById("email").value.toLowerCase().trim();
let password=document.getElementById("password").value.trim();

let users=JSON.parse(localStorage.getItem("users")) || [];

let user=users.find(u=>u.email===email && u.password===password);

if(user){

localStorage.setItem("username",user.name);

alert("Login Successful");

window.location.href="index.html";

}

else{

alert("Invalid Email or Password");

}

}
