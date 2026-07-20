let cart = [];
let total = 0;

// Add item to cart
function addToCart(itemName, price){

    let found = cart.find(item => item.name === itemName);

    if(found){
        found.quantity++;
    }else{
        cart.push({
            name: itemName,
            price: price,
            quantity: 1
        });
    }

    displayCart();
}

// Display cart
function displayCart(){

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML="";

    total = 0;

    cart.forEach(function(item,index){

        total += item.price * item.quantity;

        let li=document.createElement("li");

        li.innerHTML=`
        ${item.name}
        ₹${item.price}

        <button onclick="decreaseQuantity(${index})">-</button>

        ${item.quantity}

        <button onclick="increaseQuantity(${index})">+</button>
        `;

        cartItems.appendChild(li);

    });

    document.getElementById("total").innerText=total;

}

// Place Order

function searchFood(){

    let input = document.getElementById("searchBox").value.toLowerCase();

    let foods = document.getElementsByClassName("food-card");

    for(let i=0;i<foods.length;i++){

        let name = foods[i].getElementsByTagName("h2")[0];

        if(name.innerHTML.toLowerCase().indexOf(input)>-1){

            foods[i].style.display="block";

        }

        else{

            foods[i].style.display="none";

        }

    }

}
function filterFood(category){

    let foods = document.getElementsByClassName("food-card");

    for(let i=0;i<foods.length;i++){

        let foodCategory = foods[i].getAttribute("data-category");

        if(category=="all" || foodCategory==category){

            foods[i].style.display="block";

        }

        else{

            foods[i].style.display="none";

        }

    }

}
function increaseQuantity(index){

    cart[index].quantity++;

    displayCart();

}

function decreaseQuantity(index){

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    displayCart();

}
function placeOrder(){

    let name=document.getElementById("customerName").value;

    let mobile=document.getElementById("mobile").value;

    let address=document.getElementById("address").value;

    let payment=document.getElementById("payment").value;

    if(name=="" || mobile=="" || address==""){


        alert("Please Fill All Details");

        return;

    }

    if(cart.length==0){

        alert("Cart is Empty");

        return;

    }
    let deliveryCharge = 40;
    let gst = Math.round(total * 0.05);
    let grandTotal = total + deliveryCharge + gst;
    let deliveryTime = "30-40 Minutes";
    let orderStatus = "Preparing 🍳";
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let order = {

    customer: localStorage.getItem("username"),

    items: cart.map(item => item.name).join(", "),

    total: total,

    deliveryCharge: deliveryCharge,

    gst: gst,

    grandTotal: grandTotal,

    deliveryTime: deliveryTime,

    status: orderStatus,

    payment: payment,

    date: new Date().toLocaleString()

};

orders.push(order);

localStorage.setItem("orders", JSON.stringify(orders));

    alert(
"🎉 Order Placed Successfully!\n\n"+
"Customer : " + name +
"\nPayment : " + payment +
"\nFood Total : ₹" + total +
"\nDelivery Charge : ₹" + deliveryCharge +
"\nGST : ₹" + gst +
"\nGrand Total : ₹" + grandTotal +
"\nEstimated Delivery : " + deliveryTime +
"\nOrder Status : " + orderStatus
);

    cart=[];

    total=0;

    displayCart();

    document.getElementById("customerName").value="";

    document.getElementById("mobile").value="";

    document.getElementById("address").value="";

}
function favoriteFood(){

    alert("Added to Favorites ❤️");

}
function currentDate(){

    let today=new Date();

    return today.toLocaleDateString();

}
let user = localStorage.getItem("username");

if(user){

    document.getElementById("welcomeUser").innerHTML =
    "<br>Welcome, " + user;

}
function clearCart(){

    if(cart.length==0){

        alert("Cart is already empty!");

        return;

    }

    cart=[];

    total=0;

    displayCart();

    alert("Cart Cleared Successfully!");

}
let selectedFood = "";
let selectedPrice = 0;

function openPopup(name, price, image, description){

    selectedFood = name;
    selectedPrice = price;

    document.getElementById("popup").style.display = "block";

    document.getElementById("popupImage").src = image;

    document.getElementById("popupTitle").innerHTML = name;

    document.getElementById("popupPrice").innerHTML =
    "💰 Price : ₹" + price;

    document.getElementById("popupDescription").innerHTML =
    description + "<br><br>⭐ Rating : 4.8/5<br>🚚 Delivery : 30-40 Minutes";

}

function closePopup(){

    document.getElementById("popup").style.display = "none";

}

function addPopupToCart(){

    addToCart(selectedFood, selectedPrice);

    closePopup();

    alert("✅ Added to Cart Successfully");

}
function test(){
    alert("JavaScript Working");
}