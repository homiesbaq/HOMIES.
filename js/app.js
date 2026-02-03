function buyWhatsApp() {
  const product = document.getElementById("productName").innerText;
  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;

  if (size === "" || color === "") {
    alert("Por favor selecciona talla y color");
    return;
  }

  const phone = "573244529453";

  const message = `Hola 👋, quiero comprar:
🧢 Producto: ${product}
📏 Talla: ${size}
🎨 Color: ${color}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
