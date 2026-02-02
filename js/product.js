
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
