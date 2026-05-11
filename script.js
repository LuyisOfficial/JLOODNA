// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// =========================
// HERO SLIDER
// =========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

// AUTO SLIDE

setInterval(nextSlide, 5000);

// =========================
// PRODUCTS DATA
// =========================

const products = [

  {
    name:"Smart Watch Ultra",
    price:"$120",
    image:"./products/watch.jpg"
  },

  {
    name:"Premium Sneakers",
    price:"$85",
    image:"./products/shoes.jpg"
  },

  {
    name:"Gaming Headset",
    price:"$65",
    image:"./products/headset.jpg"
  },

  {
    name:"Luxury Bag",
    price:"$95",
    image:"./products/bag.jpg"
  },

  {
    name:"Bluetooth Speaker",
    price:"$55",
    image:"./products/speaker.jpg"
  },

  {
    name:"Kitchen Blender",
    price:"$70",
    image:"./products/blender.jpg"
  },

  {
    name:"LED TV 4K",
    price:"$450",
    image:"./products/tv.jpg"
  },

  {
    name:"iPhone Premium",
    price:"$999",
    image:"./products/iphone.jpg"
  },

  {
    name:"Fashion Glasses",
    price:"$40",
    image:"./products/glasses.jpg"
  },

  {
    name:"Wireless Mouse",
    price:"$25",
    image:"./products/mouse.jpg"
  }

];

// =========================
// DISPLAY PRODUCTS
// =========================

const productsGrid = document.getElementById("productsGrid");

products.forEach((product) => {

  const card = document.createElement("div");

  card.classList.add("product-card");

  card.innerHTML = `

    <img 
      src="${product.image}" 
      class="product-image"
      alt="${product.name}"
    >

    <div class="product-content">

      <h3 class="product-title">
        ${product.name}
      </h3>

      <div class="product-price">
        ${product.price}
      </div>

      <button class="add-cart-btn">
        Ajouter au panier
      </button>

    </div>

  `;

  productsGrid.appendChild(card);

});
