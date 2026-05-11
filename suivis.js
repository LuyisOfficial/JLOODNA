// order-tracking.js

// PRINT
const printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", () => {
  window.print();
});

// TRACKING SEARCH
const form = document.getElementById("trackingForm");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const trackingNumber =
    document.getElementById("trackingInput").value;

  if(trackingNumber.trim() === ""){
    alert("Veuillez entrer un numéro de commande.");
    return;
  }

  alert(
    `Recherche de la commande : ${trackingNumber}`
  );

});

// WHATSAPP
const whatsappBtn =
document.querySelector(".whatsapp");

whatsappBtn.addEventListener("click", () => {

  const phone = "50900000000";

  const message =
    "Bonjour Jloodna, j'ai besoin d'aide concernant ma commande.";

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

});
