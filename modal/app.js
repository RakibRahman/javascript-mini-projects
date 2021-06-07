const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close");
const subscribe = document.querySelector("#subs");
const main = document.querySelector("#main");
console.log(main);

function toggleModal() {
  if (modal.classList.contains("hidden")) {
    modal.classList.toggle("block");
    modal.classList.toggle("hidden");
    modal.classList.add("animate__animated", "animate__bounceInDown");
  }
}
function closeModal() {
  modal.classList.add("hidden");
}
function clickAnywhere(e) {
  console.log(e.target);
  if (e.target === main) {
    modal.classList.add("hidden");
  }
}
subscribe.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickAnywhere);
