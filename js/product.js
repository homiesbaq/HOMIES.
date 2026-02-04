document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (!productId) {
    alert("Producto no encontrado");
    return;
  }

  // 🔥 FIX CLAVE
  const product = products.find(p => String(p.id) === productId);

  if (!product) {
    alert("Producto no disponible");
    return;
  }

  // Info básica
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = product.price;

  // Galería
  const imageEl = document.getElementById("product-image");
  let currentImage = 0;
  imageEl.src = product.images[currentImage];

  document.querySelector(".gallery-arrow.left")?.addEventListener("click", () => {
    currentImage = (currentImage - 1 + product.images.length) % product.images.length;
    imageEl.src = product.images[currentImage];
  });

  document.querySelector(".gallery-arrow.right")?.addEventListener("click", () => {
    currentImage = (currentImage + 1) % product.images.length;
    imageEl.src = product.images[currentImage];
  });

  // Comprar
  const buyBtn = document.getElementById("buyBtn");

  buyBtn.addEventListener("click", () => {
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;

    if (!size || !color) {
      alert("Selecciona talla y color antes de comprar");
      return;
    }

    const phone = "573244529453";

    const message = `
Hola 👋, quiero comprar:

🧢 Producto: ${product.name}
📏 Talla: ${size}
🎨 Color: ${color}
💲 Precio: ${product.price}
    `.trim();

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});


