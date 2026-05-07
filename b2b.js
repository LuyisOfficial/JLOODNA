// ======================================
// B2B FORM VALIDATION
// ======================================

const form =
document.getElementById("b2b-form");

const successMessage =
document.getElementById("success-message");

// REQUIRED FIELDS

const requiredFields = [

  "business-name",
  "nif",
  "product",
  "quantity"

];

// ======================================
// SUBMIT FORM
// ======================================

form.addEventListener("submit", (e) => {

  e.preventDefault();

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

    successMessage.style.display =
    "block";

    form.reset();

    console.log(`
      Nouvelle demande B2B envoyée
      vers sales@jloodna.com
    `);

  }

});

// ======================================
// SCROLL ANIMATION
// ======================================

const cards =
document.querySelectorAll(
  ".benefit-card, .step-card"
);

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const top =
    card.getBoundingClientRect().top;

    const screen =
    window.innerHeight;

    if(top < screen - 100){

      card.style.opacity = "1";

      card.style.transform =
      "translateY(0px)";

    }

  });

});

// INITIAL STYLE

cards.forEach(card => {

  card.style.opacity = "0";

  card.style.transform =
  "translateY(40px)";

  card.style.transition =
  "0.7s ease";

});

/* ======================================

B2B BACK-END LOGIC

1. Client remplit formulaire.
2. API :
POST /api/b2b-quote

3. Vérification :
NIF / Patant business.

4. Notification :
Envoyer email automatique
vers sales@jloodna.com

5. Réponse :
Equipe Jloodna envoie devis
dans moins de 48 heures.

====================================== */
