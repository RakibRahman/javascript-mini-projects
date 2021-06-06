const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close");
const subscribe = document.querySelector("#subs");

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
subscribe.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", closeModal);
