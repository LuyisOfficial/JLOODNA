// ======================================
// JLOODNA 404 ANIMATION SYSTEM
// ======================================

// RANDOM FLOAT EFFECT

const icons =
document.querySelectorAll(
  ".floating-icons i"
);

icons.forEach(icon => {

  const randomDuration =
  Math.random() * 5 + 5;

  icon.style.animationDuration =
  `${randomDuration}s`;

});

// ======================================
// MOUSE PARALLAX EFFECT
// ======================================

document.addEventListener(
  "mousemove",
  (e) => {

    const x =
    (window.innerWidth / 2 - e.pageX) / 40;

    const y =
    (window.innerHeight / 2 - e.pageY) / 40;

    const planet =
    document.querySelector(".planet-container");

    planet.style.transform =
    `translate(${x}px, ${y}px)`;

  }
);

// ======================================
// BUTTON RIPPLE EFFECT
// ======================================

const buttons =
document.querySelectorAll(".buttons a");

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.boxShadow =
    "0 10px 30px rgba(255,204,0,0.4)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.boxShadow = "none";

  });

});

// ======================================
// AUTO TITLE ANIMATION
// ======================================

let visible = true;

setInterval(() => {

  document.title = visible

  ? "404 | Paj pa jwenn"
  : "JLOODNA GLOBAL SHOP";

  visible = !visible;

}, 2000);

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log(`
====================================
JLOODNA GLOBAL SHOP
404 PAGE SYSTEM ACTIVE
====================================
`);
