// Parallax
const parallax = document.getElementById("parallax");

// Animate
const animTargets = document.querySelectorAll("[data-animate]");
const animationClass = "animate";

window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

console.log(animTargets);

window.addEventListener("scroll", () => {
    let offset = window.pageYOffset + (window.innerHeight * 3) / 4;
    animTargets.forEach((element) => {
        if(offset > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
});
