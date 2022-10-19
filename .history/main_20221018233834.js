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

const btnOpen = document.querySelector("._carrito_btnOpen");
const btnClose = document.querySelector("._carrito_btnClose");
const cart = document.querySelector("._carrito");
/* carrito */

const openAndCloseCart = () => {
    cart.classList.toggle("open-cart");
};


btnOpen.addEventListener("click", openAndCloseCart);
btnClose.addEventListener("click", openAndCloseCart);