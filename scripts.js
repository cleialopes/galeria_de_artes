// Manejador de eventos para los botones "Agregar al Carrito"
let slideIndex = 0;
function moveSlide(n) {
const slides = document.querySelector('.carousel-slide');
const totalSlides = slides.children.length;
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-slideIndex * (100 / totalSlides)}%)`; // Ajusta el desplazamiento
    }

// Manejador de eventos para los botones "Agregar al Carrito"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
button.addEventListener('click', () => {
    const itemName = button.parentElement.querySelector('h3').innerText;
    alert(`${itemName} ha sido agregado al carrito.`);
});
});

