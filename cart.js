// ============================
// CART PRODUCTS
// ============================

let cart = [

  {
    id:1,
    name:"Samsung Galaxy S24",
    price:899,
    quantity:1,
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop"
  },

  {
    id:2,
    name:"Wireless Headphones",
    price:120,
    quantity:2,
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
  }

];

// ============================
// HTML ELEMENTS
// ============================

const cartItems =
document.getElementById("cart-items");

const subtotalElement =
document.getElementById("subtotal");

const totalElement =
document.getElementById("total");

const shippingElement =
document.getElementById("shipping");

const shippingCost = 15;

// ============================
// DISPLAY CART
// ============================

function renderCart(){

  cartItems.innerHTML = "";

  let subtotal = 0;

  cart.forEach(product => {

    subtotal +=
    product.price * product.quantity;

    const item =
    document.createElement("div");

    item.classList.add("cart-item");

    item.innerHTML = `

      <img src="${product.image}"
      class="cart-image">

      <div class="cart-info">

        <h3>${product.name}</h3>

        <div class="cart-price">
          $${product.price}
        </div>

        <div class="quantity-controls">

          <button class="qty-btn"
          onclick="changeQty(${product.id}, -1)">
            -
          </button>

          <span class="qty-number">
            ${product.quantity}
          </span>

          <button class="qty-btn"
          onclick="changeQty(${product.id}, 1)">
            +
          </button>

        </div>

      </div>

      <button class="delete-btn"
      onclick="removeItem(${product.id})">

        <i class="fa-solid fa-trash"></i>

      </button>

    `;

    cartItems.appendChild(item);

  });

  subtotalElement.innerText =
  "$" + subtotal;

  totalElement.innerText =
  "$" + (subtotal + shippingCost);

}

// ============================
// CHANGE QUANTITY
// ============================

function changeQty(id, action){

  cart = cart.map(product => {

    if(product.id === id){

      product.quantity += action;

      if(product.quantity < 1){
        product.quantity = 1;
      }

    }

    return product;

  });

  renderCart();

}

// ============================
// REMOVE PRODUCT
// ============================

function removeItem(id){

  cart = cart.filter(product =>
    product.id !== id
  );

  renderCart();

}

// ============================
// INIT
// ============================

renderCart();
