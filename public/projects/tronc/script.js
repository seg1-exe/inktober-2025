gsap.registerPlugin(ScrollTrigger);

const backgrounds = document.querySelectorAll(".bg");
const panels = document.querySelectorAll(".panel");

// afficher la première image dès le départ
backgrounds[0].classList.add("active");

// changer l’image au scroll
panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top center",
    end: "bottom center",
    onEnter: () => changeImage(i),
    onEnterBack: () => changeImage(i),
  });
});

function changeImage(index) {
  backgrounds.forEach((bg, i) => {
    bg.classList.toggle("active", i === index);
  });
}

// animation d’apparition du texte
gsap.utils.toArray(".panel").forEach(panel => {
  const elements = panel.querySelectorAll("h2, p");
  gsap.from(elements, {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: panel,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});
