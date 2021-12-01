console.log("cart: initialising...")
const cart = [];
console.log("cart: initialised!")

function cartPush(item){
cart.push(item);
cart.push("<br>");
console.log(cart);
document.getElementById("cartList").innerHTML = cart.join(' ');
};

function cartClear(){
console.log("clearing cart");
cart.splice(0, cart.length);
console.log(cart);
document.getElementById("cartList").innerHTML = cart.join(' ');
}

