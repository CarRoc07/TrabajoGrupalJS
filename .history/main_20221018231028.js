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

const cartButton = document.querySelector(".cart-button");
const overlay = document.querySelector(".overlay");
const cart = document.querySelector("._carrito");
/* carrito */

const openCart = () => {
    if (cart.style.display === "none") {
        cart.style.display = "block";
    } else {
        cart.style.display = "none";
    }
};


cartButton.addEventListener("click", toggleCart);