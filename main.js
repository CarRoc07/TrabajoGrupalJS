//const _navbar
//const _cart
//const _btn_mas
//const _btn_menos
//const _btn_comprar
//const _cerrar_cart
//const _number_cart
//const _ventana_cart
//const _btn_categorias
//const _btn_agregar
//const _cards_container

const popularBtn = document.getElementById("_popular_category");
const pizzaBtn = document.getElementById("_pizza_category");
const burgerBtn = document.getElementById("_burger_category");
const friesBtn = document.getElementById("_fries_category");
const burritoBtn = document.getElementById("_burrito_category");
const tacoBtn = document.getElementById("_taco_category");
const smoothieBtn = document.getElementById("_smoothie_category");

// Carrito

const btnOpen = document.querySelector("._carrito_btnOpen");
btnClose = document.querySelector("._carrito_btnClose");
btnClose2 = document.querySelector("._carrito_container_end_close");
cart = document.querySelector("._carrito");
overlay = document.querySelector(".overlay");

const openAndCloseCart = () => {
    cart.classList.toggle("open-cart");
    overlay.classList.toggle("show-overlay");
};


btnOpen.addEventListener("click", openAndCloseCart);
btnClose.addEventListener("click", openAndCloseCart);
btnClose2.addEventListener("click", openAndCloseCart);