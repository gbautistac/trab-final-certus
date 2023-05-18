// /*Obtener referencia a todos los botones */
let botones = window.document.querySelectorAll("#Catalogo > article")
//  > div.product-btn-buy > button

var cartContainer = document.getElementById('container-cart')
var cartFootContainer = document.getElementById('container-foot-cart')
var containerProducts = document.getElementById('Catalogo')
var products = []
var cart = []



products = [
    { id: 1, title: `Kit Teclado Gamer - Base de Celular`, price : 100, image: 'img/CARGADOR ACER.jpg', stock: 10 },
    { id: 2, title: `Caddy para Laptops`, price : 20.00, image: 'img/CADDY2.jpg', stock: 10 },
    { id: 3, title: `Cpu Marca Dell Corei5`, price : 500, image: 'img/CPU DELL I5.jpg', stock: 8 },
    { id: 4, title: `Monitor Led Samsung`, price : 800, image: 'img/MONITOR SAMSUNG.jpg', stock: 5 },
    { id: 5, title: `Kit Estudiante`, price : 120, image: 'img/TECLADO LOGITECH.jpg', stock: 6 },
    { id: 6, title: `Impresora Multifuncional`, price : 600, image: 'img/IMPRESORA-CANON-G4100.jpg', stock: 10 },
    { id: 7, title: `Parlantes Discotekeros`, price : 300, image: 'img/PARLANTES MICRONICS USB.jpg', stock: 7 },
    { id: 8, title: `Porta Tablet Original`, price : 80, image: 'img/PORTA TABLET.jpg', stock: 8 },
    { id: 9, title: `WebCam - Fotográfos`, price : 250, image: 'img/WEBCAM.jpg', stock: 9 },
    { id: 10, title: `Fuente de Poder 800w`, price : 168, image: 'img/FUENTE DE PODER.jpg', stock: 5 },
    { id: 11, title: `Estabilizador de Corriente`, price : 105, image: 'img/ESTABILIZADOR.jpg', stock: 12 },
    { id: 12, title: `Cargador Acer Original Para Laptops`, price : 135, image: 'img/CARGADOR ACER.jpg', stock: 12 },
]



function addProductsHTML() {
    products.forEach(e => {
        containerProducts.innerHTML += `
        <article class="product">
            <h3 class="tituloProducto"> ${e.title} </h3>
            <picture class="product-image">
                <img src="${e.image}" alt="${e.title}">
            </picture>
            <div class="product-price"> 
                <span class="price-ofert">S/ ${e.price} <span class="bagde-dsct">-50%</span> <br>
                <i class="price-old">S/ ${e.price}</i> <br>
                <span>Stock: ${e.stock}</span>
            </div>
            <div class="product-btn-buy">
                <button class="btn btn-secondary"  data-product-id="${e.id}" onclick="addCart(this)">Agregar al Carrito</button>
            </div>
            
        </article>
        `  
        
    })
}



addProductsHTML()


function addCart(event) {
    let data_id = event.getAttribute('data-product-id')
    // cart.push(data_id)
    let find = products.find(e => e.id == data_id) 
    if (find) {        
        
        let findCart = cart.find(e => e.id == find.id)

        if (!findCart) {
            find.quality = 1
            cart.push(find)  
            alert("Añadiendo Productos al carrito")
            
           } else {
            
            findCart.quality++
            console.log(findCart)
        }
    }
 
    calFootCart(cart)
}




function calFootCart(cart) {

    if (cartContainer) {
        cartContainer.innerHTML = ''
        cart.forEach(ee => {
            cartContainer.innerHTML += `
            <div class="card border bg-light rounded my-3">
                <div class="row p-3">
                    <div class="col-md-3"><img class="img-fluid rounded" src="${ee.image}" width="75"/></div>
                    <div class="col-md-9">
                        <div class="d-block"><b>${ee.title}</b></div>
                        <div><span class="font-weight-bold text-danger">S/${ee.price}</span></div>
                        <div>Cantidad: ${ee.quality ?? 1}</div>
                    </div>
                </div>                
            </div>
            `
        })                
    }

    let total = 0
    total = cart.reduce((a,p) => {
        return a + (p.price * p.quality)
    }, 0)

    cartFootContainer.innerHTML = `
        <div class="row">
            <div class="col-md-8">TOTAL</div><div class="col-md-4">S/${total}</div>
        </div>
    `
}

function resetCart() {
    cart = []
    cartContainer.innerHTML =''
    cartFootContainer.innerHTML = ''
}

