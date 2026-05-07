// ===============================
// LEGAL PAGE ANIMATION
// ===============================

const legalBoxes =
document.querySelectorAll(".legal-box");

window.addEventListener("scroll", () => {

  legalBoxes.forEach(box => {

    const boxTop =
    box.getBoundingClientRect().top;

    const screenHeight =
    window.innerHeight;

    if(boxTop < screenHeight - 100){

      box.style.opacity = "1";

      box.style.transform =
      "translateY(0px)";

    }

  });

});

// INITIAL STYLE

legalBoxes.forEach(box => {

  box.style.opacity = "0";

  box.style.transform =
  "translateY(40px)";

  box.style.transition =
  "0.7s ease";

});

/* ===============================

JLOODNA LEGAL LOGIC

1. Refund & Return Policy
2. Privacy Policy
3. Terms of Service
4. Compliance e-commerce
5. Customer protection
6. Company legal protection

================================ */
