document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.querySelector('.image-button').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Selecciona todos los elementos con la clase "image-link"
const imageLinks = document.querySelectorAll('.image-link');

// Agrega un evento de clic a cada enlace de imagen
imageLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Obtiene la URL de la imagen desde el atributo "href" del enlace
        const imageUrl = link.getAttribute('href');

        // Abre la imagen en una nueva ventana
        window.open(imageUrl, '_blank', 'width=800,height=600');
    });
});