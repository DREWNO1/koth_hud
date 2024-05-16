const compass = document.querySelector(".compass");

var heading;

window.addEventListener("message", (e) => {
  const data = e.data;

  if (data.type === "updateHeading") {
    heading = data.heading;
    updateRot();
    console.log(`calc(${heading * -1 * 10 - 2700}px - 50px) 0`);
  }
});

function updateRot() {
  compass.style.backgroundPosition = `calc(${heading * -1 * 10}px - 50px) 0`;
}

// updateRot();

// updateRot(180);
// setInterval(test, 1000);
