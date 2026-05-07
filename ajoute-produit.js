// =====================================
// PRODUCT ADMIN SYSTEM
// =====================================

const form =
document.getElementById("product-form");

const imageInput =
document.getElementById("product-image");

const imagePreview =
document.getElementById("image-preview");

const successMessage =
document.getElementById("success-message");

// =====================================
// IMAGE PREVIEW
// =====================================

imageInput.addEventListener("change", () => {

  const file =
  imageInput.files[0];

  if(file){

    const reader =
    new FileReader();

    reader.onload = function(e){

      imagePreview.innerHTML = `
        <img src="${e.target.result}">
      `;

    };

    reader.readAsDataURL(file);

  }

});

// =====================================
// FORM VALIDATION
// =====================================

form.addEventListener("submit", (e) => {

  e.preventDefault();

  let valid = true;

  const fields = [

    "product-name",
    "product-price",
    "product-category",
    "product-description"

  ];

  fields.forEach(id => {

    const input =
    document.getElementById(id);

    const error =
    input.parentElement.querySelector(".error");

    if(input.value.trim() === ""){

      error.style.display = "block";

      input.style.borderColor = "red";

      valid = false;

    }

    else{

      error.style.display = "none";

      input.style.borderColor = "#000";

    }

  });

  // IMAGE VALIDATION

  const imageError =
  imageInput.parentElement
  .querySelector(".error");

  if(imageInput.files.length === 0){

    imageError.style.display =
    "block";

    valid = false;

  }

  else{

    imageError.style.display =
    "none";

  }

  // SUCCESS

  if(valid){

    successMessage.style.display =
    "block";

    // =====================================
    // PRODUCT OBJECT
    // =====================================

    const productData = {

      name:
      document.getElementById("product-name").value,

      price:
      document.getElementById("product-price").value,

      category:
      document.getElementById("product-category").value,

      description:
      document.getElementById("product-description").value,

      featured:
      document.getElementById("featured-product").checked,

      image:
      imageInput.files[0].name

    };

    console.log(productData);

    // =====================================
    // BACK-END API EXAMPLE
    // =====================================

    /*
      fetch("/api/products", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(productData)

      })

    */

    // RESET FORM

    form.reset();

    imagePreview.innerHTML = `
      <p>
        Preview pwodwi a ap parèt isit la
      </p>
    `;

  }

});

/* =====================================

DATABASE STRUCTURE (MySQL)

TABLE: products

id
name
price
category
description
image
featured
created_at

===================================== */

/* =====================================

FRONTEND CONNECTION

HOME PAGE:
SELECT * FROM products
WHERE featured = true

SHOP PAGE:
SELECT * FROM products

FILTER:
SELECT * FROM products
WHERE category = 'Teknoloji'

SEARCH:
SELECT * FROM products
WHERE name LIKE '%iphone%'

===================================== */
