/**
 * HOMIES - JS Maestro Unificado
 * Configuración para: WhatsApp, Carrusel, Filtros y Animaciones
 */

// 1. CONFIGURACIÓN GLOBAL
const CONFIG = {
    telefono: "573244529453",
    moneda: "COP",
    saludo: "¡Hola HOMIES! 👋 Vi esto en la página y me encantó:"
};

// 2. SISTEMA DE WHATSAPP (Página de Producto)
function enviarPedido() {
    const nombre = document.getElementById('prodName')?.innerText || "Producto";
    const precio = document.getElementById('prodPrice')?.innerText || "";
    const color = document.getElementById('colorSelect')?.value || "No especificado";
    
    // Capturar talla si existe (evita errores en accesorios)
    const tallaRadio = document.querySelector('input[name="size"]:checked');
    const talla = tallaRadio ? tallaRadio.value : "Talla Única / Accesorio";

    // Construcción del mensaje con formato para WhatsApp
    const mensaje = `${CONFIG.saludo}%0A%0A` +
                    `*🛍️ Artículo:* ${nombre}%0A` +
                    `*💰 Precio:* ${precio}%0A` +
                    `*📏 Talla:* ${talla}%0A` +
                    `*🎨 Color:* ${color}%0A%0A` +
                    `¿Tienen disponibilidad para envío inmediato?`;

    const link = `https://api.whatsapp.com/send?phone=${CONFIG.telefono}&text=${mensaje}`;
    
    // Abrir en pestaña nueva
    window.open(link, '_blank');
}

// 3. CARRUSEL DINÁMICO (Hero & Galería)
let slideIndex = 0;

function moveSlide(direction) {
    const wrapper = document.getElementById('slidesWrapper');
    if (!wrapper) return; // Evita errores si no hay slider en la página

    const slides = document.querySelectorAll('.slide-img, .slide');
    const total = slides.length;

    slideIndex = (slideIndex + direction + total) % total;
    wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// 4. FILTROS DE COLECCIÓN (Página de Colección)
function filterCategory(cat) {
    const products = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Cambiar estado visual del botón
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filtrar con animación
    products.forEach(product => {
        product.style.opacity = '0';
        product.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            if (cat === 'todos' || product.dataset.category === cat) {
                product.style.display = 'block';
                setTimeout(() => {
                    product.style.opacity = '1';
                    product.style.transform = 'scale(1)';
                }, 50);
            } else {
                product.style.display = 'none';
            }
        }, 300);
    });
}

// 5. EFECTOS DE REVELADO (Aparecer al bajar el scroll)
const revealOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Elementos que queremos animar
    const elements = document.querySelectorAll('.product-card, .about-grid, .hero-text, .ad-banner');
    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
        observer.observe(el);
    });
};

// CSS adicional inyectado para la animación de revelado
const style = document.createElement('style');
style.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// 6. INICIALIZADOR
document.addEventListener('DOMContentLoaded', () => {
    console.log("HOMIES Engine Ready 🚀");
    revealOnScroll();

    // Auto-carrusel opcional (cada 5 segundos en el Home)
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        setInterval(() => moveSlide(1), 5000);
    }

    // Lógica para ocultar tallas si es Gorra (Detección inteligente)
    const prodName = document.getElementById('prodName')?.innerText.toLowerCase();
    const sizeSection = document.getElementById('sizeSelector');
    if (prodName && (prodName.includes("gorra") || prodName.includes("beanie") || prodName.includes("bag"))) {
        if (sizeSection) sizeSection.style.display = 'none';
    }
});
