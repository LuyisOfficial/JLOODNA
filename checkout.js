// ============================
// FORM VALIDATION
// ============================

const confirmBtn =
document.getElementById("confirm-btn");

const successPayment =
document.getElementById("success-payment");

const requiredFields = [

  "first-name",
  "last-name",
  "email",
  "phone",
  "address"

];

// ============================
// VALIDATE FORM
// ============================

confirmBtn.addEventListener("click", () => {

  let valid = true;

  requiredFields.forEach(id => {

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

  // SUCCESS

  if(valid){

    confirmBtn.style.background =
    "#000";

    confirmBtn.style.color =
    "#FFCC00";

    successPayment.style.display =
    "block";

  }

});

/* ============================

ANTI CART ABANDONMENT

1. Affiche shipping directement.
2. Auto-fill si user connecté.
3. Checkout simplifié.
4. Paiement sécurisé visible.

============================ */
