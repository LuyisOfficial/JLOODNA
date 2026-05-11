// ===============================
// EXEMPLE DE PRODUITS AJOUTÉS
// ===============================

// Seuls les produits choisis par le client apparaissent.
// Chaque produit doit être ajouté dans localStorage depuis shop.html

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");
const emptyCart = document.getElementById("empty-cart");
const checkoutBtn = document.getElementById("checkout-btn");

const SHIPPING = 15;


// ===============================
// AFFICHER PANIER
// ===============================

function renderCart(){

  cartItems.innerHTML = "";

  if(cart.length === 0){

    emptyCart.style.display = "block";
    subtotalEl.textContent = "$0";
    totalEl.textContent = "$0";

    return;
  }

  emptyCart.style.display = "none";

  let subtotal = 0;

  cart.forEach((product, index) => {

    subtotal += product.price * product.quantity;

    const item = document.createElement("div");
    item.classList.add("cart-item");

    item.innerHTML = `

      <div class="cart-left">

        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>

          <div class="quantity-box">

            <button class="quantity-btn" onclick="changeQty(${index}, -1)">-</button>

            <span>${product.quantity}</span>

            <button class="quantity-btn" onclick="changeQty(${index}, 1)">+</button>

          </div>

        </div>

      </div>

      <button class="remove-btn" onclick="removeItem(${index})">
        Retire
      </button>

    `;

    cartItems.appendChild(item);
  });

  subtotalEl.textContent = `$${subtotal}`;
  totalEl.textContent = `$${subtotal + SHIPPING}`;
}


// ===============================
// CHANGER QUANTITÉ
// ===============================

function changeQty(index, change){

  cart[index].quantity += change;

  if(cart[index].quantity <= 0){
    cart.splice(index, 1);
  }

  saveCart();
}


// ===============================
// RETIRER PRODUIT
// ===============================

function removeItem(index){

  cart.splice(index, 1);
  saveCart();
}


// ===============================
// SAUVEGARDER
// ===============================

function saveCart(){

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}


// ===============================
// CHECKOUT
// ===============================

checkoutBtn.addEventListener("click", () => {

  if(cart.length === 0){
    alert("Panyen ou vid.");
    return;
  }

  // Vérifier connexion client
  const user = JSON.parse(localStorage.getItem("jloodnaUser"));

  if(!user){

    alert("Ou dwe kreye kont oswa konekte avan.");

    window.location.href = "login.html";
    return;
  }

  // Sauvegarder commande
  localStorage.setItem("checkoutCart", JSON.stringify(cart));

  // Redirection checkout
  window.location.href = "checkout.html";
});


renderCart();
