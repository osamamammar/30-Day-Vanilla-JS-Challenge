function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // Guard Clause
  if (!audio) return;
  // Rewind Audio Again
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}
// Remove Transform After Transition Ended
function removeTransform(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransform));
