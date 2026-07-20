// Total Users
let users = [];

if(localStorage.getItem("email")){
    users.push(localStorage.getItem("email"));
}

document.getElementById("totalUsers").innerHTML = users.length;

// Total Orders

let orders = JSON.parse(localStorage.getItem("orders")) || [];

document.getElementById("totalOrders").innerHTML = orders.length;