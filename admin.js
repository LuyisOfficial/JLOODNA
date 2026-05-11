// ==========================
// ADMIN SECURITY
// ==========================

const ADMIN_EMAIL = "jloodna@gmail.com";
const ADMIN_PASSWORD = "@JLoodna20021996";

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", () => {

  const email =
  document.getElementById("admin-email").value;

  const password =
  document.getElementById("admin-password").value;

  if(
    email === ADMIN_EMAIL &&
    password === ADMIN_PASSWORD
  ){

    localStorage.setItem(
      "jloodnaAdmin",
      "true"
    );

    showAdminPanel();

  }else{

    document.getElementById("login-error")
    .style.display = "block";

  }

});
/* ========================= */
/* SIDEBAR MOBILE */
/* ========================= */

const sidebar = document.querySelector(".sidebar");
const menuToggle = document.querySelector(".menu-toggle");
const closeSidebar = document.querySelector(".close-sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

/* ========================= */
/* DROPDOWN MENU */
/* ========================= */

const dropdownBtns = document.querySelectorAll(".menu-btn");

dropdownBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    const submenu = btn.nextElementSibling;

    submenu.classList.toggle("active");

    btn.classList.toggle("active");

  });

});

// ==========================
// SHOW ADMIN PANEL
// ==========================

function showAdminPanel(){

  document.getElementById("admin-login")
  .style.display = "none";

  document.getElementById("admin-panel")
  .classList.remove("hidden");

}

// =========================
// DASHBOARD
// =========================

function renderDashboard(){

  // DATABASES

  const products =
  JSON.parse(localStorage.getItem("jloodnaProducts"))
  || [];

  const orders =
  JSON.parse(localStorage.getItem("jloodnaOrders"))
  || [];

  const clients =
  JSON.parse(localStorage.getItem("jloodnaClients"))
  || [];

  // TOTAL REVENUE

  let revenue = 0;

  orders.forEach(order => {
    revenue += order.total;
  });

  // UPDATE CARDS

  document.getElementById("dashboard-revenue")
  .textContent = `$${revenue}`;

  document.getElementById("dashboard-orders")
  .textContent = orders.length;

  document.getElementById("dashboard-clients")
  .textContent = clients.length;

  document.getElementById("dashboard-products")
  .textContent = products.length;

  // RECENT ORDERS

  const recentOrders =
  document.getElementById("recent-orders");

  recentOrders.innerHTML = "";

  orders.slice(-5).reverse().forEach(order => {

    recentOrders.innerHTML += `

      <div class="recent-order">

        <div class="order-client">

          <div class="order-avatar">

            ${order.customer.charAt(0)}

          </div>

          <div>

            <strong>${order.customer}</strong>

            <p>${order.date}</p>

          </div>

        </div>

        <div class="order-price">

          $${order.total}

        </div>

      </div>

    `;

  });

  // BEST PRODUCTS

  const bestProducts =
  document.getElementById("best-products");

  bestProducts.innerHTML = "";

  const featuredProducts =
  products.filter(product =>
    product.featured
  );

  featuredProducts.slice(0,5).forEach(product => {

    bestProducts.innerHTML += `

      <div class="best-product">

        <img src="${product.image}">

        <div>

          <strong>${product.name}</strong>

          <p>$${product.price}</p>

        </div>

      </div>

    `;

  });

  // ACTIVITIES

  const activities =
  document.getElementById("recent-activities");

  activities.innerHTML = "";

  orders.slice(-5).reverse().forEach(order => {

    activities.innerHTML += `

      <div class="activity-item">

        <div class="activity-icon">

          <i class="fa-solid fa-cart-shopping"></i>

        </div>

        <div class="activity-content">

          <p>

            Nouvelle commande de
            <strong>${order.customer}</strong>

          </p>

          <span>${order.date}</span>

        </div>

      </div>

    `;

  });

}

renderDashboard();


// =========================
// QUICK ACTIONS
// =========================

document.getElementById("quick-add-product")
.addEventListener("click", () => {

  window.scrollTo({
    top:700,
    behavior:"smooth"
  });

});

document.getElementById("quick-orders")
.addEventListener("click", () => {

  document.querySelector(".orders-section")
  .scrollIntoView({
    behavior:"smooth"
  });

});

document.getElementById("quick-clients")
.addEventListener("click", () => {

  document.querySelector(".clients-section")
  .scrollIntoView({
    behavior:"smooth"
  });

});


// AUTO LOGIN

if(localStorage.getItem("jloodnaAdmin") === "true"){
  showAdminPanel();
}


// ==========================
// LOGOUT
// ==========================

document.getElementById("logout-btn")
.addEventListener("click", () => {

  localStorage.removeItem("jloodnaAdmin");

  location.reload();

});


// ==========================
// IMAGE PREVIEW
// ==========================

const imageInput =
document.getElementById("product-image");

imageInput.addEventListener("input", () => {

  const image =
  imageInput.value;

  document.getElementById("image-preview")
  .innerHTML = `
    <img src="${image}">
  `;

});


// ==========================
// PRODUCTS DATABASE
// ==========================

let products =
JSON.parse(localStorage.getItem("jloodnaProducts"))
|| [];


// ==========================
// FORM SUBMIT
// ==========================

const form =
document.getElementById("product-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const product = {

    id: Date.now(),

    name:
    document.getElementById("product-name").value,

    price:
    document.getElementById("product-price").value,

    category:
    document.getElementById("product-category").value,

    image:
    document.getElementById("product-image").value,

    description:
    document.getElementById("product-description").value,

    featured:
    document.getElementById("featured-product").checked

  };

  // SAVE PRODUCT

  products.push(product);

  localStorage.setItem(
    "jloodnaProducts",
    JSON.stringify(products)
  );

  // SUCCESS MESSAGE

  document.getElementById("success-message")
  .style.display = "block";

  form.reset();

  document.getElementById("image-preview")
  .innerHTML = `
    <p>Preview pwodwi</p>
  `;

  renderProducts();

});


// ==========================
// RENDER PRODUCTS
// ==========================

function renderProducts(){

  const container =
  document.getElementById("products-container");

  container.innerHTML = "";

  products.forEach((product,index) => {

    container.innerHTML += `

      <div class="product-card">

        <img src="${product.image}">

        <div class="product-content">

          <h3>${product.name}</h3>

          <p>$${product.price}</p>

          <p>${product.category}</p>

          <button
          class="delete-btn"
          onclick="deleteProduct(${index})">

            Supprime

          </button>

        </div>

      </div>

    `;

  });

}

renderProducts();


// ==========================
// DELETE PRODUCT
// ==========================

function deleteProduct(index){

  if(confirm("Supprimer produit ?")){

    products.splice(index,1);

    localStorage.setItem(
      "jloodnaProducts",
      JSON.stringify(products)
    );

    renderProducts();

  }

}


// =========================
// COMMANDES DATABASE
// =========================

// Exemple structure commande réelle :

/*
{
  id: 1001,
  customer: "Jean Pierre",
  phone: "+509 00000000",
  payment: "MonCash",
  total: 250,
  status: "pending",
  date: "2026-05-11",
  products:[
    {
      name:"iPhone",
      image:"img.jpg",
      quantity:1
    }
  ]
}
*/

let orders =
JSON.parse(localStorage.getItem("jloodnaOrders"))
|| [];


// =========================
// RENDER COMMANDES
// =========================

function renderOrders(){

  const tbody =
  document.getElementById("orders-table-body");

  tbody.innerHTML = "";

  let pending = 0;
  let completed = 0;

  orders.forEach((order,index) => {

    if(order.status === "pending"){
      pending++;
    }

    if(order.status === "completed"){
      completed++;
    }

    let productsHTML = "";

    order.products.forEach(product => {

      productsHTML += `

        <div class="order-product">

          <img src="${product.image}">

          <div>
            <strong>${product.name}</strong>
            <p>Qté : ${product.quantity}</p>
          </div>

        </div>

      `;

    });

    tbody.innerHTML += `

      <tr>

        <td>#${order.id}</td>

        <td>${order.customer}</td>

        <td>${order.phone}</td>

        <td>${productsHTML}</td>

        <td>$${order.total}</td>

        <td>${order.payment}</td>

        <td>

          <select
          class="status-select"
          onchange="updateOrderStatus(${index}, this.value)">

            <option value="pending"
            ${order.status === "pending" ? "selected" : ""}>
              En attente
            </option>

            <option value="processing"
            ${order.status === "processing" ? "selected" : ""}>
              Préparation
            </option>

            <option value="shipping"
            ${order.status === "shipping" ? "selected" : ""}>
              Expédition
            </option>

            <option value="completed"
            ${order.status === "completed" ? "selected" : ""}>
              Livrée
            </option>

            <option value="cancelled"
            ${order.status === "cancelled" ? "selected" : ""}>
              Annulée
            </option>

          </select>

        </td>

        <td>${order.date}</td>

        <td>

          <div class="action-buttons">

            <button class="view-btn"
            onclick="viewOrder(${index})">

              Voir

            </button>

            <button class="delete-order-btn"
            onclick="deleteOrder(${index})">

              Supprimer

            </button>

          </div>

        </td>

      </tr>

    `;

  });

  // STATS

  document.getElementById("total-orders")
  .textContent = orders.length;

  document.getElementById("pending-orders")
  .textContent = pending;

  document.getElementById("completed-orders")
  .textContent = completed;

}

renderOrders();


// =========================
// UPDATE STATUS
// =========================

function updateOrderStatus(index,status){

  orders[index].status = status;

  localStorage.setItem(
    "jloodnaOrders",
    JSON.stringify(orders)
  );

  renderOrders();

}


// =========================
// DELETE ORDER
// =========================

function deleteOrder(index){

  if(confirm("Supprimer commande ?")){

    orders.splice(index,1);

    localStorage.setItem(
      "jloodnaOrders",
      JSON.stringify(orders)
    );

    renderOrders();

  }

}


// =========================
// VIEW ORDER
// =========================

function viewOrder(index){

  const order = orders[index];

  alert(
`
Commande #${order.id}

Client : ${order.customer}

Téléphone : ${order.phone}

Paiement : ${order.payment}

Total : $${order.total}

Statut : ${order.status}
`
  );

}


// =========================
// SEARCH FILTER
// =========================

document.getElementById("search-order")
.addEventListener("input", filterOrders);

document.getElementById("status-filter")
.addEventListener("change", filterOrders);

function filterOrders(){

  const search =
  document.getElementById("search-order")
  .value.toLowerCase();

  const status =
  document.getElementById("status-filter")
  .value;

  const rows =
  document.querySelectorAll(
    "#orders-table-body tr"
  );

  rows.forEach(row => {

    const text =
    row.innerText.toLowerCase();

    const matchesSearch =
    text.includes(search);

    const matchesStatus =
    status === "all" ||
    text.includes(status);

    row.style.display =
    matchesSearch && matchesStatus
    ? ""
    : "none";

  });

    }

// =========================
// CLIENTS DATABASE
// =========================

let clients =
JSON.parse(localStorage.getItem("jloodnaClients"))
|| [];


// =========================
// CLIENT RENDER
// =========================

function renderClients(){

  const tbody =
  document.getElementById("clients-table-body");

  tbody.innerHTML = "";

  let active = 0;
  let vip = 0;

  clients.forEach((client,index) => {

    if(client.status === "active"){
      active++;
    }

    if(client.status === "vip"){
      vip++;
    }

    tbody.innerHTML += `

      <tr>

        <td>

          <div class="client-info">

            <div class="client-avatar">

              ${client.name.charAt(0)}

            </div>

            <div>

              <strong>${client.name}</strong>

            </div>

          </div>

        </td>

        <td>${client.email}</td>

        <td>${client.phone}</td>

        <td>${client.orders}</td>

        <td>$${client.totalSpent}</td>

        <td>

          <span class="client-status status-${client.status}">

            ${client.status}

          </span>

        </td>

        <td>${client.registerDate}</td>

        <td>

          <div class="client-actions">

            <button
            class="view-client-btn"
            onclick="viewClient(${index})">

              Voir

            </button>

            <button
            class="block-client-btn"
            onclick="toggleClientStatus(${index})">

              ${client.status === "blocked"
              ? "Débloquer"
              : "Bloquer"}

            </button>

            <button
            class="delete-client-btn"
            onclick="deleteClient(${index})">

              Supprimer

            </button>

          </div>

        </td>

      </tr>

    `;

  });

  // STATS

  document.getElementById("total-clients")
  .textContent = clients.length;

  document.getElementById("active-clients")
  .textContent = active;

  document.getElementById("vip-clients")
  .textContent = vip;

}

renderClients();


// =========================
// VIEW CLIENT
// =========================

function viewClient(index){

  const client = clients[index];

  alert(

`
Client : ${client.name}

Email : ${client.email}

Téléphone : ${client.phone}

Commandes : ${client.orders}

Total Dépensé : $${client.totalSpent}

Statut : ${client.status}

Date : ${client.registerDate}
`

  );

}


// =========================
// BLOCK / UNBLOCK
// =========================

function toggleClientStatus(index){

  if(clients[index].status === "blocked"){

    clients[index].status = "active";

  }else{

    clients[index].status = "blocked";

  }

  localStorage.setItem(
    "jloodnaClients",
    JSON.stringify(clients)
  );

  renderClients();

}


// =========================
// DELETE CLIENT
// =========================

function deleteClient(index){

  if(confirm("Supprimer client ?")){

    clients.splice(index,1);

    localStorage.setItem(
      "jloodnaClients",
      JSON.stringify(clients)
    );

    renderClients();

  }

}


// =========================
// SEARCH FILTER
// =========================

document.getElementById("search-client")
.addEventListener("input", filterClients);

document.getElementById("client-filter")
.addEventListener("change", filterClients);

function filterClients(){

  const search =
  document.getElementById("search-client")
  .value.toLowerCase();

  const filter =
  document.getElementById("client-filter")
  .value;

  const rows =
  document.querySelectorAll(
    "#clients-table-body tr"
  );

  rows.forEach(row => {

    const text =
    row.innerText.toLowerCase();

    const matchSearch =
    text.includes(search);

    const matchFilter =
    filter === "all" ||
    text.includes(filter);

    row.style.display =
    matchSearch && matchFilter
    ? ""
    : "none";

  });

  }
