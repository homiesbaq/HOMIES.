const MI_TELEFONO = "573244529453";

// Lógica de WhatsApp
function enviarPedido() {
    const nombre = document.getElementById('prodName').innerText;
    const precio = document.getElementById('prodPrice').innerText;
    const color = document.getElementById('colorSelect').value;
    const tallaRadio = document.querySelector('input[name="size"]:checked');
    const talla = tallaRadio ? tallaRadio.value : "Talla Única";

    const mensaje = `¡Hola HOMIES! 👋%0A%0AQuiero comprar este producto:%0A*Articulo:* ${nombre}%0A*Precio:* ${precio}%0A*Talla:* ${talla}%0A*Color:* ${color}%0A%0A¿Tienen disponibilidad?`;

    window.open(`https://api.whatsapp.com/send?phone=${MI_TELEFONO}&text=${mensaje}`, '_blank');
}

// Animación de entrada suave
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.product-card, .hero-content, .hero-image');
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.8s ease-out";
        
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 150 * index);
    });
});
