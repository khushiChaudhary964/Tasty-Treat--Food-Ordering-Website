let orders = JSON.parse(localStorage.getItem("orders")) || [];

let table = document.getElementById("orderTable");

orders.forEach(function(order){

    let row = `
    <tr>
        <td>${order.customer}</td>
        <td>${order.items}</td>
        <td>₹${order.grandTotal}</td>
        <td>${order.payment}</td>
        <td>${order.deliveryTime}</td>
        <td>${order.status}</td>
        <td>${order.date}</td>
    </tr>
    `;

    table.innerHTML += row;

});