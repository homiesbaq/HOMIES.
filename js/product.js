
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  const product = products.find(p => p.id === productId);

  if (!product) {
    console.error("Producto no encontrado");
    return;
  }

  // INFO
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = product.price;

  // IMÁGENES
  const imageEl = document.getElementById("product-image");
  let currentImage = 0;
  imageEl.src = product.images[currentImage];

  document.querySelector(".gallery-arrow.left").onclick = () => {
    currentImage =
      (currentImage - 1 + product.images.length) % product.images.length;
    imageEl.src = product.images[currentImage];
  };

  document.querySelector(".gallery-arrow.right").onclick = () => {
    currentImage =
      (currentImage + 1) % product.images.length;
    imageEl.src = product.images[currentImage];
  };

  // BOTÓN WHATSAPP
  document.getElementById("buyBtn").addEventListener("click", () => {
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;

    if (!size || !color) {
      alert("Por favor selecciona talla y color");
      return;
    }

    const phone = "573244529453";

    const message = `Hola 👋, quiero comprar en HOMIES:

🧢 Producto: ${product.name}
📏 Talla: ${size}
🎨 Color: ${color}
💰 Precio: ${product.price}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});
