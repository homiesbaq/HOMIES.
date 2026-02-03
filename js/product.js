
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products.find(p => p.id === productId);

if (!product) {
  console.error("Producto no encontrado");
} else {
  // Nombre
  document.getElementById("product-name").textContent = product.name;

  // Precio
  document.getElementById("product-price").textContent = product.price;

  // Imagen principal
  const imageEl = document.getElementById("product-image");
  let currentImage = 0;
  imageEl.src = product.images[currentImage];

  // Flechas
  const leftArrow = document.querySelector(".gallery-arrow.left");
  const rightArrow = document.querySelector(".gallery-arrow.right");

  leftArrow.addEventListener("click", () => {
    currentImage =
      (currentImage - 1 + product.images.length) % product.images.length;
    imageEl.src = product.images[currentImage];
  });

  rightArrow.addEventListener("click", () => {
    currentImage =
      (currentImage + 1) % product.images.length;
    imageEl.src = product.images[currentImage];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const buyBtn = document.getElementById("buyBtn");

  if (!buyBtn) return;

  buyBtn.addEventListener("click", () => {
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;

    if (!size || !color) {
      alert("Por favor selecciona talla y color");
      return;
    }

    const productName = document.querySelector("h1").innerText;

    const phone = "573244529453";
    const message = `Hola 👋, quiero comprar:\n\nProducto: ${productName}\nTalla: ${size}\nColor: ${color}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
});
