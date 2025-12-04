const animateElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // sekali animate sahaja
    }
  });
}, { threshold: 0.2 });

animateElements.forEach(el => observer.observe(el));




function toggleDetail(id) {
  // hide all
  document.querySelectorAll('.service-detail').forEach(d => d.style.display = "none");

  // show selected
  document.getElementById('detail-' + id).style.display = "block";

  // scroll to section
  window.scrollTo({
    top: document.getElementById('detail-' + id).offsetTop - 100,
    behavior: "smooth"
  });
}





const header = document.querySelector('.services-header');
const rows = document.querySelectorAll('.service-row');

function checkScroll() {
  // header
  if (header.getBoundingClientRect().top < window.innerHeight - 100) {
    header.classList.add('animate');
  }

  // each service row
  rows.forEach(row => {
    if (row.getBoundingClientRect().top < window.innerHeight - 120) {
      row.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);



const logos = [
    "client/bachok.png","client/billion.png","client/biotech.png","client/fama.png","client/gold.png",
    "client/ipg.png","client/jksm.png","client/jmg.png","client/jnt.png","client/kastam.png",
    "client/kpksb.png","client/ladangrakyatt.png","client/lambang.png","client/mpkb.png","client/nadi.png",
    "client/nafas.png","client/pasirputeh.png","client/risda.png","client/saliran.png","client/tbde.png"
];

let index = 0;

function updateLogos() {
    const container = document.getElementById("logo-container");

    // fade out
    container.classList.remove("show");

    setTimeout(() => {
        container.innerHTML = "";

        const current5 = logos.slice(index, index + 5);

        current5.forEach(src => {
            const card = document.createElement("div");
            card.className = "logo-card";
            card.innerHTML = `<img src="${src}" />`;
            container.appendChild(card);
        });

        // fade in
        container.classList.add("show");

        // move index
        index += 5;
        if (index >= logos.length) index = 0;

    }, 1000); // match fade out
}

// run every 5 seconds
updateLogos();
setInterval(updateLogos, 5000);



//js contact
// Simple hamburger toggle (untuk mobile)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

//project page//

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");

    function animateCards() {
        cards.forEach(card => {
            if (card.getBoundingClientRect().top < window.innerHeight - 120) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", animateCards);
    animateCards();
});

//Network page//

