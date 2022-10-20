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

const results = document.querySelector("._results");

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



// Render cartas productos

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
        data-img='${productImg}' >Agregar</button>
       </div>
    </div>   
    `;
};


//no se si esta bien esta funcion:

const renderPopular = (e) =>{
    (e).forEach((producto)=>{
        if(producto.popular===true){
            renderProduct(producto); 
        }
    })
};

///

const renderProducts = (category = undefined) => {
    if (!category) {
        renderPopular(_array_de_productos);
        return;
    }
    renderFilteredProducts(category);
};

