let orders = JSON.parse(localStorage.getItem("orders")) || [];
console.log(orders);

let table = document.getElementById("orderTable");

orders.forEach(function(order) {

    let row = `
    <tr>
        <td>${order.customer}</td>
        <td>${order.items}</td>
        <td>₹${order.total}</td>
        <td>${order.payment}</td>
        <td>${order.date}</td>
    </tr>
    `;

    table.innerHTML += row;

});
