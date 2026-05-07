// ==========================
// DONNEES PRODUITS
// ==========================

const products = [

  {
    id: 1,
    name: "Smartphone Pro X",
    price: "$299",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",
    showOnHome: true
  },

  {
    id: 2,
    name: "Kask Wireless",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    showOnHome: true
  },

  {
    id: 3,
    name: "Smart Watch",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    showOnHome: false
  },

  {
    id: 4,
    name: "Laptop Business",
    price: "$799",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop",
    showOnHome: true
  }

];

// ==========================
// AFFICHER PRODUITS HOME
// ==========================

const productsGrid = document.getElementById("products-grid");

const homeProducts = products.filter(
  product => product.showOnHome === true
);

homeProducts.forEach(product => {

  const card = document.createElement("div");

  card.classList.add("product-card");

  card.innerHTML = `
  
    <img src="${product.image}" class="product-image">

    <div class="product-content">

      <h3 class="product-title">${product.name}</h3>

      <div class="product-price">${product.price}</div>

      <button class="add-cart-btn">
        Ajoute nan panyen
      </button>

    </div>
  
  `;

  productsGrid.appendChild(card);

});

// ==========================
// PANIER SIMPLE
// ==========================

let cart = 0;

const cartCount = document.getElementById("cart-count");

document.addEventListener("click", function(e){

  if(e.target.classList.contains("add-cart-btn")){

    cart++;

    cartCount.innerText = cart;

  }

});
