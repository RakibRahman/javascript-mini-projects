const closeBtn = document.querySelector(".hamburger");
const cross = closeBtn.getElementsByTagName("span");
const sideBar = document.querySelector(".nav");
const wrapper = document.querySelector("#wrapper");
console.log(wrapper);
function closeMenu() {
  for (let bar of cross) {
    bar.classList.toggle("change");
  }
  wrapper.classList.toggle("shift");
  sideBar.classList.toggle("open");
}
closeBtn.addEventListener("click", closeMenu);
