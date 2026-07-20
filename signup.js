function signup(){

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.toLowerCase().trim();

let password=document.getElementById("password").value.trim();

if(name==""||email==""||password==""){

alert("Fill all details");

return;

}
let users = JSON.parse(localStorage.getItem("users")) || [];

let userExists = users.find(user => user.email === email);

if (userExists) {
    alert("Already Registered! Please Login.");
    window.location.href = "login.html";
    return;
}
users.push({
    name: name,
    email: email,
    password: password
});

localStorage.setItem("users", JSON.stringify(users));

alert("Account Created Successfully");

window.location.href="login.html";

}