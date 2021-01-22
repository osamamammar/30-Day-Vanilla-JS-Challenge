const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function checkFlicker(element, degree) {
  if (degree === 90) {
    element.style.transition = "all 0.0s";
  }
}
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hour = now.getHours();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minsDegrees = (mins / 60) * 360 + 90;
  const hourDegrees = (hour / 12) * 360 + 90;
  secondHand.style.transform = `rotateZ(${secondsDegrees}deg)`;
  minsHand.style.transform = `rotateZ(${minsDegrees}deg)`;
  hourHand.style.transform = `rotateZ(${hourDegrees}deg)`;
  checkFlicker(secondHand, secondsDegrees);
  checkFlicker(minsHand, minsDegrees);
  checkFlicker(hourHand, hourDegrees);
}

setInterval(setDate, 1000);
