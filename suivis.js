// PRINT FACTURE
const printBtn = document.getElementById("printInvoice");

printBtn.addEventListener("click", () => {
  window.print();
});

// WHATSAPP SUPPORT
const whatsappBtn = document.querySelector(".whatsapp-btn");

whatsappBtn.addEventListener("click", () => {

  const phone = "50900000000";

  const message =
    "Bonjour Jloodna, j'ai besoin d'aide concernant ma commande #JLD-8829";

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});

// MODIFIER ADRESSE
const editBtn = document.querySelector(".edit-btn");

editBtn.addEventListener("click", () => {

  alert(
    "Vous pouvez modifier votre adresse tant que le colis n'est pas encore expédié."
  );

});
