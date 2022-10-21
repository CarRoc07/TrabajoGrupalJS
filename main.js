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
btnClose = document.querySelector("._carrito_btnClose");
btnClose2 = document.querySelector("._carrito_container_end_close");
cart = document.querySelector("._carrito");
overlay = document.querySelector(".overlay");

const openAndCloseCart = () => {
    cart.classList.toggle("open-cart");
    overlay.classList.toggle("show-overlay");
};

const closeOnScroll = () =>{
    if (!cart.classList.contains("open-cart")
    )
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

    const {id, name, precio, comentario, productImg} = product;

    return `
    <div class="_results_container_output">
        <img src=${productImg} alt=${name} />
        <div class="_results_container_output_1">
            <h4>${name}</h4>
            <p>${comentario}</p>
        </div>
      <div class="_results_container_output_2">
        <h5>$ ${precio}</h5>
        <button class="btnAdd"
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
    arr.forEach( (producto) => {
        if(producto.popular === true){
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
    const productsList =  _array_de_productos.filter(
        (producto) => producto.tipo === tipo
    );
    if(!productsList.length){
        renderError(`No hay stock de ${tipo}`);
        return;
    }
    showResults.innerHTML = productsList.map(renderProduct).join("");
};

// Funcion para limpiar clase "active"

const quitClassActive = () => {
    for(let i = 0; i < categoryContainerOpcion.length; i++){
        categoryContainerOpcion[i].classList.remove("active");
    }
}

// Funcion que manda a filtrar categoria de productos recibida

const renderProducts = (e) => {

    if(!e.target.parentNode.classList.contains("_categorias_container_opcion")) return;

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
categoryContainer.addEventListener("click", renderProducts)



