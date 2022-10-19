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

var x = document.getElementsByClassName("._carrito");
console.log(x)
if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}