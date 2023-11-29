
let cart = [];
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/products')
        .then(response => {
            console.log(response)
            if (!response.ok) {
                console.log("problems")
                response.sendStatus(500);
                return;           
            }
            return response.json(); 
        })
        .then(data => {
            const productsContainer = document.getElementById('products-container');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                 // imagen y los demás datos del producto están disponibles
                const image = product.image_url ? `<img src="${product.image_url}" alt="${product.name}">` : '<img src="path_to_default_image.jpg" alt="Imagen no disponible">';
                const addButton = document.createElement('button');
                addButton.textContent = 'Añadir al carrito';
                addButton.onclick = function(){
                    addToCart(product.id); 
                    cart.push(product);
                    updateCartCount(); 
                }
                productDiv.innerHTML = `
                    ${image}
                    <div class="product-image">
                    <img src="${product.image_url}" alt="${product.name}"/>
                    <h3>${product.name}</h3>
                    <p>Precio: $${product.price}</p>
                    </div>
                `;
                productDiv.appendChild(addButton);
                productsContainer.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
});

function addToCart(productId){
    const userId = 1; // Obtén el ID del usuario de alguna manera, por ejemplo, desde la sesión
    const quantity = 1; // Puedes cambiar esto según tu lógica de aplicación

    // envia solicitud al servidor para añadir el producto al carrito
    fetch('/api/cart/add', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        }, 
        body: JSON.stringify({ userId: userId, productId: productId, quantity: quantity })
    })
    .then(response => response.json())
    .then(data => {
        console.log("producto añadido");
    })
    .catch(error => {
        console.error('Error al añadir el producto al carrito', error); 
    });
}

function updateCartCount(){
    console.log('update cart count');
    const cartCount = cart.length; 
    document.getElementById('cart-count').textContent = cartCount; 
}
