
const API_URL = "http://localhost:3000";
let cart = [];

// Render the cart items and update the total
function renderCart() {
  const cartEl = document.getElementById("cart");
  const totalEl = document.getElementById("total");
  cartEl.innerHTML = ""; // Clear the cart display
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartEl.appendChild(li);
    total += item.price;
  });

  totalEl.textContent = total.toFixed(2); // Update the total price
}

// Add a product to the cart
function addToCart(productName, productPrice) {
  const product = { name: productName, price: parseFloat(productPrice) };
  cart.push(product); // Add the product to the cart array
  renderCart(); // Update the cart display
}



// Fetch and render products
async function loadProducts() {
  const res = await fetch(`${API_URL}/api/products`);
  const products = await res.json();

  const productsEl = document.getElementById("products");
  productsEl.innerHTML = ""; // Clear existing products

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
      <button class="add-to-cart" data-name="${p.name}" data-price="${p.price}">Buy</button>
    `;
    productsEl.appendChild(div);
  });
   // Attach event listeners to "Buy" buttons
   const buttons = document.querySelectorAll(".add-to-cart");
   buttons.forEach(button => {
     button.addEventListener("click", () => {
       const productName = button.getAttribute("data-name");
       const productPrice = button.getAttribute("data-price");
       addToCart(productName, productPrice); // Add the product to the cart
     });
   });
 }

// Attach event listeners to "Buy" buttons in the HTML
function setupBuyButtons() {
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const productName = button.getAttribute("data-name");
      const productPrice = button.getAttribute("data-price");
      addToCart(productName, productPrice); // Add the product to the cart
    });
  });
}



document.getElementById("buy-button").addEventListener("click", async () => {
  console.log("Buy Now button clicked"); // Debugging
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  const res = await fetch(`${API_URL}/api/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: cart }),
  });

  const data = await res.json();
  alert(data.message);

  cart = []; // Clear the cart
  renderCart(); // Update the cart display
});

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  setupBuyButtons(); // Attach event listeners to "Buy" buttons
});


