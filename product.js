// =====================================
// PRODUCTS DATABASE
// =====================================

const products = [

  {
    id:1,

    name:"Samsung Galaxy S24",

    category:"Teknoloji Mobil",

    price:899,

    images:[
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1000&auto=format&fit=crop"
    ],

    features:[
      "Koulè : Nwa, Silver",
      "Stock Disponib",
      "128GB Storage",
      "5G Technology"
    ],

    description:
    "Samsung Galaxy S24 la se youn nan pi bon smartphone premium sou mache a. Li genyen gwo pèfòmans, kamera kalite siperyè ak yon batri ki dire lontan.",

  },

  {
    id:2,

    name:"Wireless Headphones",

    category:"Akseswa Elektwonik",

    price:120,

    images:[
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000&auto=format&fit=crop"
    ],

    features:[
      "Bluetooth 5.0",
      "Long Battery Life",
      "Wireless",
      "Noise Reduction"
    ],

    description:
    "Wireless Headphones sa yo bay son pwofesyonèl ak yon eksperyans konfòtab pou mizik ak gaming."
  },

  {
    id:3,

    name:"Smart Watch Pro",

    category:"Akseswa Elektwonik",

    price:240,

    images:[
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"
    ],

    features:[
      "Heart Monitor",
      "Water Resistant",
      "Smart Notifications"
    ],

    description:
    "Smart Watch Pro ede w swiv sante w, aktivite fizik ak notifikasyon telefòn ou."
  }

];

// =====================================
// GET PRODUCT ID FROM URL
// Exemple : product.html?id=2
// =====================================

const params = new URLSearchParams(
  window.location.search
);

const productId =
parseInt(params.get("id")) || 1;

// =====================================
// FIND PRODUCT
// =====================================

const product = products.find(
  item => item.id === productId
);

// =====================================
// HTML ELEMENTS
// =====================================

const productName =
document.getElementById("product-name");

const productPrice =
document.getElementById("product-price");

const mainImage =
document.getElementById("main-image");

const thumbnails =
document.getElementById("thumbnails");

const featuresList =
document.getElementById("product-features");

const productDescription =
document.getElementById("product-description");

const breadcrumbCategory =
document.getElementById("breadcrumb-category");

const breadcrumbProduct =
document.getElementById("breadcrumb-product");

// =====================================
// LOAD PRODUCT DATA
// =====================================

function loadProduct(){

  // NAME

  productName.innerText =
  product.name;

  // PRICE

  productPrice.innerText =
  "$" + product.price;

  // IMAGE

  mainImage.src =
  product.images[0];

  // DESCRIPTION

  productDescription.innerText =
  product.description;

  // CATEGORY

  breadcrumbCategory.innerText =
  product.category;

  breadcrumbProduct.innerText =
  product.name;

  // FEATURES

  featuresList.innerHTML = "";

  product.features.forEach(feature => {

    const li =
    document.createElement("li");

    li.innerText = feature;

    featuresList.appendChild(li);

  });

  // THUMBNAILS

  thumbnails.innerHTML = "";

  product.images.forEach(image => {

    const thumb =
    document.createElement("div");

    thumb.classList.add("thumb");

    thumb.innerHTML = `
      <img src="${image}">
    `;

    thumb.addEventListener("click", () => {

      mainImage.src = image;

    });

    thumbnails.appendChild(thumb);

  });

}

// =====================================
// RELATED PRODUCTS
// =====================================

const relatedGrid =
document.getElementById("related-grid");

function loadRelatedProducts(){

  const related = products.filter(item =>

    item.category === product.category &&
    item.id !== product.id

  );

  related.forEach(item => {

    const card =
    document.createElement("div");

    card.classList.add("related-card");

    card.innerHTML = `

      <img src="${item.images[0]}">

      <div class="related-content">

        <h3>${item.name}</h3>

        <div class="related-price">
          $${item.price}
        </div>

      </div>

    `;

    relatedGrid.appendChild(card);

  });

}

// =====================================
// TABS
// =====================================

const tabButtons =
document.querySelectorAll(".tab-btn");

const tabContents =
document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

  button.addEventListener("click", () => {

    tabButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    tabContents.forEach(content =>
      content.classList.remove("active")
    );

    button.classList.add("active");

    document
    .getElementById(button.dataset.tab)
    .classList.add("active");

  });

});

// =====================================
// ADD TO CART
// =====================================

const addCartBtn =
document.getElementById("add-cart-btn");

const successMessage =
document.getElementById("success-message");

addCartBtn.addEventListener("click", () => {

  addCartBtn.style.background =
  "#FFCC00";

  addCartBtn.style.color =
  "#000";

  successMessage.style.opacity = 1;

  setTimeout(() => {

    successMessage.style.opacity = 0;

    addCartBtn.style.background =
    "#000";

    addCartBtn.style.color =
    "#FFCC00";

  }, 2000);

});

// =====================================
// INIT
// =====================================

loadProduct();

loadRelatedProducts();

/* =====================================

DYNAMIC LOGIC

product.html?id=2

API / SQL :

SELECT * FROM products
WHERE id = 2;

Sistèm nan pran :

name -> title
images -> photo
price -> price
description -> details

===================================== */
