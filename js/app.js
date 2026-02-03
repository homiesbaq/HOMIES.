
  const phone = "573244529453";

  const message = `Hola 👋, quiero comprar:
🧢 Producto: ${product}
📏 Talla: ${size}
🎨 Color: ${color}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
