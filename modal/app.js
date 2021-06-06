const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close");
const subscribe = document.querySelector("#subs");

function toggleModal() {
  if (modal.classList.contains("hidden")) {
    modal.classList.toggle("block");
    modal.classList.toggle("hidden");
  }
}
function closeModal() {
  modal.classList.add("hidden");
}
subscribe.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", closeModal);
