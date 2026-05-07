// =========================
// PRODUCTS DATABASE
// =========================

const products = [

  {
    id:1,
    name:"Samsung Galaxy S24",
    category:"mobile",
    categoryText:"Teknoloji Mobil",
    price:899,
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",
    createdAt:"2026-04-01"
  },

  {
    id:2,
    name:"Wireless Headphones",
    category:"accessories",
    categoryText:"Akseswa Elektwonik",
    price:120,
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    createdAt:"2026-05-01"
  },

  {
    id:3,
    name:"Smart Watch Pro",
    category:"accessories",
    categoryText:"Akseswa Elektwonik",
    price:240,
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    createdAt:"2026-03-15"
  },

  {
    id:4,
    name:"Beauty Care Kit",
    category:"care",
    categoryText:"Swen Pèsonèl",
    price:75,
    image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop",
    createdAt:"2026-05-05"
  },

  {
    id:5,
    name:"Gaming Laptop",
    category:"mobile",
    categoryText:"Teknoloji Mobil",
    price:1500,
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop",
    createdAt:"2026-02-20"
  }

];

// =========================
// VARIABLES
// =========================

const productsGrid =
document.getElementById("products-grid");

const searchInput =
document.getElementById("search-input");

const filterButtons =
document.querySelectorAll(".filter-btn");

const sortSelect =
document.getElementById("sort-select");

let currentCategory = "all";

// =========================
// DISPLAY PRODUCTS
// =========================

function displayProducts(items){

  productsGrid.innerHTML = "";

  if(items.length === 0){

    productsGrid.innerHTML = `
      <h2>
        Pa gen pwodwi disponib.
      </h2>
    `;

    return;
  }

  items.forEach(product => {

    const card = document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `

      <div class="product-image-box">

        <img src="${product.image}"
        class="product-image">

      </div>

      <div class="product-content">

        <h3 class="product-title">
          ${product.name}
        </h3>

        <div class="product-category">
          ${product.categoryText}
        </div>

        <div class="product-price">
          $${product.price}
        </div>

        <button class="product-btn">
          Ajoute nan Panyen
        </button>

      </div>

    `;

    productsGrid.appendChild(card);

  });

}

// =========================
// FILTER PRODUCTS
// =========================

function filterProducts(){

  let filtered = [...products];

  // CATEGORY FILTER

  if(currentCategory !== "all"){

    filtered = filtered.filter(product =>
      product.category === currentCategory
    );

  }

  // SEARCH FILTER

  const searchValue =
  searchInput.value.toLowerCase();

  filtered = filtered.filter(product =>
    product.name.toLowerCase()
    .includes(searchValue)
  );

  // SORT

  const sortValue = sortSelect.value;

  if(sortValue === "low-high"){

    filtered.sort((a,b)=>
      a.price - b.price
    );

  }

  else if(sortValue === "high-low"){

    filtered.sort((a,b)=>
      b.price - a.price
    );

  }

  else if(sortValue === "newest"){

    filtered.sort((a,b)=>
      new Date(b.createdAt)
      - new Date(a.createdAt)
    );

  }

  displayProducts(filtered);

}

// =========================
// CATEGORY BUTTONS
// =========================

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    currentCategory =
    button.dataset.category;

    filterProducts();

  });

});

// =========================
// SEARCH EVENT
// =========================

searchInput.addEventListener(
  "keyup",
  filterProducts
);

// =========================
// SORT EVENT
// =========================

sortSelect.addEventListener(
  "change",
  filterProducts
);

// =========================
// INITIAL LOAD
// =========================

displayProducts(products);

/* ====================================

SQL/API LOGIC EXAMPLES

Paj Boutik :
SELECT * FROM produits;

Filtre kategori :
SELECT * FROM produits
WHERE category = 'accessories';

Search :
SELECT * FROM produits
WHERE name LIKE '%Samsung%';

Homepage :
SELECT * FROM produits
WHERE featured = true;

==================================== */
