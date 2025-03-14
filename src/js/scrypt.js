var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}

const swiper = new Swiper(".swiper1", {
  direction: "vertical", // Défilement vertical
  loop: true, // Recommence à zéro après la dernière slide
  autoplay: {
    delay: 5000, // Temps d'affichage de chaque slide en ms
    disableOnInteraction: false, // L'autoplay continue même après une interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper2 = new Swiper(".swiper2", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true, // Recommence à zéro après la dernière slide
  autoplay: {
    delay: 3000, // Temps d'affichage de chaque slide en ms
    disableOnInteraction: false, // L'autoplay continue même après une interaction
  },
  breakpoints: {
    1023: {
      // Max-width 1023px = Tablette
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      // Max-width 767px = Mobile
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
});
function animateCounter(id, end, duration) {
  let start = 0;
  let increment = end / (duration / 16); // 60 FPS
  let obj = document.getElementById(id);
  let timer = setInterval(() => {
    start += increment;
    obj.innerText = Math.floor(start) + "+";
    if (start >= end) {
      obj.innerText = end + "+";
      clearInterval(timer);
    }
  }, 16);
}
animateCounter("counter1", 254, 3000);
animateCounter("counter2", 2414, 3000);
animateCounter("counter3", 854, 3000);
animateCounter("counter4", 685, 3000);

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".reveal", {
    duration: 1500, // Durée de l'animation
    origin: "top", // L'élément vient du bas
    distance: "50px", // Distance de déplacement
    easing: "ease-in-out", // Effet fluide
    reset: true, // Répète l'animation à chaque scroll
  });
  ScrollReveal().reveal(".veal", {
    duration: 3000, // Durée de l'animation
    origin: "top", // L'élément vient du bas
    distance: "100px", // Distance de déplacement
    easing: "ease-in-out", // Effet fluide
    reset: true, // Répète l'animation à chaque scroll
  });
  ScrollReveal().reveal(".bottom", {
    duration: 2000, // Durée de l'animation
    origin: "bottom", // L'élément vient du bas
    distance: "100px", // Distance de déplacement
    easing: "ease-in-out", // Effet fluide
    reset: true, // Répète l'animation à chaque scroll
  });
  ScrollReveal().reveal(".reveal2", {
    duration: 1600, // Durée de l'animation
    origin: "left", // L'élément vient du bas
    distance: "50px", // Distance de déplacement
    easing: "ease-in-out", // Effet fluide
    reset: true, // Répète l'animation à chaque scroll
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  const page = window.location.pathname.replace("/", "") || "home";
  try {
    // Charger dynamiquement le JS et le CSS correspondant à la page
    await import(`../css/${page}.css`);

    console.log(`Styles et scripts pour la page ${page} chargés.`);
  } catch (error) {
    console.log(`Aucun fichier trouvé pour la page : ${page}`);
  }
});
