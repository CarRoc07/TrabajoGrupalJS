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

// Carrito
const cartMenu = document.querySelector(".cart");
const overlay = document.querySelector(".overlay");
const cart = document.querySelector("._cart");
/* carrito */

const toggleCart = () => {
    cartMenu.classList.toggle("open-cart");

    overlay.classList.toggle("show-overlay");
};
cart.addEventListener("click", toggleCart);