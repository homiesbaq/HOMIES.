document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  const product = products.find(p => p.id === productId);

  if (!product) return;

  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = product.price;

  const imageEl = document.getElementById("product-image");
  let currentImage = 0;
  imageEl.src = product.images[currentImage];

  const leftArrow = document.querySelector(".gallery-arrow.left");
  const rightArrow = document.querySelector(".gallery-arrow.right");

  leftArrow?.addEventListener("click", () => {
    currentImage = (currentImage - 1 + product.images.length) % product.images.length;
    imageEl.src = product.images[currentImage];
  });

  rightArrow?.addEventListener("click", () => {
    currentImage = (currentImage + 1) % product.images.length;
    imageEl.src = product.images[currentImage];
  });

  const buyBtn = document.getElementById("buyBtn");

  buyBtn.addEventListener("click", () => {
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;

    if (!size || !color) {
      alert("Selecciona talla y color");
      return;
    }

    const phone = "573244529453";
    const message = `Hola 👋, quiero comprar:\n\nProducto: ${product.name}\nTalla: ${size}\nColor: ${color}\nPrecio: ${product.price}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});

