// 1. Lógica del Slider
let currentSlide = 0;
const slides = document.getElementById('slidesWrapper');

function moveSlide(direction) {
    const totalSlides = document.querySelectorAll('.slide-img').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 2. Lógica de WhatsApp
function enviarPedido() {
    const telefono = "573000000000"; // TU NÚMERO AQUÍ (Sin el +)
    const nombre = document.getElementById('prodName').innerText;
    const precio = document.getElementById('prodPrice').innerText;
    const color = document.getElementById('colorSelect').value;
    
    // Obtenemos la talla (si existe el selector)
    const sizeInput = document.querySelector('input[name="size"]:checked');
    const talla = sizeInput ? sizeInput.value : "Talla Única";

    const mensaje = `¡Hola HOMIES! 👋%0A%0AQuiero comprar el siguiente producto:%0A*Articulo:* ${nombre}%0A*Precio:* ${precio}%0A*Talla:* ${talla}%0A*Color:* ${color}%0A%0A¿Está disponible?`;

    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
    window.open(url, '_blank');
}

// 3. Ocultar tallas si es Gorra (Ejemplo básico)
if (document.getElementById('prodName').innerText.includes("Gorra")) {
    document.getElementById('sizeSelector').style.display = 'none';
}
