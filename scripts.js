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

// Mensajes de error y éxito personalizados
window.REQUIRED_CODE_ERROR_MESSAGE = 'Elija un código de país';
window.LOCALE = 'es';
window.EMAIL_INVALID_MESSAGE = "La información que ha proporcionado no es válida. Compruebe el formato del campo e inténtelo de nuevo.";
window.REQUIRED_ERROR_MESSAGE = "Este campo no puede quedarse vacío.";
window.GENERIC_INVALID_MESSAGE = "La información que ha proporcionado no es válida. Compruebe el formato del campo e inténtelo de nuevo.";
