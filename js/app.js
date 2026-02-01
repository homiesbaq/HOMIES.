const MI_TELEFONO = "573244529453";

function enviarPedido() {
    const nombre = document.getElementById('prodName').innerText;
    const precio = document.getElementById('prodPrice').innerText;
    const talla = document.querySelector('input[name="size"]:checked')?.value || "Única";
    const color = document.getElementById('colorSelect').value;

    const mensaje = `*NUEVO PEDIDO HOMIES*%0A%0A` +
                    `🔥 *Producto:* ${nombre}%0A` +
                    `💰 *Precio:* ${precio}%0A` +
                    `📏 *Talla:* ${talla}%0A` +
                    `🎨 *Color:* ${color}%0A%0A` +
                    `¿Me confirman si está disponible para envío?`;

    window.open(`https://api.whatsapp.com/send?phone=${MI_TELEFONO}&text=${mensaje}`, '_blank');
}
