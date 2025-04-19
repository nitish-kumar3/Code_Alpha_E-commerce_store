// const API_URL = "http://localhost:3000";

// let cart = [];

// function renderCart() {
//   const cartEl = document.getElementById("cart");
//   const totalEl = document.getElementById("total");
//   cartEl.innerHTML = "";
//   let total = 0;
//   cart.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} - $${item.price}`;
//     cartEl.appendChild(li);
//     total += item.price;
//   });
//   totalEl.textContent = total.toFixed(2);
// }

// function addToCart(product) {
//   cart.push(product);
//   renderCart();
// }

// function renderProducts(products) {
//   const productsEl = document.getElementById("products");
//   productsEl.innerHTML = "";
//   products.forEach(p => {
//     const div = document.createElement("div");
//     div.className = "product";
//     div.innerHTML = `
//       <img src="https://via.placeholder.com/220x150.png?text=${encodeURIComponent(p.name)}" alt="${p.name}" />
//       <h3>${p.name}</h3>
//       <p>$${p.price}</p>`;
//     const btn = document.createElement("button");
//     btn.textContent = "Add to Cart";
//     btn.onclick = () => addToCart(p);
//     div.appendChild(btn);
//     productsEl.appendChild(div);
//   });
// }

// document.getElementById("buy-button").addEventListener("click", async () => {
//   if (cart.length === 0) return alert("Cart is empty");
//   await fetch(`${API_URL}/api/orders`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ items: cart })
//   });
//   alert("Order placed!");
//   cart = [];
//   renderCart();
// });

// async function loadProducts() {
//   const res = await fetch(`${API_URL}/api/products`);
//   const products = await res.json();
//   renderProducts(products);
// }

// loadProducts();



//2
// const API_URL = "http://localhost:3000";

// let cart = [];

// // Render the cart items and update the total
// function renderCart() {
//   const cartEl = document.getElementById("cart");
//   const totalEl = document.getElementById("total");
//   cartEl.innerHTML = ""; // Clear the cart display
//   let total = 0;

//   cart.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} - $${item.price}`;
//     cartEl.appendChild(li);
//     total += item.price;
//   });

//   totalEl.textContent = total.toFixed(2); // Update the total price
// }

// // Add a product to the cart
// function addToCart(productName, productPrice) {
//   const product = { name: productName, price: parseFloat(productPrice) };
//   cart.push(product); // Add the product to the cart array
//   renderCart(); // Update the cart display
// }

// // Render the products dynamically
// function renderProducts(products) {
//   const productsEl = document.getElementById("products");
//   productsEl.innerHTML = ""; // Clear existing products

//   products.forEach(p => {
//     const div = document.createElement("div");
//     div.className = "product";
//     div.innerHTML = `
//       <img src="https://via.placeholder.com/220x150.png?text=${encodeURIComponent(p.name)}" alt="${p.name}" />
//       <h3>${p.name}</h3>
//       <p>Price: $${p.price}</p>
//       <button class="add-to-cart" data-name="${p.name}" data-price="${p.price}">Buy</button>
//     `;
//     productsEl.appendChild(div);
//   });

//   // Attach event listeners to dynamically created "Buy" buttons
//   const buttons = document.querySelectorAll(".add-to-cart");
//   buttons.forEach(button => {
//     button.addEventListener("click", () => {
//       const productName = button.getAttribute("data-name");
//       const productPrice = button.getAttribute("data-price");
//       addToCart(productName, productPrice); // Add the product to the cart
//     });
//   });
// }

// // Handle the "Buy Now" button click
// document.getElementById("buy-button").addEventListener("click", async () => {
//   if (cart.length === 0) return alert("Cart is empty");

//   try {
//     await fetch(`${API_URL}/api/orders`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: cart })
//     });
//     alert("Order placed!");
//     cart = [];
//     renderCart(); // Clear the cart after placing the order
//   } catch (error) {
//     alert("Failed to place order. Please try again.");
//   }
// });

// // Load products from the API and render them
// async function loadProducts() {
//   try {
//     const res = await fetch(`${API_URL}/api/products`);
//     const products = await res.json();
//     renderProducts(products);
//   } catch (error) {
//     console.error("Failed to load products:", error);
//   }
// }

// // Initialize the app
// loadProducts();


//3
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

// Handle the "Buy Now" button click
// document.getElementById("buy-button").addEventListener("click", () => {
//   if (cart.length === 0) {
//     alert("Cart is empty");
//     return;
//   }

//   alert("Order placed successfully!");
//   cart = []; // Clear the cart
//   renderCart(); // Update the cart display
// });



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










// const API_URL = "http://localhost:3000";

// let cart = [];

// // Render the cart items and update the total
// function renderCart() {
//   const cartEl = document.getElementById("cart");
//   const totalEl = document.getElementById("total");
//   cartEl.innerHTML = ""; // Clear the cart display
//   let total = 0;

//   cart.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
//     cartEl.appendChild(li);
//     total += item.price * item.quantity;
//   });

//   totalEl.textContent = total.toFixed(2); // Update the total price
// }

// // Add a product to the cart
// function addToCart(productName, productPrice) {
//   const existingItem = cart.find(item => item.name === productName);
//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     cart.push({ name: productName, price: parseFloat(productPrice), quantity: 1 });
//   }
//   renderCart(); // Update the cart display
// }

// // Attach event listeners to "Buy" buttons
// function setupBuyButtons() {
//   const buttons = document.querySelectorAll(".add-to-cart");
//   buttons.forEach(button => {
//     button.addEventListener("click", () => {
//       const productName = button.getAttribute("data-name");
//       const productPrice = button.getAttribute("data-price");
//       addToCart(productName, productPrice); // Add the product to the cart
//     });
//   });
// }

// // Fetch and render products
// async function loadProducts() {
//   const res = await fetch(`${API_URL}/api/products`);
//   const products = await res.json();

//   const productsEl = document.getElementById("products");
//   productsEl.innerHTML = ""; // Clear existing products

//   products.forEach(p => {
//     const div = document.createElement("div");
//     div.className = "product";
//     div.innerHTML = `
//       <img src="${p.image}" alt="${p.name}" />
//       <h3>${p.name}</h3>
//       <p>Price: $${p.price}</p>
//       <button class="add-to-cart" data-name="${p.name}" data-price="${p.price}">Buy</button>
//     `;
//     productsEl.appendChild(div);
//   });

//   // Attach event listeners to "Buy" buttons
//   const buttons = document.querySelectorAll(".add-to-cart");
//   buttons.forEach(button => {
//     button.addEventListener("click", () => {
//       const productName = button.getAttribute("data-name");
//       const productPrice = button.getAttribute("data-price");
//       addToCart(productName, productPrice); // Add the product to the cart
//     });
//   });
// }

// // Handle the "Buy Now" button click
// document.getElementById("buy-button").addEventListener("click", async () => {
//   if (cart.length === 0) {
//     alert("Cart is empty");
//     return;
//   }

//   const res = await fetch(`${API_URL}/api/orders`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ items: cart }),
//   });

//   const data = await res.json();
//   alert(data.message);

//   cart = []; // Clear the cart
//   renderCart(); // Update the cart display
// });

// // Initialize the app
// document.addEventListener("DOMContentLoaded", () => {
//   loadProducts(); // Load products from the backend
// });