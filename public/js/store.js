document.addEventListener('DOMContentLoaded', function() {
    console.log('entro al store.js');
    fetch('/api/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error! status; ${response.status}');
            }
            return response.json(); 
        })
        .then(data => {
            const productsContainer = document.getElementById('products-container');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Precio: $${product.price}</p>
                    <button>Añadir al carrito</button>
                `;
                productsContainer.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
})

        /*function fetchProducts() {
            fetch('/api/products')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('HTTP error! status; ${response.status}');
                    }
                    return response.json(); 
                })
                .then(data => {
                    const productsContainer = document.getElementById('products-container');
                    data.forEarch(product => {
                        const productElement = document.createElement('div');
                        productElement.className = 'product';
                        productElement.innerHTML = `
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <p>Precio: ${product.price}€</p>
                            <button>Añadir al carrito</button>
                        `;
                        productsContainer.appendChild(productElement);
                    });
                })
                .catch(e => {
                    console.log('Hubo un problema con la petición fetch: ' + e.message);
                });
        }
        // Call function when page loads
        document.addEventListener('DOMContentLoaded', fetchProducts);*/
