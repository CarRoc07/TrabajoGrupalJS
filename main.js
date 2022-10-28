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

const showResults = document.querySelector("._results_container");
const categoryContainer = document.querySelector("._categorias_container");
let categoryContainerOpcion = document.querySelectorAll("._categorias_container_opcion");
let resultsTitle = document.querySelector("._results_title");
const btnOpen = document.querySelector("._carrito_btnOpen");
const btnClose = document.querySelector("._carrito_btnClose");
const btnClose2 = document.querySelector("._carrito_container_end_close");
const cart = document.querySelector("._carrito");
const overlay = document.querySelector(".overlay");
const comprar = document.querySelector(".comprar");



const openAndCloseCart = () => {
    cart.classList.toggle("open-cart");
    overlay.classList.toggle("show-overlay");
};

const closeOnScroll = () => {
    if (!cart.classList.contains("open-cart"))
        return;
    cart.classList.remove("open-cart")
    overlay.classList.remove("show-overlay")
};

btnOpen.addEventListener("click", openAndCloseCart);
btnClose.addEventListener("click", openAndCloseCart);
btnClose2.addEventListener("click", openAndCloseCart);
window.addEventListener("scroll", closeOnScroll);

// Renderizado cartas productos

const renderProduct = (product) => {


    const { id, name, precio, comentario, productImg, quantity } = product;

    return `
    <div class="_results_container_output">
        <img class="_recomendacion_container_pizza_img"  src=${productImg} alt=${name} />
        <div class="_results_container_output_1">
            <h4 class="_titulo_producto">${name}</h4>
            <p class="_descripcion_producto">${comentario}</p>
        </div>
      <div class="_results_container_output_2">
        <h5 class="_precio_producto">$ ${precio}</h5>
        <button class="btnAddProduct"
        data-id='${id}'
        data-name='${name}'
        data-precio='${precio}'
        data-img='${productImg}'>Agregar</button>
       </div>
    </div>   
    `;

};

// Funcion que renderiza seccion popular, Cuando carga la page o cuando clickeo populares

const renderPopular = (arr) => {
    arr.forEach((producto) => {
        if (producto.popular === true) {
            showResults.innerHTML += renderProduct(producto);
        }
    })
};

// Funcion para renderizar Error

const renderError = (msg) => {
    showResults.innerHTML = `<h2 class="msg_error">${msg}</h2>`
}

// Funcion que recibe tipo de producto y los renderiza

const renderFilteredProducts = (tipo) => {
    const productsList = _array_de_productos.filter(
        (producto) => producto.tipo === tipo
    );
    if (!productsList.length) {
        renderError(`No hay stock de ${tipo}`);
        return;
    }
    showResults.innerHTML = productsList.map(renderProduct).join("");
};

// Funcion para limpiar clase "active"

const quitClassActive = () => {
    for (let i = 0; i < categoryContainerOpcion.length; i++) {
        categoryContainerOpcion[i].classList.remove("active");
    }
}

// Funcion que manda a filtrar categoria de productos recibida

const renderProducts = (e) => {

    if (!e.target.parentNode.classList.contains("_categorias_container_opcion")) return;

    resultsTitle.innerText = "";
    showResults.innerHTML = "";
    quitClassActive();

    if (e.target.parentNode.id === "popular") {
        resultsTitle.innerText = "Los más populares";
        renderPopular(_array_de_productos);
        e.target.parentNode.classList.add("active");
        return;
    }

    resultsTitle.innerText = `${e.target.parentNode.id.toUpperCase()}`
    renderFilteredProducts(e.target.parentNode.id);
    e.target.parentNode.classList.add("active");

};

document.addEventListener("DOMcontentLoaded", renderPopular(_array_de_productos));
categoryContainer.addEventListener("click", renderProducts);
categoryContainer.addEventListener("click", ready);

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

//funcion boton agregar 
function ready() {
    var addToCartButtons = document.getElementsByClassName('btnAddProduct');

    for (let i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement;
    if (shopItem.getElementsByClassName('_titulo_producto')[0] == undefined) shopItem = button.parentElement.parentElement;


    var title = shopItem.getElementsByClassName('_titulo_producto')[0].innerText;
    var descripcion = shopItem.getElementsByClassName('_descripcion_producto')[0].innerText;
    var price = shopItem.getElementsByClassName('_precio_producto')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('_recomendacion_container_pizza_img')[0].src;

    addItemToCart(title, price, imageSrc, descripcion);
    updateQuantityBtnsCart()
}

//actualizar btnsAdd y btnsRemove
const updateQuantityBtnsCart = () => {
    let btnAdd = document.querySelectorAll(".btnAddProductCart");
    let removeBtn = document.querySelectorAll(".btnRemoveProductCart");

    btnAdd.forEach(button => button.addEventListener("click", addProductCart));
    removeBtn.forEach(button => button.addEventListener("click", removeProductCart));
    var cartItemContainer = document.getElementsByClassName('cart-row')[0]
    var cartRows = document.getElementsByClassName('_carrito_container_products_product')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cantidad')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    document.getElementsByClassName('cart-subtotal-price')[0].innerText = '$' + total
        //actualizamos el monto del carrito 
}

//funcion agregar producto al carrito
const addProductCart = (e) => {
        e.target.parentNode.children[1].value++;
        e.target.parentNode.children[0].classList.remove("disable");
        // actualizarCantidad()
        // var found = objetosEnCarritoLS.find(e => e.titulo == title);
        // found.cantidad = sumar
        // saveLocalStorage(objetosEnCarrito);
        updateQuantityBtnsCart()

    }
    //funcion remover producto del carrito
const removeProductCart = (e) => {
    if (e.target.parentNode.children[1].value == 1) {
        e.target.classList.add("disable");
        return;
    };
    e.target.classList.remove("disable");
    e.target.parentNode.children[1].value--;
    updateQuantityBtnsCart()
}
const actualizarCantidad = (title) => {
    var found = objetosEnCarritoLS.find(e => e.titulo == e.target.parentNode);
    found.cantidad = e.target.parentNode.children[1].value;
}


function addItemToCart(title, price, imageSrc, descripcion, cantidad) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')


    const modalAdd1 = document.querySelector(".modalAdd1");
    const modalAdd2 = document.querySelector(".modalAdd2");
    const removeClass1 = () => modalAdd1.classList.remove("showModal");
    const removeClass2 = () => modalAdd2.classList.remove("showModal");
    var cartItems = document.getElementsByClassName('_carrito_container_products')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    var cartItemCuantity = cartItems.getElementsByClassName('cantidad');

    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {

            // Funcion que suma cantidad al elegir el mismo elemento
            const actualCuantity = cartItemCuantity[i].getAttribute('value');
            const sumar = Number(actualCuantity) + 1;
            cartItemCuantity[i].setAttribute(`value`, `${sumar}`);
            modalAdd2.classList.add("showModal");
            modalAdd2.innerHTML = `Se sumó otro <span> ${title} </span> al carrito de compras`
            var found = objetosEnCarritoLS.find(e => e.titulo == title);
            found.cantidad = sumar
            saveLocalStorage(objetosEnCarrito);


            // const modif = (found) => { found.defineProperty(this, "cantidad", "3") }
            // modif(found)
            setTimeout(removeClass2, 2000);
            return;
        }
    }

    var cartRowContents = `
    <div class="_carrito_container_products_product">
                        <img src="${imageSrc}" alt="Pizza recomendada 1" class="_recomendacion_container_pizza_img">
                        <div>
                            <h5  class="cart-item-title">${title}</h5>
                            <p>${descripcion}</p>
                            <h4 class="cart-price">${price}</h4>
                        </div>
                        <div class="_carrito_container_btns">
                            <button class="btnRemoveProductCart disable">-</button>
                            <input type="number" class="cantidad" value=1>
                            <button class="btnAddProductCart">+</button>
                        </div>
                    </div>
        `
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    crearObjeto(title, price, imageSrc, descripcion, cantidad);
    saveLocalStorage(objetosEnCarrito);
    objetosEnCarritoLS = objetosEnCarrito


    // objetosEnCarritoLS.forEach(e => mostrarLS(e))

    modalAdd1.classList.add("showModal");
    modalAdd1.innerHTML = `Se agregó un <span> ${title} </span> al carrito de compras`;


    updateQuantityBtnsCart();

    setTimeout(removeClass1, 2000);
};
// Función crear array de objetos en carrito
var objetosEnCarrito = [];

function crearObjeto(title, price, imageSrc, descripcion) {
    var objeto = {
        titulo: title,
        precio: price,
        imagen: imageSrc,
        descripction: descripcion,
        cantidad: 1
    }
    objetosEnCarrito[objetosEnCarrito.length] = objeto;
}

// Ese array de objetos en el carrito  se guarda en el LS
const saveLocalStorage = (objetosEnCarrito) => localStorage.setItem('objetosEnCarritoLS', JSON.stringify(objetosEnCarrito));
// Recupero el array del LS para mostrar el carrido en el init()
let objetosEnCarritoLS = JSON.parse(localStorage.getItem('objetosEnCarritoLS'));
// Muestro los objetos de LS en el carrito
const mostrarLS = (e) => {
    const title = e.titulo
    const price = e.precio
    const imageSrc = e.imagen
    const descripcion = e.description
    const cantidad = Number(e.cantidad)
    var cartItems = document.getElementsByClassName('_carrito_container_products')[0];
    var cartRow = document.createElement('div')
    cartItems.append(cartRow);
    cartRow.classList.add('cart-row')
    var cartRowContents = `
    <div class="_carrito_container_products_product">
                        <img src="${imageSrc}" alt="Pizza recomendada 1" class="_recomendacion_container_pizza_img">
                        <div>
                            <h5  class="cart-item-title">${title}</h5>
                            <p>${descripcion}</p>
                            <h4 class="cart-price">${price}</h4>
                        </div>
                        <div class="_carrito_container_btns">
                            <button class="btnRemoveProductCart disable">-</button>
                            <input type="number" class="cantidad" value=${cantidad}>
                            <button class="btnAddProductCart">+</button>
                        </div>
                    </div>
        `
    cartRow.innerHTML = cartRowContents;


}


let compras = () => {
    const removeClass3 = () => modalAdd3.classList.remove("showModal");
    const modalAdd3 = document.querySelector(".modalAdd3");

    alert("¿Desea confirmar la compra?")
    objetosEnCarrito = []
    objetosEnCarritoLS = objetosEnCarrito
    saveLocalStorage(objetosEnCarrito);
    const products = document.getElementsByClassName('_carrito_container_products')
    products[0].innerHTML = ""
    updateQuantityBtnsCart()

    modalAdd3.classList.add("showModal");
    modalAdd3.innerHTML = `Compra realizada exitosamente`;
    setTimeout(removeClass3, 2000);


}
comprar.addEventListener("click", compras);

const init = () => {
    objetosEnCarritoLS.forEach(e => mostrarLS(e))
    objetosEnCarrito = objetosEnCarritoLS;
    updateQuantityBtnsCart()
}
init()