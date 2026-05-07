// =====================================
// SEO FRONTEND OPTIMIZATION
// =====================================

// LAZY LOAD IMAGES

document.addEventListener("DOMContentLoaded", () => {

  const images =
  document.querySelectorAll("img");

  images.forEach(img => {

    img.setAttribute("loading", "lazy");

  });

});

// =====================================
// SIMPLE SCROLL ANIMATION
// =====================================

const cards =
document.querySelectorAll(
  ".product-card, .why-card"
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

/* =====================================

SEO CHECKLIST JLOODNA

✔ Meta Title
✔ Meta Description
✔ Keywords
✔ Open Graph
✔ Twitter Card
✔ JSON-LD Schema
✔ Responsive Design
✔ Lazy Loading Images
✔ SEO Headings H1 H2 H3
✔ Alt Text Images
✔ Clean URLs
✔ Mobile Friendly

===================================== */

/* =====================================

GOOGLE INDEXING

1. Submit sitemap.xml
2. Submit robots.txt
3. Add Google Search Console
4. Add Google Analytics
5. Add Google Business Profile
6. Create backlinks
7. Publish SEO blog articles

===================================== */
