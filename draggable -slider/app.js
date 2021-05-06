const slider = document.querySelector(".slideContainer");
const innerSlider = document.querySelector(".inner-slider");

let pressed = false;
let slideX;
let x;

function onPress(e) {
  pressed = true;
  slideX = e.offsetX - innerSlider.offsetLeft; //enable slider ability
  slider.style.cursor = "grabbing";
}

function onMove(e) {
  if (!pressed) return; // do nothing if not pressed
  e.preventDefault(); //prevent default behavior
  x = e.offsetX;
  innerSlider.style.left = `${x - slideX}px`; //slider functionality on
  limitBoundaries();
}
window.addEventListener("mouseup", () => {
  pressed = false;
});

function limitBoundaries() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px"; // will prevent shrinking whole dragging to the right side
    console.log("right");
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
    // will prevent shrinking whole dragging to the left side
  }
}

slider.addEventListener("mousedown", onPress);
slider.addEventListener("mousemove", onMove);
