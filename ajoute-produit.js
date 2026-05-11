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


// ==========================
// SHOW ADMIN PANEL
// ==========================

function showAdminPanel(){

  document.getElementById("admin-login")
  .style.display = "none";

  document.getElementById("admin-panel")
  .classList.remove("hidden");

}


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
