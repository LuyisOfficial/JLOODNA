// ==========================
// JLOODNA ADMIN PANEL
// SECURE + RESPONSIVE VERSION
// ==========================

"use strict";

/* ==========================
   SECURITY CONFIG
========================== */

// IMPORTANT:
// In production use a backend API + JWT.
// Never expose real admin password in frontend.

const ADMIN_DATA = {
  email: "jloodna@gmail.com",
  password: "@JLoodna20021996"
};

const SESSION_KEY = "jloodnaAdminSession";

/* ==========================
   SAFE ELEMENT SELECTOR
========================== */

function getEl(id){
  return document.getElementById(id);
}

/* ==========================
   LOGIN SYSTEM
========================== */

const loginBtn = getEl("login-btn");

if(loginBtn){

  loginBtn.addEventListener("click", handleLogin);

}

function handleLogin(){

  const emailInput = getEl("admin-email");
  const passwordInput = getEl("admin-password");
  const errorBox = getEl("login-error");

  if(!emailInput || !passwordInput){
    return;
  }

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // RESET ERROR

  if(errorBox){
    errorBox.style.display = "none";
  }

  // VALIDATION

  if(email === "" || password === ""){

    showError("Veuillez remplir tous les champs.");
    return;

  }

  // LOGIN

  if(
    email === ADMIN_DATA.email &&
    password === ADMIN_DATA.password
  ){

    sessionStorage.setItem(
      SESSION_KEY,
      "true"
    );

    showAdminPanel();

  }else{

    showError("Email ou mot de passe incorrect.");

  }

}

/* ==========================
   SHOW ERROR
========================== */

function showError(message){

  const errorBox = getEl("login-error");

  if(errorBox){

    errorBox.textContent = message;
    errorBox.style.display = "block";

  }

}

/* ==========================
   SHOW ADMIN PANEL
========================== */

function showAdminPanel(){

  const loginPage = getEl("admin-login");
  const adminPanel = getEl("admin-panel");

  if(loginPage){
    loginPage.style.display = "none";
  }

  if(adminPanel){
    adminPanel.classList.remove("hidden");
  }

}

/* ==========================
   AUTO LOGIN
========================== */

if(sessionStorage.getItem(SESSION_KEY) === "true"){

  showAdminPanel();

}

/* ==========================
   LOGOUT
========================== */

const logoutBtn = getEl("logout-btn");

if(logoutBtn){

  logoutBtn.addEventListener("click", () => {

    sessionStorage.removeItem(SESSION_KEY);

    location.reload();

  });

}

/* ==========================
   SIDEBAR RESPONSIVE
========================== */

const sidebar = document.querySelector(".sidebar");
const menuToggle = document.querySelector(".menu-toggle");
const closeSidebar = document.querySelector(".close-sidebar");

if(menuToggle && sidebar){

  menuToggle.addEventListener("click", () => {

    sidebar.classList.add("open");

  });

}

if(closeSidebar && sidebar){

  closeSidebar.addEventListener("click", () => {

    sidebar.classList.remove("open");

  });

}

/* CLOSE SIDEBAR ON MOBILE CLICK */

document.addEventListener("click", (e) => {

  if(
    window.innerWidth <= 900 &&
    sidebar &&
    sidebar.classList.contains("open")
  ){

    if(
      !sidebar.contains(e.target) &&
      !menuToggle.contains(e.target)
    ){

      sidebar.classList.remove("open");

    }

  }

});

/* ==========================
   DROPDOWN MENU
========================== */

const dropdownBtns =
document.querySelectorAll(".menu-btn");

dropdownBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    const submenu = btn.nextElementSibling;

    if(!submenu) return;

    submenu.classList.toggle("active");

    btn.classList.toggle("active");

  });

});

/* ==========================
   SAFE LOCAL STORAGE
========================== */

function getStorage(key){

  try{

    return JSON.parse(localStorage.getItem(key)) || [];

  }catch(error){

    console.error(error);

    return [];

  }

}

function saveStorage(key,data){

  localStorage.setItem(
    key,
    JSON.stringify(data)
  );

}

/* ==========================
   DATABASES
========================== */

let products = getStorage("jloodnaProducts");

let orders = getStorage("jloodnaOrders");

let clients = getStorage("jloodnaClients");

/* ==========================
   DASHBOARD
========================== */

function renderDashboard(){

  const revenue = orders.reduce((total,order) => {

    return total + Number(order.total || 0);

  },0);

  updateText("dashboard-revenue", `$${revenue}`);

  updateText("dashboard-orders", orders.length);

  updateText("dashboard-clients", clients.length);

  updateText("dashboard-products", products.length);

  renderRecentOrders();

  renderFeaturedProducts();

  renderActivities();

}

/* ==========================
   UPDATE TEXT
========================== */

function updateText(id,value){

  const element = getEl(id);

  if(element){

    element.textContent = value;

  }

}

/* ==========================
   RECENT ORDERS
========================== */

function renderRecentOrders(){

  const container = getEl("recent-orders");

  if(!container) return;

  container.innerHTML = "";

  const latestOrders =
  [...orders].reverse().slice(0,5);

  latestOrders.forEach(order => {

    container.innerHTML += `

      <div class="recent-order">

        <div class="order-client">

          <div class="order-avatar">
            ${safeText(order.customer?.charAt(0) || "U")}
          </div>

          <div>
            <strong>
              ${safeText(order.customer)}
            </strong>

            <p>
              ${safeText(order.date)}
            </p>
          </div>

        </div>

        <div class="order-price">
          $${Number(order.total || 0)}
        </div>

      </div>

    `;

  });

}

/* ==========================
   FEATURED PRODUCTS
========================== */

function renderFeaturedProducts(){

  const container = getEl("best-products");

  if(!container) return;

  container.innerHTML = "";

  const featured =
  products.filter(product => product.featured);

  featured.slice(0,5).forEach(product => {

    container.innerHTML += `

      <div class="best-product">

        <img
        src="${safeImage(product.image)}"
        alt="Product">

        <div>

          <strong>
            ${safeText(product.name)}
          </strong>

          <p>
            $${Number(product.price || 0)}
          </p>

        </div>

      </div>

    `;

  });

}

/* ==========================
   ACTIVITIES
========================== */

function renderActivities(){

  const container =
  getEl("recent-activities");

  if(!container) return;

  container.innerHTML = "";

  const latestOrders =
  [...orders].reverse().slice(0,5);

  latestOrders.forEach(order => {

    container.innerHTML += `

      <div class="activity-item">

        <div class="activity-icon">

          <i class="fa-solid fa-cart-shopping"></i>

        </div>

        <div class="activity-content">

          <p>

            Nouvelle commande de

            <strong>
              ${safeText(order.customer)}
            </strong>

          </p>

          <span>
            ${safeText(order.date)}
          </span>

        </div>

      </div>

    `;

  });

}

renderDashboard();

/* ==========================
   IMAGE PREVIEW
========================== */

const imageInput =
getEl("product-image");

if(imageInput){

  imageInput.addEventListener("input", () => {

    const image = imageInput.value.trim();

    const preview =
    getEl("image-preview");

    if(!preview) return;

    preview.innerHTML = image
    ? `<img src="${safeImage(image)}" alt="Preview">`
    : `<p>Preview produit</p>`;

  });

}

/* ==========================
   PRODUCT FORM
========================== */

const form =
getEl("product-form");

if(form){

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    addProduct();

  });

}

function addProduct(){

  const name =
  getEl("product-name")?.value.trim();

  const price =
  getEl("product-price")?.value.trim();

  const category =
  getEl("product-category")?.value.trim();

  const image =
  getEl("product-image")?.value.trim();

  const description =
  getEl("product-description")?.value.trim();

  const featured =
  getEl("featured-product")?.checked;

  if(
    !name ||
    !price ||
    !category ||
    !image
  ){

    alert("Veuillez remplir tous les champs.");
    return;

  }

  const product = {

    id: Date.now(),

    name,

    price: Number(price),

    category,

    image,

    description,

    featured

  };

  products.push(product);

  saveStorage(
    "jloodnaProducts",
    products
  );

  renderProducts();

  renderDashboard();

  form.reset();

  const success =
  getEl("success-message");

  if(success){

    success.style.display = "block";

  }

}

/* ==========================
   RENDER PRODUCTS
========================== */

function renderProducts(){

  const container =
  getEl("products-container");

  if(!container) return;

  container.innerHTML = "";

  products.forEach((product,index) => {

    container.innerHTML += `

      <div class="product-card">

        <img
        src="${safeImage(product.image)}"
        alt="Product">

        <div class="product-content">

          <h3>
            ${safeText(product.name)}
          </h3>

          <p>
            $${Number(product.price)}
          </p>

          <p>
            ${safeText(product.category)}
          </p>

          <button
          class="delete-btn"
          onclick="deleteProduct(${index})">

            Supprimer

          </button>

        </div>

      </div>

    `;

  });

}

renderProducts();

/* ==========================
   DELETE PRODUCT
========================== */

function deleteProduct(index){

  const confirmDelete =
  confirm("Supprimer produit ?");

  if(!confirmDelete) return;

  products.splice(index,1);

  saveStorage(
    "jloodnaProducts",
    products
  );

  renderProducts();

  renderDashboard();

}

/* ==========================
   SAFE TEXT
========================== */

function safeText(text){

  if(!text) return "";

  return String(text)
  .replace(/</g,"&lt;")
  .replace(/>/g,"&gt;");

}

/* ==========================
   SAFE IMAGE
========================== */

function safeImage(url){

  if(!url){

    return "./placeholder.jpg";

  }

  return url;

      }
