const compass = document.querySelector(".compass");
const compassHeading = document.querySelector(".compass-heading-output");
var heading;

window.addEventListener("message", (e) => {
  const data = e.data;

  if (data.type === "updateHeading") {
    heading = data.heading;
    updateRot();
    // console.log(`calc(${heading * -1 * 10 - 2700}px - 50px) 0`);
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

// updateRot();
// compass.style.backgroundPosition = `calc(${
//   (360 - heading) * -1 * 5
// }px - 25px) 0`;
// compassHeading.innerHTML = Math.floor(heading);

// updateRot(180);
// setInterval(test, 1000);
