const compass = document.querySelector(".compass");
const compassHeading = document.querySelector(".compass-heading-output");
const topSides = document.querySelectorAll(".top-side");
var heading;

window.addEventListener("message", (e) => {
  const data = e.data;

  if (data.type === "updateHeading") {
    heading = data.heading;
    updateRot();
  }

  if (data.type === "toggle-open") {
    topSides.forEach((topSide) => {
      topSide.classList.toggle("top-side-hidden");
    });
  }
});

function updateRot() {
  compass.style.backgroundPosition = `calc(${heading * 5 - 1350}px - 25px) 0`;
  if (heading < 0) {
    compassHeading.innerHTML = Math.floor(heading) + 360;
  } else {
    compassHeading.innerHTML = Math.floor(heading);
  }
}
