function open_cart() {
    const cart = document.getElementById("cart");
    cart.style.display = "block";
}

function close_cart() {
    const cart = document.getElementById("cart");
    cart.style.display = "none";
}

function check_out() {
    window.location.href = "/checkout";
}

function add_to_cart(product_id) {
    const cart = document.getElementById("cart");
    const cart_items = document.getElementById("cart_items");
    const cart_item = document.createElement("div");
    cart_item.className = "cart_item";
    cart_item.id = "cart_item" + product_id;
    cart_item.innerHTML = document.getElementById("product" + product_id).innerHTML;
    cart_items.appendChild(cart_item);
    cart.style.display = "block";
}

function remove_item(product_id) {
    const cart_item = document.getElementById("cart_item" + product_id);
    cart_item.remove();
}