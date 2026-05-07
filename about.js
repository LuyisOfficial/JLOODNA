// ===============================
// JLOODNA ABOUT PAGE
// ===============================

// SIMPLE SCROLL ANIMATION

const cards =
document.querySelectorAll(
  ".value-card, .legal-box, .signature-box"
);

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop =
    card.getBoundingClientRect().top;

    const screenHeight =
    window.innerHeight;

    if(cardTop < screenHeight - 100){

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

/* ===============================

JLOODNA ABOUT PAGE LOGIC

1. Présente l'histoire du business.
2. Renforce la confiance client.
3. Affiche structure légale S.R.L.
4. Ajoute CTA pour conversion.
5. Design professionnel trading.

================================ */
