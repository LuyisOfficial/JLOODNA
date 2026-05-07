// ===============================
// CONTACT FORM VALIDATION
// ===============================

const form =
document.getElementById("contact-form");

const successMessage =
document.getElementById("success-message");

// ===============================
// REQUIRED FIELDS
// ===============================

const requiredFields = [

  "name",
  "email",
  "subject",
  "message"

];

// ===============================
// FORM SUBMIT
// ===============================

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

    // BACK-END EXAMPLE

    console.log(`
      Nouveau message envoyé
      vers contact@jloodna.com
    `);

  }

});

/* ===============================

BACK-END LOGIC

1. Client clique "VOYE MESAJ"

2. API :
POST /api/contact

3. Database :
Sauvegarder message client

4. Email automatique :
Envoyer notification vers :
contact@jloodna.com

5. Confirmation client :
"Mèsi! Mesaj ou a voye byen"

================================ */
