const compass = document.querySelector(".compass");

var heading = 120;

function updateRot() {
  compass.style.backgroundPosition = `calc(${heading * -1 * 10}px - 50px) 0`;
}

console.log(`calc(${heading * -1 * 10 - 2700}px - 50px) 0`);

function test() {
  heading = Math.floor(Math.random() * (360 - 0 + 1) + 0);
  //   updateRot(heading);
}

// updateRot();

// updateRot(180);
// setInterval(test, 1000);
setInterval(updateRot, 0.1);
