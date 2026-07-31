console.log("Welcome to WAFE");
function searchProducts() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let products = document.getElementsByClassName("product");

    for(let i=0; i<products.length; i++){

        let text = products[i].innerText.toLowerCase();

        if(text.includes(input)){
            products[i].style.display="block";
        }
        else{
            products[i].style.display="none";
        }
    }
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    alert(name + " has been added to your cart!");

    localStorage.setItem("cart", JSON.stringify(cart));
}
window.onload = function () {

    if (document.getElementById("cart-items")) {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let cartItems = document.getElementById("cart-items");
        let totalPrice = document.getElementById("total-price");

        let total = 0;

        cart.forEach(function(item){

            cartItems.innerHTML += `
                <p>${item.name} - Rs. ${item.price}</p>
            `;

            total += item.price;

        });

        totalPrice.innerHTML = "Total: Rs. " + total;

    }

}
function checkoutWhatsApp() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello WAFE! I want to order:%0A%0A";

    let total = 0;

    cart.forEach(function(item) {
        message += "- " + item.name + " (Rs. " + item.price + ")%0A";
        total += item.price;
    });

    message += "%0ATotal: Rs. " + total;

    window.open(
        "https://wa.me/923121363455?text=" + message,
        "_blank"
    );
}
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWishlist(product){

    if(!wishlist.includes(product)){
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(product + " added to wishlist ❤️");
    }else{
        alert("Already in wishlist!");
    }

}