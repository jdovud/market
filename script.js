const TELEGRAM_USERNAME = "YOUR_USERNAME";

fetch("products.json")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products");

    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div class="image-wrapper">
          <img src="${p.image}">
          ${p.discount ? `<div class="badge">-${p.discount}%</div>` : ""}
        </div>

        <div class="content">
          <div class="name">${p.name}</div>

          <div class="price-row">
            <span class="price">${p.price}</span>
            ${p.oldPrice ? `<span class="old-price">${p.oldPrice}</span>` : ""}
          </div>

          <div class="delivery">⏳ ${p.delivery}</div>

          <button onclick="buy('${p.name}')">Купить</button>
        </div>
      `;

      container.appendChild(card);
    });
  });

function buy(name){
  const text = encodeURIComponent("Хочу купить: " + name);
  window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${text}`, "_blank");
}