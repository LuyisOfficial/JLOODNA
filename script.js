/* ===================================== */
/* JLOODNA GLOBAL TRADING - HOME SCRIPT */
/* ===================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE MENU
  ========================= */

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if(menuToggle && mobileMenu){

    menuToggle.addEventListener("click", () => {

      mobileMenu.classList.toggle("active");

      // Animation icon
      menuToggle.classList.toggle("open");

    });

  }

  /* =========================
     HERO SLIDER
  ========================= */

  const slides = document.querySelectorAll(".slide");

  let currentSlide = 0;

  function showSlide(index){

    if(slides.length === 0) return;

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slides[index].classList.add("active");

  }

  function nextSlide(){

    if(slides.length === 0) return;

    currentSlide++;

    if(currentSlide >= slides.length){
      currentSlide = 0;
    }

    showSlide(currentSlide);

  }

  // Initial slide
  showSlide(currentSlide);

  // Auto slider
  if(slides.length > 1){

    setInterval(() => {
      nextSlide();
    }, 5000);

  }

  /* =========================
     PRODUCTS DATABASE
  ========================= */

  const localProducts =
  JSON.parse(localStorage.getItem("jloodnaProducts")) || [];

  // Default products si admin pa ajoute pwodwi toujou
  const defaultProducts = [

    {
      id:1,
      name:"Smart Watch Ultra",
      price:120,
      image:"./products/watch.jpg",
      featured:true
    },

    {
      id:2,
      name:"Premium Sneakers",
      price:85,
      image:"./products/shoes.jpg",
      featured:true
    },

    {
      id:3,
      name:"Gaming Headset",
      price:65,
      image:"./products/headset.jpg",
      featured:false
    },

    {
      id:4,
      name:"Luxury Bag",
      price:95,
      image:"./products/bag.jpg",
      featured:true
    },

    {
      id:5,
      name:"Bluetooth Speaker",
      price:55,
      image:"./products/speaker.jpg",
      featured:false
    },

    {
      id:6,
      name:"Kitchen Blender",
      price:70,
      image:"./products/blender.jpg",
      featured:false
    }

  ];

  // Utiliser produits admin sinon produits par défaut
  const products =
  localProducts.length > 0
  ? localProducts
  : defaultProducts;

  /* =========================
     PRODUCTS GRID
  ========================= */

  const productsGrid =
  document.getElementById("productsGrid");

  if(productsGrid){

    productsGrid.innerHTML = "";

    products.forEach((product,index) => {

      const card = document.createElement("div");

      card.classList.add("product-card");

      card.innerHTML = `

        <div class="product-image-box">

          <img
            src="${product.image}"
            class="product-image"
            alt="${product.name}"
            loading="lazy"
            onerror="this.src='./products/default.jpg'"
          >

        </div>

        <div class="product-content">

          <h3 class="product-title">

            ${product.name}

          </h3>

          <div class="product-price">

            $${product.price}

          </div>

          <button
            class="add-cart-btn"
            data-index="${index}"
          >

            Ajouter au panier

          </button>

        </div>

      `;

      productsGrid.appendChild(card);

    });

  }

  /* =========================
     BEST SELLERS
  ========================= */

  const bestSellerContainer =
  document.getElementById("bestSellerContainer");

  if(bestSellerContainer){

    bestSellerContainer.innerHTML = "";

    const featuredProducts =
    products.filter(product => product.featured);

    featuredProducts.forEach((product,index) => {

      bestSellerContainer.innerHTML += `

        <div class="product-card">

          <div class="product-image-box">

            <img
              src="${product.image}"
              alt="${product.name}"
              class="product-image"
              loading="lazy"
              onerror="this.src='./products/default.jpg'"
            >

          </div>

          <div class="product-content">

            <h3 class="product-title">

              ${product.name}

            </h3>

            <div class="product-price">

              $${product.price}

            </div>

            <button
              class="add-cart-btn"
              data-featured="${index}"
            >

              Ajouter au panier

            </button>

          </div>

        </div>

      `;

    });

  }

  /* =========================
     ADD TO CART
  ========================= */

  document.addEventListener("click", (e) => {

    if(e.target.classList.contains("add-cart-btn")){

      const productCard =
      e.target.closest(".product-card");

      const productName =
      productCard.querySelector(".product-title")
      .textContent;

      showNotification(
        `${productName} ajouté au panier`
      );

    }

  });

  /* =========================
     NOTIFICATION
  ========================= */

  function showNotification(message){

    const notification =
    document.createElement("div");

    notification.className =
    "cart-notification";

    notification.innerHTML = `
      <i class="fa-solid fa-circle-check"></i>
      ${message}
    `;

    document.body.appendChild(notification);

    setTimeout(() => {

      notification.classList.add("show");

    },100);

    setTimeout(() => {

      notification.classList.remove("show");

      setTimeout(() => {

        notification.remove();

      },300);

    },3000);

  }

});
